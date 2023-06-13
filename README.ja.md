[English](README.md) | [简体中文](README.zh-CN.md) | [Português Brasileiro](README.pt-BR.md) | [Português Europeu](README.pt-PT.md) | 日本語

<p align="center">
    <img src="assets/gitmoji.gif" width="400">
</p>

<p align="center">
    <img src="https://img.shields.io/badge/gitmoji-%20😜%20😍-FFDD67.svg?style=flat-square">
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
    <a href="https://github.com/seatonjiang/gitmoji-vscode/issues">不具合報告</a>
    ·
    <a href="https://github.com/seatonjiang/gitmoji-vscode/issues">機能リクエスト</a>
</p>

<p align="center">VSCode 内の Git コミットメッセージ用 Gitmoji ツール</p>

## 💻 スクリーンショット

<p align="center">
    <img src="assets/about.gif">
</p>

## 📦 インストール

1. [Visual Studio Code](https://code.visualstudio.com/) を開く。
2. `Ctrl+Shift+X` で拡張機能タブを開く。
3. `Gitmoji` と入力して、この拡張機能を見つける。
4. `インストール` ボタンをクリック後、 `有効にする` ボタンをクリックする。

## 🔨 設定

### 絵文字の出力タイプ選択

- `outputType` - 絵文字の出力タイプを設定できます。（デフォルトは `emoji` タイプ）。

emoji タイプの出力例：

![emoji](assets/emoji.png)

code タイプの出力例：

![code](assets/code.png)

例：

```json
{
  "gitmoji.outputType": "emoji"
}
```

> **注意**： Gitlab や Coding で使用する場合は、「code」タイプを選択しなければなりません。 GitHub で使用する場合は、任意のタイプを選択できます。

### カスタム絵文字を設定する

- `addCustomEmoji` - 自分でカスタマイズした絵文字を追加できます。

例：

```json
{
  "gitmoji.addCustomEmoji": [
    {
      "emoji": "🧵",
      "code": ":thread:",
      "description": "マルチスレッドや並行処理に関連するコードの追加/更新"
    },
    {
      "emoji": "🦺",
      "code": ":safety_vest:",
      "description": "バリデーションの追加/更新"
    }
  ]
}
```

### カスタム絵文字のみを使用する

- `onlyUseCustomEmoji` - 拡張機能にもとから含まれるデフォルトの絵文字ではなく、自身でカスタマイズした絵文字のみを使用する（デフォルトでは無効）。

例：

```json
{
  "gitmoji.onlyUseCustomEmoji": true
}
```

### ショートコードで絵文字検索

- `showEmojiCode` - ショートコードによる絵文字の検索を有効にする（デフォルトでは無効）。

例：

```json
{
  "gitmoji.showEmojiCode": true
}
```

## 🤝 コントリビュートについて

私たちはすべての貢献を歓迎します。どんなアイデアでもプルリクエストとして、あるいはイシューとして提出することができます! :)

## 📃 ライセンス

このプロジェクトは MIT ライセンスで公開されています。詳しくは [LICENSE](https://github.com/seatonjiang/gitmoji-vscode/blob/main/LICENSE) をご覧ください。
