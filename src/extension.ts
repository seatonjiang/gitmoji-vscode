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
                let outputType = vscode.workspace.getConfiguration().get('gitmoji.outputType');

                if (uri) {
                    let selectedRepository = git.repositories.find(repository => {
                        return repository.rootUri.path === uri._rootUri.path;
                    });
                    if (selectedRepository) {
                        if (outputType === 'emoji') {
                            prefixCommit(selectedRepository, selected.emoji);
                        } else {
                            prefixCommit(selectedRepository, selected.code);
                        }
                    }
                } else {
                    for (let repo of git.repositories) {
                        if (outputType === 'emoji') {
                            prefixCommit(repo, selected.emoji);
                        } else {
                            prefixCommit(repo, selected.code);
                        }
                    }
                }
            }
        });
    });

    context.subscriptions.push(disposable);
}

function prefixCommit(repository: Repository, prefix: String) {
    repository.inputBox.value = `${prefix} ${repository.inputBox.value}`;
}

function getGitExtension() {
    const vscodeGit = vscode.extensions.getExtension<GitExtension>('vscode.git');
    const gitExtension = vscodeGit && vscodeGit.exports;
    return gitExtension && gitExtension.getAPI(1);
}

export function deactivate() {}
