<p align="center">
    <img src=".github/assets/gitmoji.gif" width="400">
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

<p align="center">在提交信息中添加表情符号的 VS Code 扩展</p>

<p align="center">
  <strong>简体中文</strong> · <a href=".github/readme/README.en.md">English</a> · <a href=".github/readme/README.pt-br.md">Português Brasileiro</a> ·
  <a href=".github/readme/README.pt-pt.md">Português Europeu</a> · <a href=".github/readme/README.ja.md">日本語</a> · <a href=".github/readme/README.ko.md">한국어</a>
</p>

## 💻 扩展截图

<p align="center">
    <img src=".github/assets/about.gif">
</p>

## 📦 安装扩展

1. 首先打开 [Visual Studio Code](https://code.visualstudio.com/)；
2. 使用 `Ctrl+Shift+X` 组合键打开「扩展」标签；
3. 输入 `Gitmoji` 寻找此扩展；
4. 点击 `安装` 按钮，然后点击 `启用` 按钮即可。

**提示**：也可以直接在 Marketplace 中找到 [Gitmoji](https://marketplace.visualstudio.com/items?itemName=seatonjiang.gitmoji-vscode)，然后点击 `Install` 即可。

## 🔨 配置扩展

### 表情符号输出类型

- `outputType` - 配置表情符号的输出类型（默认为 `emoji` 模式）。

emoji 模式的例子：

![emoji](.github/assets/emoji.png)

code 模式的例子：

![code](.github/assets/code.png)

示例配置：

```json
{
  "gitmoji.outputType": "emoji"
}
```

> **提示**：如果在 Gitlab 中使用，需要选择「code」模式；如果在 GitHub 中使用，可以随意选择「emoji」或「code」模式。

### 添加自定义表情符号

- `addCustomEmoji` - 添加自定义表情符号。

示例配置：

```json
{
  "gitmoji.addCustomEmoji": [
    {
      "emoji": "🧵",
      "code": ":thread:",
      "description": "添加或更新与多线程或并发相关的代码"
    },
    {
      "emoji": "🦺",
      "code": ":safety_vest:",
      "description": "添加或更新与验证相关的代码"
    }
  ]
}
```

### 仅使用自定义表情符号

- `onlyUseCustomEmoji` - 仅使用自定义添加的表情符号，而不使用扩展中自带的表情符号（该功能默认关闭）。

示例配置：

```json
{
  "gitmoji.onlyUseCustomEmoji": true
}
```

### 通过简码搜索表情符号

- `showEmojiCode` - 开启通过简码搜索表情符号功能（该功能默认关闭）。

示例配置：

```json
{
  "gitmoji.showEmojiCode": true
}
```

### 插入位置

- `insertPosition` - 配置表情符号的插入位置（默认为 `start`）。
- 可选值：
- `start`：在消息开头插入，并清理既有前缀表情；
- `end`：在消息末尾插入，并清理既有后缀表情；
- `cursor`：在提交消息输入框的当前光标处插入。

示例配置（光标插入）：

```json
{
  "gitmoji.insertPosition": "cursor"
}
```

示例配置（消息末尾插入）：

```json
{
  "gitmoji.insertPosition": "end"
}
```

### 根据提交消息自动匹配表情符号

- `autoMatch` - 根据提交消息自动匹配表情符号功能（该功能默认关闭）。

示例配置：

```json
{
  "gitmoji.autoMatch": true
}
```

## 💖 项目支持

如果这个项目为你带来了便利，请考虑为这个项目点个 Star 或者通过微信赞赏码支持我，每一份支持都是我持续优化和添加新功能的动力源泉！

<div align="center">
    <b>微信赞赏码</b>
    <br>
    <img src=".github/assets/wechat-reward.png" width="230">
</div>

## 🤝 参与共建

我们欢迎所有的贡献，你可以将任何想法作为 [Pull Requests](https://github.com/seatonjiang/gitmoji-vscode/pulls) 或 [Issues](https://github.com/seatonjiang/gitmoji-vscode/issues) 提交。

## 📃 开源许可

项目基于 MIT 许可证发布，详细说明请参阅 [LICENSE](https://github.com/seatonjiang/gitmoji-vscode/blob/main/LICENSE) 文件。