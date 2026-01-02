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

            // fetch comment to auto match emoji
            let comment = "";
            if (autoMatch && git.repositories.length > 0) {
                comment = git.repositories[0].inputBox.value.toLowerCase();
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
                    let targetIndex: number | undefined = undefined;

                    if (uri) {
                        const uriPath = uri._rootUri?.path || uri.rootUri.path;
                        let selectedRepository = git.repositories.find(
                            (repository) => repository.rootUri.path === uriPath
                        );
                        if (selectedRepository) {
                            targetIndex = git.repositories.findIndex(
                                (r) =>
                                    r.rootUri.path ===
                                    selectedRepository.rootUri.path
                            );
                            if (preferCursor) {
                                const insertedInEditor =
                                    await tryInsertIntoCommitEditor(valueToAdd);
                                if (insertedInEditor) {
                                    return;
                                }
                                await focusScmInputForRepoIndex(targetIndex);
                                const typed = await tryTypeIntoScmInput(
                                    valueToAdd
                                );
                                if (typed) {
                                    return;
                                }
                                updateCommit(
                                    selectedRepository,
                                    valueToAdd,
                                    false,
                                    tokensToStrip,
                                    canRepeat
                                );
                            } else {
                                const useSuffix = insertPosition === "end";
                                updateCommit(
                                    selectedRepository,
                                    valueToAdd,
                                    useSuffix,
                                    tokensToStrip,
                                    canRepeat
                                );
                            }
                        }
                    } else {
                        if (preferCursor) {
                            const insertedInEditor =
                                await tryInsertIntoCommitEditor(valueToAdd);
                            if (insertedInEditor) {
                                return;
                            }
                            if (git.repositories.length > 0) {
                                targetIndex = 0;
                                await focusScmInputForRepoIndex(targetIndex);
                                const typed = await tryTypeIntoScmInput(
                                    valueToAdd
                                );
                                if (typed) {
                                    return;
                                }
                            }
                            for (let repo of git.repositories) {
                                updateCommit(
                                    repo,
                                    valueToAdd,
                                    false,
                                    tokensToStrip,
                                    canRepeat
                                );
                            }
                        } else {
                            const useSuffix = insertPosition === "end";
                            for (let repo of git.repositories) {
                                updateCommit(
                                    repo,
                                    valueToAdd,
                                    useSuffix,
                                    tokensToStrip,
                                    canRepeat
                                );
                            }
                            if (git.repositories.length === 1) {
                                targetIndex = 0;
                            }
                        }
                    }
                    await focusScmInputForRepoIndex(targetIndex);
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
        repository.inputBox.value = `${valueOfGitmoji} ${current}`.trim();
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
 * Focus the commit message input box of the specified repository.
 *
 * Compatibility strategy:
 * - Always focus the SCM view first;
 * - If a repository index is provided, attempt to move focus among repositories
 *   using `workbench.scm.action.focusPreviousInput` and
 *   `workbench.scm.action.focusNextInput`;
 * - If the commands are unavailable (older VSCode), silently ignore and
 *   ensure the SCM view remains focused.
 */
async function focusScmInputForRepoIndex(index?: number): Promise<void> {
    try {
        await vscode.commands.executeCommand("workbench.scm.focus");
    } catch {}

    if (index === undefined) {
        return;
    }

    try {
        // In a multi-repo scenario, the first execution focuses on the first commit input box,
        // and executing index more times moves the focus to the target repository's commit input box.
        for (let i = 0; i <= index; i++) {
            await vscode.commands.executeCommand(
                "workbench.scm.action.focusNextInput"
            );
        }
    } catch {}
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
    const needsPrefixSpace = beforeChar !== undefined && !/\s/.test(beforeChar);
    const needsSuffixSpace = afterChar !== undefined && !/\s/.test(afterChar);
    const insertText =
        (needsPrefixSpace ? " " : "") +
        valueToAdd +
        (needsSuffixSpace ? " " : "");
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
 * Inserts Gitmoji at the current cursor position in the SCM commit message input box.
 *
 * Behavior and limitations:
 * - Relies on VS Code’s `type` command to input text at the currently focused control;
 * - Cannot read characters before or after the cursor, so it always adds a space on both sides to prevent sticking;
 * - The caller must ensure focus has been moved to the commit input box of the target repository.
 */
async function tryTypeIntoScmInput(valueToAdd: string): Promise<boolean> {
    try {
        const text = ` ${valueToAdd} `;
        await vscode.commands.executeCommand("type", { text });
        return true;
    } catch {
        return false;
    }
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
