# gitmoji-vscode

![About](https://raw.githubusercontent.com/vtrois/gitmoji-vscode/master/images/about.gif)

## About

This project provides an easy solution for using [Gitmoji](https://github.com/carloscuesta/gitmoji) from VSCode Extension. gitmoji-vscode solves the hassle of searching through the gitmoji list. Includes a bunch of options you can play with! 🎉

## Install

1. Open [Visual Studio Code](https://code.visualstudio.com/)
2. Press `Ctrl+Shift+X` to open the Extensions tab
3. Type `Gitmoji` to find the extension
4. Click the `Install` button, then the `Enable` button

## Configuration

### Select output type

- `outputType` - Configure the type of emoji output as needed. Default is `emoji`

For emoji type:

![emoji](https://raw.githubusercontent.com/vtrois/gitmoji-vscode/master/images/emoji.png)

For code type:

![code](https://raw.githubusercontent.com/vtrois/gitmoji-vscode/master/images/code.png)

Sample configuration:

```json
{
  "gitmoji.outputType": "emoji"
}
```

**Notice**: If you use Gitlab or Coding, type emoji, if you use Github, you can type code or emoji.

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

## License

The code is available under the [MIT](https://github.com/vtrois/gitmoji-vscode/blob/master/LICENSE) license.
