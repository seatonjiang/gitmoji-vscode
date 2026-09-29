import * as vscode from "vscode";
import { GitExtension, Repository } from "./types/git";
import Gitmoji from "./data/gitmoji";

export function activate(context: vscode.ExtensionContext) {
    let disposable = vscode.commands.registerCommand(
        "extension.showGitmoji",
        (uri?) => {
            const git = getGitExtension();

            if (!git) {
                vscode.window.showErrorMessage("Unable to load Git Extension");
                return;
            }

            let addCustomEmoji: Array<any> =
                vscode.workspace
                    .getConfiguration()
                    .get("gitmoji.addCustomEmoji") || [];
            const showEmojiCode: boolean | undefined = vscode.workspace
                .getConfiguration()
                .get("gitmoji.showEmojiCode");
            const onlyUseCustomEmoji: boolean | undefined = vscode.workspace
                .getConfiguration()
                .get("gitmoji.onlyUseCustomEmoji");
            const autoMatch: boolean | undefined = vscode.workspace
                .getConfiguration()
                .get("gitmoji.autoMatch");
            const outputType = vscode.workspace
                .getConfiguration()
                .get("gitmoji.outputType");
            const insertPosition: string | undefined = vscode.workspace
                .getConfiguration()
                .get("gitmoji.insertPosition");
            const canRepeat: boolean | undefined = vscode.workspace
                .getConfiguration()
                .get("gitmoji.canRepeat");

            const allEmojis =
                onlyUseCustomEmoji === true
                    ? [...addCustomEmoji]
                    : [...Gitmoji, ...addCustomEmoji];
            let emojis = [...allEmojis];

            const usage = loadUsageCounts(context);
            const targets = resolveTargetRepositories(git.repositories, uri);

            // fetch comment to auto match emoji
            let comment = "";
            if (autoMatch && targets.length > 0) {
                comment = targets[0].inputBox.value.toLowerCase();
                const matched = emojis.filter((e) => {
                    return (
                        e.description?.toLowerCase().includes(comment) ||
                        e.code?.toLowerCase().includes(comment)
                    );
                });
                if (matched.length > 0) {
                    emojis = matched;
                }
            }

            emojis = sortEmojisByUsage(emojis, usage);

            const items = emojis.map((emojiObj) => {
                const { description, code, emoji } = emojiObj;
                const displayCode = showEmojiCode ? code : "";
                const label = `${emoji} ${description} ${displayCode}`;
                return {
                    label,
                    code,
                    emoji,
                };
            });

            vscode.window.showQuickPick(items).then(async function (selected) {
                if (selected) {
                    await incrementUsageCount(
                        context,
                        selected.code,
                        selected.emoji
                    );
                    const valueToAdd =
                        outputType === "emoji" ? selected.emoji : selected.code;
                    const preferCursor = insertPosition === "cursor";
                    const emojiTokens: string[] = allEmojis
                        .map((e) => e.emoji)
                        .filter(Boolean);
                    const codeTokens: string[] = allEmojis
                        .map((e) => e.code)
                        .filter(Boolean);
                    const tokensToStrip: string[] = Array.from(
                        new Set([...emojiTokens, ...codeTokens])
                    );
                    if (
                        preferCursor &&
                        (await tryInsertIntoCommitEditor(valueToAdd))
                    ) {
                        return;
                    }
                    const selection =
                        targets.length === 1
                            ? await focusScmInput(targets[0])
                            : undefined;
                    if (preferCursor && selection) {
                        await typeIntoScmInput(
                            targets[0].inputBox.value,
                            selection,
                            valueToAdd
                        );
                        return;
                    }
                    for (const repo of targets) {
                        updateCommit(
                            repo,
                            valueToAdd,
                            insertPosition === "end",
                            tokensToStrip,
                            // cursor insertion never replaces, nor should its fallback
                            canRepeat || preferCursor
                        );
                    }
                }
            });
        }
    );

    context.subscriptions.push(disposable);
}

/**
 * Inserts the newly selected Gitmoji into the commit message and replaces any existing prefix or suffix Gitmoji.
 *
 * Logic:
 * - When `asSuffix` is false, removes any consecutive Gitmoji (both emoji and code) at the beginning of the message,
 *   then prepends the new Gitmoji;
 * - When `asSuffix` is true, removes any consecutive Gitmoji (both emoji and code) at the end of the message,
 *   then appends the new Gitmoji.
 */
