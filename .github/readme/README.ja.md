<p align="center">
    <img src="../assets/gitmoji.gif" width="400">
</p>

<p align="center">
    <a href="https://github.com/carloscuesta/gitmoji">
        <img src="https://img.shields.io/badge/gitmoji-%20😜%20😍-FFDD67.svg?style=flat-square">
    </a>
    <a href="https://github.com/seatonjiang/gitmoji-vscode/issues">
        <img src="https://img.shields.io/github/issues/seatonjiang/gitmoji-vscode?style=flat-square&color=blue">
    </a>
    <a href="https://github.com/seatonjiang/gitmoji-vscode/pulls">
        <img src="https://img.shields.io/github/issues-pr/seatonjiang/gitmoji-vscode?style=flat-square&color=brightgreen">
    </a>
    <a href="https://github.com/seatonjiang/gitmoji-vscode/blob/main/LICENSE">
        <img src="https://img.shields.io/github/license/seatonjiang/gitmoji-vscode?&style=flat-square">
    </a>
</p>

<p align="center">
    コミットメッセージに絵文字を追加するための VS Code 拡張機能
</p>

## 💻 スクリーンショット

<p align="center">
    <img src="../assets/about.gif">
</p>

## 📦 インストール

1. [Visual Studio Code](https://code.visualstudio.com/) を開きます。
2. `Ctrl+Shift+X` を押して「拡張機能」タブを開きます。
3. `Gitmoji` と入力して拡張機能を検索します。
4. `Install` をクリックし、その後 `Enable` をクリックします。

## 🔨 設定

### 出力形式の選択

- `outputType` - 必要に応じて絵文字の出力形式を設定します。デフォルトは `emoji` です。

emoji 形式の例：

![emoji](../assets/emoji.png)

code 形式の例：

![code](../assets/code.png)

設定例：

```json
{
  "gitmoji.outputType": "emoji"
}
```

> **注意**：GitLab で使用する場合は `code` 形式を推奨します。GitHub では `emoji` と `code` のどちらでも利用できます。

### カスタム絵文字を追加

- `addCustomEmoji` - Gitmoji 以外のカスタム絵文字を拡張に追加します。

設定例：

```json
{
  "gitmoji.addCustomEmoji": [
    {
      "emoji": "🧵",
      "code": ":thread:",
      "description": "Add or update code related to multithreading or concurrency"
    },
    {
      "emoji": "🦺",
      "code": ":safety_vest:",
      "description": "Add or update code related to validation"
    }
  ]
}
```

### カスタム絵文字のみを使用

- `onlyUseCustomEmoji` - 拡張に同梱の Gitmoji は使用せず、自分で追加したカスタム絵文字のみを使用します。

設定例：

```json
{
  "gitmoji.onlyUseCustomEmoji": true
}
```

### 絵文字コードで Gitmoji を検索

- `showEmojiCode` - 絵文字コードで Gitmoji を検索できるようにします（例：`ambulance` で `hotfix` がヒット）。

設定例：

```json
{
  "gitmoji.showEmojiCode": true
}
```

### 挿入位置

- `insertPosition` - コミットメッセージ内の挿入位置を設定します。デフォルトは `start` です。
- 選択可能な値：
- `start`：メッセージの先頭に挿入し、既存の先頭の絵文字を整理します；
- `end`：メッセージの末尾に挿入し、既存の末尾の絵文字を整理します；
- `cursor`：コミットメッセージエディタまたは SCM 入力欄の「現在のカーソル位置」に挿入します（可能な場合はエディタを優先）。

設定例（カーソル位置へ挿入）：

```json
{
  "gitmoji.insertPosition": "cursor"
}
```

設定例（末尾へ挿入）：

```json
{
  "gitmoji.insertPosition": "end"
}
```

### コミットメッセージに基づく絵文字の自動マッチ

- `autoMatch` - コミットメッセージの内容に基づいて絵文字を自動的にマッチさせます。

設定例：

```json
{
  "gitmoji.autoMatch": true
}
```

## 💖 プロジェクトの支援

このプロジェクトが役に立った場合は、ぜひスターで応援してください。皆さまの支援が、継続的な改善や新機能追加の原動力になります！

## 🤝 開発への参加

すべての貢献を歓迎します！アイデアは [Pull Request](https://github.com/seatonjiang/gitmoji-vscode/pulls) または [Issue](https://github.com/seatonjiang/gitmoji-vscode/issues) でお寄せください。

## 📃 オープンソースライセンス

本プロジェクトは MIT ライセンスのもとで公開されています。詳細については [LICENSE](https://github.com/seatonjiang/gitmoji-vscode/blob/main/LICENSE) を参照してください。