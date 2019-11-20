import * as vscode from 'vscode';
import { GitExtension, Repository } from './api/git';
import Gitmoji from './gitmoji/gitmoji';

export function activate(context: vscode.ExtensionContext) {

	let disposable = vscode.commands.registerCommand('extension.Gitmoji', (uri?) => {
		const git = getGitExtension();
		const language = getEnvlanguage();

		if (!git) {
			vscode.window.showErrorMessage('Unable to load Git Extension');
			return;
		}
		
		let items = [];
		if(language === "zh-cn"){
			for (let i = 0; i < Gitmoji.length; i++) {
				items.push({
					label: `${Gitmoji[i].emoji}  ${Gitmoji[i].description_zh_cn}`,
					code: Gitmoji[i].code,
					emoji: Gitmoji[i].emoji
				});
			}
		}else{
			for (let i = 0; i < Gitmoji.length; i++) {
				items.push({
					label: `${Gitmoji[i].emoji} ${Gitmoji[i].description}`,
					code: Gitmoji[i].code,
					emoji: Gitmoji[i].emoji
				});
			}
		}

		/**
		 * @property {string} emoji
		 * @property {string} code
		*/
		vscode.window.showQuickPick(items).then(function (selected) {
			if (selected) {
				vscode.commands.executeCommand('workbench.view.scm');
				if (uri) {
					let selectedRepository = git.repositories.find(repository => {
						return repository.rootUri.path === uri._rootUri.path;
					});
					if (selectedRepository) {
						prefixCommit(selectedRepository, selected.emoji);
					}
				} else {
					for (let repo of git.repositories) {
						prefixCommit(repo, selected.emoji);
					}
				}
			}
		});
	});

	context.subscriptions.push(disposable);
}

function getEnvlanguage(){
	const language = vscode.env.language;
	return language;
}

function prefixCommit(repository: Repository, prefix: String) {
	repository.inputBox.value = `${prefix}${repository.inputBox.value}`;
}

function getGitExtension() {
	const vscodeGit = vscode.extensions.getExtension<GitExtension>('vscode.git');
	const gitExtension = vscodeGit && vscodeGit.exports;
	return gitExtension && gitExtension.getAPI(1);
}

export function deactivate() {}