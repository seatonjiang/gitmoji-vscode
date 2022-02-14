English | [简体中文](README.zh-CN.md)

<p align="center">
    <img src="images/gitmoji.gif" width="400">
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
    <a href="https://github.com/seatonjiang/gitmoji-vscode/issues">Report Bug</a>
    ·
    <a href="https://github.com/seatonjiang/gitmoji-vscode/issues">Request Feature</a>
</p>

<p align="center">Gitmoji tool for git commit messages in VS Code</p>

## 💻 Screenshot

<p align="center">
    <img src="images/about.gif">
</p>

## 📦 Install

1. Open [Visual Studio Code](https://code.visualstudio.com/).
2. Press `Ctrl+Shift+X` to open the Extensions tab.
3. Type `Gitmoji` to find the extension.
4. Click the `Install` button, then the `Enable` button.

## 🔨 Configuration

### Select output type

- `outputType` - Configure the type of emoji output as needed. Default is `emoji`

For emoji type:

![emoji](images/emoji.png)

For code type:

![code](images/code.png)

Sample configuration:

```json
{
  "gitmoji.outputType": "emoji"
}
```

**Notice**: If you use Gitlab, type emoji, if you use Github, you can type code or emoji.

### Add configurable additionnal emojis

- `additionalEmojis` - Add configurable additionnal emojis.

Sample configuration:

```json
{
  "gitmoji.additionalEmojis": [
    {
      "emoji": "🐛",
      "code": ":bug:",
      "description": "Fix a bug.",
      "description_zh_cn": "修复 BUG"
    },
    {
      "emoji": "🚑",
      "code": ":ambulance:",
      "description": "Critical hotfix.",
      "description_zh_cn": "紧急热修复"
    }
  ]
}
```

**Notice**: `description_zh_cn` is a chinese (zh_CN) version of the description. If empty, the english description will be used.

### Only use your additionnal emojis

- `onlyUseAdditionalEmojis` - Use your additional emojis instead the ones from the extension.

Sample configuration:

```json
{
  "gitmoji.onlyUseAdditionalEmojis": true
}
```

### Search gitmoji by emoji code

- `showEmojiCode` - Enable searching gitmojis by emoji code (example: ambulance will return hotfix).

Sample configuration:

```json
{
  "gitmoji.showEmojiCode": true
}
```

## 🤝 Contributing

We welcome all contributions. You can submit any ideas as pull requests or as issues, have a good time! :)

## 📃 License

The project is released under the MIT License, see the [LICENCE](https://github.com/seatonjiang/gitmoji-vscode/blob/main/LICENSE) file for details.