function updateCommit(
    repository: Repository,
    valueOfGitmoji: string,
    asSuffix: boolean,
    tokensToStrip: string[],
    canRepeat: boolean = false
) {
    const tokenPattern = buildTokenPattern(tokensToStrip);
    const startTokenRegex = new RegExp(`^(?:${tokenPattern})(?:\\s+|$)`);
    const endTokenRegex = new RegExp(`(?:\\s+|^)(${tokenPattern})$`);

    let current = repository.inputBox.value;

    if (!asSuffix) {
        if (!canRepeat) {
            current = removeLeadingTokens(current, startTokenRegex);
        }
        repository.inputBox.value = `${valueOfGitmoji} ${current}`;
    } else {
        if (!canRepeat) {
            current = removeTrailingTokens(current, endTokenRegex);
        }
        const sep = current.length > 0 ? " " : "";
        repository.inputBox.value = `${current}${sep}${valueOfGitmoji}`;
    }
}

/**
 * Builds a regular expression pattern to match any Gitmoji (both emoji and code) from the given list.
 */
function buildTokenPattern(tokens: string[]): string {
    const escaped = tokens.map(escapeRegExp).filter((t) => t.length > 0);
    return escaped.join("|");
}

/**
 * Removes any consecutive Gitmoji (both emoji and code) at the beginning of the message.
 */
function removeLeadingTokens(text: string, tokenAtStart: RegExp): string {
    let result = text.replace(/^\s+/, "");
    while (tokenAtStart.test(result)) {
        result = result.replace(tokenAtStart, "");
        result = result.replace(/^\s+/, "");
    }
    return result;
}

/**
 * Removes any consecutive Gitmoji (both emoji and code) at the end of the message.
 */
function removeTrailingTokens(text: string, tokenAtEnd: RegExp): string {
    let result = text.replace(/\s+$/, "");
    while (tokenAtEnd.test(result)) {
        result = result.replace(tokenAtEnd, "");
        result = result.replace(/\s+$/, "");
    }
    return result;
}

/**
 * Escapes special characters in a string to ensure they are treated as literal characters in regular expressions.
 */
