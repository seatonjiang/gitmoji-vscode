import * as vscode from 'vscode';
import { GitExtension, Repository } from './api/git';
import { Gitmoji, Emoji } from './gitmoji/gitmoji';
const table = require('markdown-table')
import { stringify } from 'querystring';

export function activate(context: vscode.ExtensionContext) {

    let disposable = vscode.commands.registerCommand('extension.Gitmoji.pickEmoji', (uri?) => {
        const git = getGitExtension();
        const language = getEnvLanguage();

        if (!git) {
            vscode.window.showErrorMessage('Unable to load Git Extension');
            return;
        }

        let emojis = getEmojis()

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
                        if (outputType === "emoji") {
                            prefixCommit(selectedRepository, selected.emoji);
                        } else {
                            prefixCommit(selectedRepository, selected.code);
                        }
                    }
                } else {
                    for (let repo of git.repositories) {
                        if (outputType === "emoji") {
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

    let disposable2 = vscode.commands.registerCommand('extension.Gitmoji.insertMarkdownEmojiKey', () => {
        const editor = vscode.window.activeTextEditor;
        if (editor) {
            const document = editor.document
            const position = editor.selection.active
            editor.edit(editBuilder => {
                editBuilder.insert(position, generateMarkdownEmojiKey(getEmojis()))
            })
        }
    });

    context.subscriptions.push(disposable2);
}

function getEnvLanguage() {
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

function getEmojis(): Array<any> {
    let additionalEmojis: Array<any> = vscode.workspace.getConfiguration().get("gitmoji.additionalEmojis") || [];
    let emojis = [];
    let onlyUseAdditionalEmojis: boolean | undefined = vscode.workspace.getConfiguration().get("gitmoji.onlyUseAdditionalEmojis");

    if (onlyUseAdditionalEmojis === true) {
        emojis = [...additionalEmojis];
    } else {
        emojis = [...Gitmoji, ...additionalEmojis];
    }
    return emojis
}

function generateMarkdownEmojiKey(emojis: Array<Emoji>): string {
    let emojiKey: string[][] = [
        ['Emoji', 'Meaning']
    ]
    emojis.forEach(emoji => {
        emojiKey.push([emoji.emoji, emoji.description])
    });
    return table(emojiKey)
}

export function deactivate() { }
