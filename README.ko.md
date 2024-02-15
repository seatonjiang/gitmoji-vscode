[English](README.md) | [简体中文](README.zh-CN.md) | [Português Brasileiro](README.pt-BR.md) | [Português Europeu](README.pt-PT.md) | [日本語](README.ja.md) | **한국어**

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
    <a href="https://github.com/seatonjiang/gitmoji-vscode/issues">버그 제보하기</a>
    ·
    <a href="https://github.com/seatonjiang/gitmoji-vscode/issues">기능 요청하기</a>
</p>

<p align="center">
    VSCode 에서 깃 커밋 메세지를 위한 깃모지 도구 
</p>

## 💻 Screenshot

<p align="center">
    <img src="assets/about.gif">
</p>

## 📦 Install

1. [Visual Studio Code](https://code.visualstudio.com/)를 엽니다.
2. `Ctrl+Shift+X`를 입력해서 확장 프로그램 탭을 엽니다.
3. `Gitmoji`를 입력해서 확장 프로그램을 찾습니다.
4. `Install` 을 눌러 다운을 받고, `Enable` 버튼으로 사용합니다.

## 🔨 Configuration

### 출력 타입

- `outputType` - (필요시) 이모지의 출력타입을 설정합니다. 기본값은  `emoji` 입니다.

이모지 타입 예시:

![emoji](assets/emoji.png)

코드 타입 예시:

![code](assets/code.png)

간단한 구성 예시:

```json
{
  "gitmoji.outputType": "emoji"
}
```

> **중요**: Gitlab 사용중이라면 `emoji` 타입만 가능합니다. Github 에선 `code` ,`emoji` 모두 사용가능합니다. 

### 이모지 추가하기

- `addCustomEmoji` - 깃모지 이외의 사용자 정의 이모지를 추가합니다.

간단한 구성 예시:

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

### 사용자 정의 이모지만 사용하려면

- `onlyUseCustomEmoji` - Gitmoji를 사용하지않고 사용자 정의 이모지만 사용합니다.

간단한 구성 예시:

```json
{
  "gitmoji.onlyUseCustomEmoji": true
}
```

### 이모지 코드로 깃모지 찾기

- `showEmojiCode` - 이모지 코드로 깃모지를 검색합니다. (예시: ambulance 키워드로 검색시 hotfix 를 검색합니다.).

간단한 구성 예시:

```json
{
  "gitmoji.showEmojiCode": true
}
```

### 커밋 마지막에 이모지 추가하기

- `asSuffix` - 커밋 메세지 마지막에 이모지를 추가합니다.

간단한 구성 예시:

```json
{
  "gitmoji.asSuffix": true
}
```

## 🤝 Contributing

모든 기여에 대해 환영합니다. 프로젝트의 아이디어 를 issue 나 PR로 남겨주세요, 감사합니다.!

## 📃 License

이 프로젝트는 MIT License를 따릅니다., 라이센스 정보는 [LICENCE](https://github.com/seatonjiang/gitmoji-vscode/blob/main/LICENSE) 에서 자세하게 확인할 수 있습니다.