function escapeRegExp(str: string): string {
    return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

/**
 * Resolves the repositories whose commit message receives the Gitmoji.
 *
 * Priority:
 * - The repository the command was invoked on (`uri`, passed by the per-repository SCM title button);
 * - The last focused repository (`ui.selected`: VS Code selects a repository when it or its commit
 *   message input box gets focus);
 * - All repositories.
 */
function resolveTargetRepositories(
    repositories: Repository[],
    uri?: any
): Repository[] {
    if (uri) {
        const uriPath = uri._rootUri?.path || uri.rootUri.path;
        return repositories.filter((r) => r.rootUri.path === uriPath);
    }
    const selected = repositories.find((r) => r.ui.selected);
    return selected ? [selected] : repositories;
}

/**
 * Moves focus to the commit message input box of the specified repository.
 * Returns its selection as offsets into the message, or `undefined` if focusing failed.
 *
 * The API tells neither which input box has focus, nor how to focus a given one. Instead:
 * - `workbench.scm.action.focusNextInput` focuses the input box of the selected repository,
 *   unless an input box already has focus, in which case it moves on to the next repository
 *   (calling it blindly is what made focus cycle through, and expand, other repositories);
 * - `type` inserts text in the focused editor, if any.
 * Hence a zero-width space is typed as a probe (and removed): if it lands in the target input box, focus is
 * already there, and diffing the message locates the selection (unambiguously, unlike with a regular space);
 * otherwise, `focusNextInput` is issued once and the probe repeated.
 * Only the selected repository can be focused this way.
 */
async function focusScmInput(
    repository: Repository
): Promise<{ start: number; end: number } | undefined> {
    const probe = "\u200b";
    // `undo` may also revert the user's last typing, so only use it to restore a replaced selection
    const removeProbe = (replaced: boolean) =>
        vscode.commands.executeCommand(replaced ? "undo" : "deleteLeft");
    if (!repository.ui.selected) {
        return undefined;
    }
    for (const refocus of [false, true]) {
        if (refocus) {
            try {
                await vscode.commands.executeCommand(
                    "workbench.scm.action.focusNextInput"
                );
            } catch {
                return undefined;
            }
        }
        const before = repository.inputBox.value;
        // edits to the input box document are not reported in time, those to regular editors are
        const active = vscode.window.activeTextEditor?.document;
        let stray: vscode.TextDocumentContentChangeEvent | undefined;
        const listener = vscode.workspace.onDidChangeTextDocument((e) => {
            if (e.document === active) {
                stray = e.contentChanges[0] ?? stray;
            }
        });
        try {
            await vscode.commands.executeCommand("type", { text: probe });
        } catch {
            return undefined;
        } finally {
            listener.dispose();
        }
        // the input box value is synced before `type` returns
        const after = repository.inputBox.value;
        if (after !== before) {
            // `after` is `before` with [start, end) replaced by the probe
            let start = 0;
            while (after[start] === before[start]) {
                start++;
            }
            const end = before.length - (after.length - start - probe.length);
            await removeProbe(end > start);
            return { start, end };
        }
        if (stray) {
            await removeProbe(stray.rangeLength > 0);
        }
    }
    return undefined;
}

/**
 * Pads the Gitmoji with a space on either side, unless the neighboring character is whitespace or missing.
 */
function padGitmoji(value: string, before?: string, after?: string): string {
    const pad = (c?: string) => (c && !/\s/.test(c) ? " " : "");
    return pad(before) + value + pad(after);
}

function getGitExtension() {
    const vscodeGit =
        vscode.extensions.getExtension<GitExtension>("vscode.git");
    const gitExtension = vscodeGit && vscodeGit.exports;
    return gitExtension && gitExtension.getAPI(1);
}

export function deactivate() {}

/**
 * Inserts the Gitmoji at the current cursor position inside an editor containing a commit message.
 *
 * Behavior and constraints:
 * - Only works when the active editor's language is `git-commit` or the filename ends with `COMMIT_EDITMSG`;
 * - Automatically adds a separating space if the characters before or after the cursor are not whitespace;
 * - Does not remove existing emojis at the start or end of the message, only inserts in place;
 * - Returns `false` when not inside a commit message editor; the caller will then fall back to SCM input logic.
 */
async function tryInsertIntoCommitEditor(valueToAdd: string): Promise<boolean> {
    const editor = vscode.window.activeTextEditor;
    if (!editor) {
        return false;
    }
    const doc = editor.document;
    const isCommitEditor =
        doc.languageId === "git-commit" ||
        /COMMIT_EDITMSG$/i.test(doc.fileName);
    if (!isCommitEditor) {
        return false;
    }
    const selection = editor.selection;
    const pos = selection.active;
    const lineText = doc.lineAt(pos.line).text;
    const beforeChar =
        pos.character > 0 ? lineText[pos.character - 1] : undefined;
    const afterChar =
        pos.character < lineText.length ? lineText[pos.character] : undefined;
    const insertText = padGitmoji(valueToAdd, beforeChar, afterChar);
    const success = await editor.edit((edit) => {
        if (!selection.isEmpty) {
            edit.delete(selection);
        }
        edit.insert(pos, insertText);
    });
    if (success) {
        const newPos = pos.translate(0, insertText.length);
        editor.selection = new vscode.Selection(newPos, newPos);
    }
    return success;
}

/**
 * Types the Gitmoji over the selection of the focused SCM commit message input box, padded as in `padGitmoji`.
 * The selection is the one reported by `focusScmInput`, which must precede this call.
 */
async function typeIntoScmInput(
    message: string,
    selection: { start: number; end: number },
    valueToAdd: string
): Promise<void> {
    const text = padGitmoji(
        valueToAdd,
        message[selection.start - 1],
        message[selection.end]
    );
    await vscode.commands.executeCommand("type", { text });
}

/**
 * Load and return the persisted emoji usage counts.
 *
 * Notes:
 * - Uses VS Code's `globalState` for cross-session storage;
 * - Returns an empty object when no records exist yet.
 */
function loadUsageCounts(
    context: vscode.ExtensionContext
): Record<string, number> {
    const usage = context.globalState.get<Record<string, number>>(
        "gitmoji.usage",
        {}
    );
    return usage || {};
}

/**
 * Sort the emoji list by usage frequency in descending order (stable sort).
 *
 * Notes:
 * - Emojis that have never been used are treated as having a count of 0;
 * - When counts are equal, the original order is preserved (stable sort).
 */
function sortEmojisByUsage(
    emojis: Array<{ code?: string; emoji?: string }>,
    usage: Record<string, number>
): Array<{ code?: string; emoji?: string }> {
    return emojis
        .map((item, idx) => ({ item, idx }))
        .sort((a, b) => {
            const ak = getEmojiKey(a.item.code, a.item.emoji);
            const bk = getEmojiKey(b.item.code, b.item.emoji);
            const ac = usage[ak] || 0;
            const bc = usage[bk] || 0;
            if (ac !== bc) return bc - ac; // 降序
            return a.idx - b.idx; // 稳定
        })
        .map((x) => x.item);
}

/**
 * Update the usage count of the specified emoji and persist it.
 *
 * Notes:
 * - `code` is preferred as the key; if not available, `emoji` is used;
 * - The count is incremented by 1 and then written back to `globalState`.
 */
async function incrementUsageCount(
    context: vscode.ExtensionContext,
    code?: string,
    emoji?: string
): Promise<void> {
    const key = getEmojiKey(code, emoji);
    if (!key) return;
    const usage = loadUsageCounts(context);
    usage[key] = (usage[key] || 0) + 1;
    await context.globalState.update("gitmoji.usage", usage);
}

/**
 * Generates a unique key for usage tracking.
 *
 * Notes:
 * - Prefers `code`, falls back to `emoji`;
 * - Returns an empty string if neither is available.
 */
function getEmojiKey(code?: string, emoji?: string): string {
    if (code && code.length > 0) return code;
    if (emoji && emoji.length > 0) return emoji;
    return "";
}
