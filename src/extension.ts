import * as vscode from 'vscode';
import { GitExtension, Repository } from './git';
import Gitmoji from './gitmoji';

export function activate(context: vscode.ExtensionContext) {
    let disposable = vscode.commands.registerCommand('extension.showGitmoji', (uri?) => {
        const git = getGitExtension();

        if (!git) {
            vscode.window.showErrorMessage('Unable to load Git Extension');
            return;
        }

        let addCustomEmoji: Array<any> = vscode.workspace.getConfiguration().get('gitmoji.addCustomEmoji') || [];
        const showEmojiCode: boolean | undefined = vscode.workspace.getConfiguration().get('gitmoji.showEmojiCode');
        const onlyUseCustomEmoji: boolean | undefined = vscode.workspace.getConfiguration().get('gitmoji.onlyUseCustomEmoji');
        const autoMatch: boolean | undefined = vscode.workspace.getConfiguration().get('gitmoji.autoMatch');
        const outputType = vscode.workspace.getConfiguration().get('gitmoji.outputType');
        const asSuffix: boolean | undefined = vscode.workspace.getConfiguration().get('gitmoji.asSuffix') || false;

        let emojis = onlyUseCustomEmoji === true ? [...addCustomEmoji] : [...Gitmoji, ...addCustomEmoji];

        // fetch comment to auto match emoji
        let comment = '';
        if (autoMatch && git.repositories.length > 0) {
            comment = git.repositories[0].inputBox.value.toLowerCase();
            const matched = emojis.filter(e => {
                return e.description?.toLowerCase().includes(comment)
                    || e.code?.toLowerCase().includes(comment);
            });
            if (matched.length > 0) {
                emojis = matched;
            }
        }

        const items = emojis.map(emojiObj => {
            const { description, code, emoji } = emojiObj;
            const displayCode = showEmojiCode ? code : '';
            const label = `${emoji} ${description} ${displayCode}`;
            return {
                label,
                code,
                emoji,
            };
        });

        vscode.window.showQuickPick(items).then(function (selected) {
            if (selected) {
                vscode.commands.executeCommand('workbench.view.scm');
                const valueToAdd = outputType === 'emoji' ? selected.emoji : selected.code;

                if (uri) {
                    const uriPath = uri._rootUri?.path || uri.rootUri.path;
                    let selectedRepository = git.repositories.find(repository => repository.rootUri.path === uriPath);
                    if (selectedRepository) {
                        updateCommit(selectedRepository, valueToAdd, asSuffix);
                    }
                } else {
                    for (let repo of git.repositories) {
                        updateCommit(repo, valueToAdd, asSuffix);
                    }
                }
            }
        });
    });

    context.subscriptions.push(disposable);
}

function updateCommit(repository: Repository, valueOfGitmoji: string, asSuffix: boolean) {
    if (!asSuffix){
        repository.inputBox.value = `${valueOfGitmoji} ${repository.inputBox.value}`;
    } else {
        repository.inputBox.value = `${repository.inputBox.value} ${valueOfGitmoji}`;
    }
}

function getGitExtension() {
    const vscodeGit = vscode.extensions.getExtension<GitExtension>('vscode.git');
    const gitExtension = vscodeGit && vscodeGit.exports;
    return gitExtension && gitExtension.getAPI(1);
}

export function deactivate() {}
