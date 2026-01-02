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
    VS Code extension for adding emojis to submitted messages
</p>

## 💻 Screenshot

<p align="center">
    <img src="../assets/about.gif">
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

![emoji](../assets/emoji.png)

For code type:

![code](../assets/code.png)

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

### Insert Position

- `insertPosition` - Configure where to insert the Gitmoji in the commit message. Default is `start`.
- Optional values:
- `start`：Insert Gitmoji at the beginning of the message, and clean up existing prefix emojis;
- `end`：Insert Gitmoji at the end of the message, and clean up existing suffix emojis;
- `cursor`：Insert Gitmoji at the current cursor position in the commit message input box.

Sample configuration (cursor insert):

```json
{
  "gitmoji.insertPosition": "cursor"
}
```

Sample configuration (end insert):

```json
{
  "gitmoji.insertPosition": "end"
}
```

### Auto-match emoticons based on submitted messages

- `autoMatch` - Automatically matches emoji based on message submissions.

Sample configuration:

```json
{
  "gitmoji.autoMatch": true
}
```

### Allow repeated use of emoticons

- `canRepeat` - Allows repeated use of emoticons in the commit message.

Sample configuration:

```json
{
  "gitmoji.canRepeat": true
}
```

## 💖 Project Support

If this project has been helpful to you, please consider giving it a Star to show your support. Every bit of support fuels my motivation to keep optimizing and adding new features!

## 🤝 Join the Development

We welcome all contributions! Submit your ideas as [Pull Requests](https://github.com/seatonjiang/gitmoji-vscode/pulls) or [Issues](https://github.com/seatonjiang/gitmoji-vscode/issues).

## 📃 Open Source License

This project is released under the MIT License. For detailed terms, please refer to the [LICENSE](https://github.com/seatonjiang/gitmoji-vscode/blob/main/LICENSE) file.