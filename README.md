English | [简体中文](README.zh-CN.md) | [Português Brasileiro](README.pt-BR.md) | [Português Europeu](README.pt-PT.md) | [日本語](README.ja.md)

<p align="center">
    <img src="assets/gitmoji.gif" width="400">
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
    <a href="https://github.com/seatonjiang/gitmoji-vscode/issues">Report Bug</a>
    ·
    <a href="https://github.com/seatonjiang/gitmoji-vscode/issues">Request Feature</a>
</p>

<p align="center">
    Gitmoji tool for git commit messages in VSCode
</p>

## 💻 Screenshot

<p align="center">
    <img src="assets/about.gif">
</p>

## 📦 Install

1. Open [Visual Studio Code](https://code.visualstudio.com/).
2. Press `Ctrl+Shift+X` to open the Extensions tab.
3. Type `Gitmoji` to find the extension.
4. Click the `Install` button, then the `Enable` button.

## 🔨 Configuration

### Select output type

- `outputType` - Configure the type of emoji output as needed. Default is `emoji`.

For emoji type:

![emoji](assets/emoji.png)

For code type:

![code](assets/code.png)

Sample configuration:

```json
{
  "gitmoji.outputType": "emoji"
}
```

> **Notice**: If you use Gitlab, type emoji, if you use GitHub, you can type code or emoji.

### Add configurable additionnal emojis

- `addCustomEmoji` - Add custom emoji other than Gitmoji.

Sample configuration:

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

### Only use your Custom emojis

- `onlyUseCustomEmoji` - Only use your custom emoji, not the ones in the Gitmoji.

Sample configuration:

```json
{
  "gitmoji.onlyUseCustomEmoji": true
}
```

### Search Gitmoji by emoji code

- `showEmojiCode` - Enable searching gitmojis by emoji code (example: ambulance will return hotfix).

Sample configuration:

```json
{
  "gitmoji.showEmojiCode": true
}
```

### Insert emoji at the end of the commit

- `asSuffix` - Enable emoji insertion as a suffix of the commit message.

Sample configuration:

```json
{
  "gitmoji.asSuffix": true
}
```

## 🤝 Contributing

We welcome all contributions. You can submit any ideas as pull requests or as issues, have a good time! :)

## 📃 License

The project is released under the MIT License, see the [LICENCE](https://github.com/seatonjiang/gitmoji-vscode/blob/main/LICENSE) file for details.
