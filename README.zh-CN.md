![About](https://cdn.jsdelivr.net/gh/vtrois/gitmoji-vscode@1/images/about.gif)

[English](README.md) | 简体中文

## 关于扩展

此扩展是为了在 VSCode 中更方便的使用 [Gitmoji](https://github.com/carloscuesta/gitmoji)，解决了搜索 Gitmoji 列表的烦恼，并且扩展包含了很多自定义配置! 🎉

## 安装扩展

1. 首先打开 [Visual Studio Code](https://code.visualstudio.com/)；
2. 使用 `Ctrl+Shift+X` 组合键打开「扩展」标签；
3. 输入 `Gitmoji` 寻找此扩展；
4. 点击 `安装` 按钮，然后点击 `启用` 按钮即可。

**提示**: 也可以直接在 Marketplace 中找到 [Gitmoji](https://marketplace.visualstudio.com/items?itemName=Vtrois.gitmoji-vscode)，然后点击 `Install` 即可。

## 配置扩展

### 表情符号输出类型

- `outputType` - 根据需要配置表情符号的输出类型，默认为 `emoji`。

emoji 模式的例子:

![emoji](https://cdn.jsdelivr.net/gh/vtrois/gitmoji-vscode@1/images/emoji.png)

code 模式的例子:

![code](https://cdn.jsdelivr.net/gh/vtrois/gitmoji-vscode@1/images/code.png)

示例配置:

```json
{
  "gitmoji.outputType": "emoji"
}
```

**提示**: 如果在 Gitlab 或者 Coding 中使用，需要选择「code」模式；如果在 Github 中使用，可以随意选择「emoji」或「code」模式。

### 添加自定义表情符号

- `additionalEmojis` - 根据需要添加自定义表情符号。

示例配置:

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

**提示**: `description_zh_cn` 是中文模式加载的内容，改选项是可选的，如果留空，将默认显示 `description` 中的内容。

### 仅使用自定义表情符号

- `onlyUseAdditionalEmojis` - 仅使用自定义添加的表情符号，而不使用扩展中自带的表情符号，该功能默认不开启。

示例配置:

```json
{
  "gitmoji.onlyUseAdditionalEmojis": true
}
```

### 通过简码搜索表情符号

- `showEmojiCode` - 开启通过 emoji 简码搜索表情符号，例如搜索 ambulance 会找到 🚑 ，该功能默认不开启。

示例配置:

```json
{
  "gitmoji.showEmojiCode": true
}
```

## 版权说明

该仓库代码文件使用 [MIT](https://github.com/vtrois/gitmoji-vscode/blob/main/LICENSE) 协议进行授权，文档文件使用 [署名-非商业性使用-禁止演绎 4.0 国际](http://creativecommons.org/licenses/by-nc-nd/4.0/) 协议进行授权。