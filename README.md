# gitmoji-vscode

![About](https://raw.githubusercontent.com/Vtrois/gitmoji-vscode/master/images/about.gif)

## About

This project provides an easy solution for using [Gitmoji](https://github.com/carloscuesta/gitmoji) from VSCode Extension. gitmoji-vscode solves the hassle of searching through the gitmoji list. Includes a bunch of options you can play with! 🎉

## Install

1. Open [Visual Studio Code](https://code.visualstudio.com/)
2. Press `Ctrl+Shift+X` to open the Extensions tab
3. Type `gitmoji-vscode` to find the extension
4. Click the `Install` button, then the `Enable` button

## Configuration

### Select output type

* `outputType` - Configure the type of emoji output as needed. Default is `emoji`

For emoji type:

![emoji](https://raw.githubusercontent.com/Vtrois/gitmoji-vscode/master/images/emoji.png)

For code type:

![code](https://raw.githubusercontent.com/Vtrois/gitmoji-vscode/master/images/code.png)

Sample configuration:

```json
{
    "gitmoji.outputType": "emoji"
}
```

**Notice**: If you use Gitlab or Coding, type emoji, if you use Github, you can type code or emoji.

### Add configurable additionnal emojis

* `additionalEmojis` - Add configurable additionnal emojis.

Sample configuration:

```json
{
    "gitmoji.additionalEmojis":[
        {
            "emoji": "🐳",
            "code": ":whale:",
            "description": "Work about Docker",
            "description_zh_cn": "处理 Docker 相关的工作"
        },
        {
            "emoji": "🚚",
            "code": ":truck:",
            "description": "Moving or renaming files",
            "description_zh_cn": "移动或重命名文件"
        }
    ]
}
```

**Notice**: `description_zh_cn` is a chinese (zh_CN) version of the description. If empty, the english description will be used.

### Only use your additionnal emojis

* `onlyUseAdditionalEmojis` - Use your additional emojis instead the ones from the extension.

Sample configuration:

```json
{
    "gitmoji.additionalEmojis":[
        {
            "emoji": "🐳",
            "code": ":whale:",
            "description": "Work about Docker",
            "description_zh_cn": "处理 Docker 相关的工作"
        },
        {
            "emoji": "🚚",
            "code": ":truck:",
            "description": "Moving or renaming files",
            "description_zh_cn": "移动或重命名文件"
        }
    ],
    "gitmoji.onlyUseAdditionalEmojis": true
}
```

## Acknowledgement

Thanks to the contributors who inspired this project.

**Project:**

* [Gitmoji](https://github.com/carloscuesta/gitmoji)

* [Git Emoji Commit](https://github.com/maixiaojie/git-emoji)

**Contributors:**

* @Fen, @will-stone, @ewen-lbh, @Hector-98

## License

The code is available under the [MIT](https://github.com/Vtrois/gitmoji-vscode/blob/master/LICENSE) license.
