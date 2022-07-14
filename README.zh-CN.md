[English](README.md) | [Português Brasileiro](README.pt-BR.md) | [Português Europeu](README.pt-PT.md) | 简体中文

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
    <a href="https://github.com/seatonjiang/gitmoji-vscode/issues">报告问题</a>
    ·
    <a href="https://github.com/seatonjiang/gitmoji-vscode/issues">功能需求</a>
</p>

<p align="center">VS Code 中用于提交说明的 Gitmoji 拓展</p>

## 💻 扩展截图

<p align="center">
    <img src="images/about.gif">
</p>

## 📦 安装扩展

1. 首先打开 [Visual Studio Code](https://code.visualstudio.com/)；
2. 使用 `Ctrl+Shift+X` 组合键打开「扩展」标签；
3. 输入 `Gitmoji` 寻找此扩展；
4. 点击 `安装` 按钮，然后点击 `启用` 按钮即可。

**提示**：也可以直接在 Marketplace 中找到 [Gitmoji](https://marketplace.visualstudio.com/items?itemName=seatonjiang.gitmoji-vscode)，然后点击 `Install` 即可。

## 🔨 配置扩展

### 表情符号输出类型

- `outputType` - 根据需要配置表情符号的输出类型，默认为 `emoji`。

emoji 模式的例子：

![emoji](images/emoji.png)

code 模式的例子：

![code](images/code.png)

示例配置：

```json
{
  "gitmoji.outputType": "emoji"
}
```

**提示**：如果在 Gitlab 或者 Coding 中使用，需要选择「code」模式；如果在 Github 中使用，可以随意选择「emoji」或「code」模式。

### 添加自定义表情符号

- `additionalEmojis` - 根据需要添加自定义表情符号。

示例配置：

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

**提示**：`description_zh_cn` 是中文模式加载的内容，改选项是可选的，如果留空，将默认显示 `description` 中的内容。

### 仅使用自定义表情符号

- `onlyUseAdditionalEmojis` - 仅使用自定义添加的表情符号，而不使用扩展中自带的表情符号，该功能默认不开启。

示例配置：

```json
{
  "gitmoji.onlyUseAdditionalEmojis": true
}
```

### 通过简码搜索表情符号

- `showEmojiCode` - 开启通过 emoji 简码搜索表情符号，例如搜索 ambulance 会找到 🚑 ，该功能默认不开启。

示例配置：

```json
{
  "gitmoji.showEmojiCode": true
}
```

## 🤝 参与共建

我们欢迎所有的贡献，你可以将任何想法作为 pull requests 或 issues 提交，顺颂商祺 :)

## 📃 开源许可

项目基于 MIT 许可证发布，详细说明请参阅 [LICENCE](https://github.com/seatonjiang/gitmoji-vscode/blob/main/LICENSE) 文件。