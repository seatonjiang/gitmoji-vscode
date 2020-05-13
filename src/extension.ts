import * as vscode from 'vscode';
import { GitExtension, Repository } from './api/git';
import Gitmoji from './gitmoji/gitmoji';

export function activate(context: vscode.ExtensionContext) {

    let disposable = vscode.commands.registerCommand('extension.Gitmoji', (uri?) => {
        const git = getGitExtension();
        const language = getEnvLanguage();

        if (!git) {
            vscode.window.showErrorMessage('Unable to load Git Extension');
            return;
        }

        let additionalEmojis: Array<any> = vscode.workspace.getConfiguration().get("gitmoji.additionalEmojis") || [];
        let emojis = [];
        let onlyUseAdditionalEmojis: boolean | undefined = vscode.workspace.getConfiguration().get("gitmoji.onlyUseAdditionalEmojis");

        if(onlyUseAdditionalEmojis === true ){
            emojis = [...additionalEmojis];
        } else {
            emojis = [...Gitmoji, ...additionalEmojis];
        }

        let items = [];

        if (language === "zh-cn") {
            for (let i = 0; i < emojis.length; i++) {
                items.push({
                label: `${emojis[i].emoji} ${emojis[i].description_zh_cn || emojis[i].description}`,
                code: emojis[i].code,
                emoji: emojis[i].emoji
                });
            }
        } else {
            for (let i = 0; i < emojis.length; i++) {
                items.push({
                label: `${emojis[i].emoji} ${emojis[i].description}`,
                code: emojis[i].code,
                emoji: emojis[i].emoji
                });
            }
        }

        vscode.window.showQuickPick(items).then(function (selected) {
            if (selected) {
                vscode.commands.executeCommand('workbench.view.scm');
                let outputType = vscode.workspace.getConfiguration().get('gitmoji.outputType');

                if (uri) {
                    let selectedRepository = git.repositories.find(repository => {
                        return repository.rootUri.path === uri._rootUri.path;
                    });
                    if (selectedRepository) {
                        if (outputType === "emoji"){
                            prefixCommit(selectedRepository, selected.emoji);
                        } else {
                            prefixCommit(selectedRepository, selected.code);
                        }
                    }
                } else {
                    for (let repo of git.repositories) {
                        if (outputType === "emoji"){
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

function getEnvLanguage(){
    const language = vscode.env.language;
    return language;
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
