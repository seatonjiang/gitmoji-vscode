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

        let emojis = [];
        let onlyUseCustomEmoji: boolean | undefined = vscode.workspace.getConfiguration().get('gitmoji.onlyUseCustomEmoji');

        if (onlyUseCustomEmoji === true) {
            emojis = [...addCustomEmoji];
        } else {
            emojis = [...Gitmoji, ...addCustomEmoji];
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
                const outputType = vscode.workspace.getConfiguration().get('gitmoji.outputType');
                const valueToAdd = outputType === 'emoji' ? selected.emoji : selected.code;

                if (uri) {
                    const uriPath = uri._rootUri?.path || uri.rootUri.path;
                    let selectedRepository = git.repositories.find(repository => repository.rootUri.path === uriPath);
                    if (selectedRepository) {
                        updateCommit(selectedRepository, valueToAdd);
                    }
                } else {
                    for (let repo of git.repositories) {
                        updateCommit(repo, valueToAdd);
                    }
                }
            }
        });
    });

    context.subscriptions.push(disposable);
}

function updateCommit(repository: Repository, valueOfGitmoji: String) {
    repository.inputBox.value = `${valueOfGitmoji} ${repository.inputBox.value}`;
}

function getGitExtension() {
    const vscodeGit = vscode.extensions.getExtension<GitExtension>('vscode.git');
    const gitExtension = vscodeGit && vscodeGit.exports;
    return gitExtension && gitExtension.getAPI(1);
}

export function deactivate() {}
