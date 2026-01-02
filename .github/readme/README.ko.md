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
    커밋 메시지에 이모지를 추가하는 VS Code 확장 기능
</p>

## 💻 스크린샷

<p align="center">
    <img src="../assets/about.gif">
</p>

## 📦 설치

1. [Visual Studio Code](https://code.visualstudio.com/)를 엽니다.
2. `Ctrl+Shift+X`를 눌러 "확장" 탭을 엽니다.
3. `Gitmoji`를 입력하여 확장 기능을 찾습니다.
4. `Install` 버튼을 클릭한 뒤 `Enable` 버튼을 클릭합니다.

## 🔨 설정

### 출력 형식 선택

- `outputType` - 필요에 따라 이모지 출력 형식을 설정합니다. 기본값은 `emoji` 입니다.

emoji 형식 예시:

![emoji](../assets/emoji.png)

code 형식 예시:

![code](../assets/code.png)

설정 예시:

```json
{
  "gitmoji.outputType": "emoji"
}
```

> **주의**: GitLab에서 사용하는 경우 `code` 형식을 권장합니다. GitHub에서는 `emoji` 또는 `code` 모두 사용할 수 있습니다.

### 사용자 정의 이모지 추가

- `addCustomEmoji` - Gitmoji 외의 사용자 정의 이모지를 추가합니다.

설정 예시:

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

### 사용자 정의 이모지만 사용

- `onlyUseCustomEmoji` - 확장에 포함된 기본 Gitmoji는 사용하지 않고, 사용자가 추가한 이모지만 사용합니다.

설정 예시:

```json
{
  "gitmoji.onlyUseCustomEmoji": true
}
```

### 이모지 코드로 Gitmoji 검색

- `showEmojiCode` - 이모지 코드로 Gitmoji를 검색할 수 있도록 활성화합니다 (예: `ambulance`를 검색하면 `hotfix`가 반환됨).

설정 예시:

```json
{
  "gitmoji.showEmojiCode": true
}
```

### 삽입 위치

- `insertPosition` - 커밋 메시지 내의 삽입 위치를 설정합니다. 기본값은 `start` 입니다.
- 선택 가능한 값:
- `start`: 메시지 시작 부분에 삽입하고, 기존의 시작 이모지를 정리합니다;
- `end`: 메시지 끝부분에 삽입하고, 기존의 끝 이모지를 정리합니다;
- `cursor`: 커밋 메시지 편집기 또는 SCM 입력 창의 현재 커서 위치에 삽입합니다 (가능한 경우 편집기를 우선).

설정 예시 (커서 위치에 삽입):

```json
{
  "gitmoji.insertPosition": "cursor"
}
```

설정 예시 (메시지 끝에 삽입):

```json
{
  "gitmoji.insertPosition": "end"
}
```

### 커밋 메시지 기반 자동 이모지 매칭

- `autoMatch` - 커밋 메시지 내용에 따라 이모지를 자동으로 매칭합니다.

설정 예시:

```json
{
  "gitmoji.autoMatch": true
}
```

### 커밋 메시지에서 이모지 반복 사용 허용

- `canRepeat` - 커밋 메시지 내에서 동일한 이모지를 여러 번 반복 사용할 수 있도록 허용합니다.

설정 예시:

```json
{
  "gitmoji.canRepeat": true
}
```

## 💖 프로젝트 지원

이 프로젝트가 여러분에게 도움이 되었다면, Star로 응원해 주세요. 여러분의 모든 지원은 지속적인 개선과 새로운 기능 추가의 원동력이 됩니다!

## 🤝 개발 참여

모든 기여를 환영합니다! 아이디어는 [Pull Request](https://github.com/seatonjiang/gitmoji-vscode/pulls) 또는 [Issue](https://github.com/seatonjiang/gitmoji-vscode/issues)로 제출해 주세요.

## 📃 오픈 소스 라이선스

이 프로젝트는 MIT 라이선스 하에 배포됩니다. 자세한 내용은 [LICENSE](https://github.com/seatonjiang/gitmoji-vscode/blob/main/LICENSE) 파일을 참조하세요.