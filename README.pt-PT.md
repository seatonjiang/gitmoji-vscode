English | [简体中文](README.zh-CN.md) | [Português Brasileiro](README.pt-BR.md)

<p align="center">
    <img src="https://raw.githubusercontent.com/seatonjiang/gitmoji-vscode/main/images/gitmoji.gif" width="400">
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
    <a href="https://github.com/seatonjiang/gitmoji-vscode/issues">Denuncie o <i>bug</i></a>
    ·
    <a href="https://github.com/seatonjiang/gitmoji-vscode/issues">Solicite a nova função</a>
</p>

<p align="center">
    <a href="https://github.com/carloscuesta/gitmoji">Gitmoji</a>
    ferramenta para a mensagem de <i>commit</i> de <i>git</i> no VSCode
</p>

## 💻 Captura de ecrã

<p align="center">
    <img src="https://raw.githubusercontent.com/seatonjiang/gitmoji-vscode/main/images/about.gif">
</p>

## 📦 Instalação

1. Abra [Visual Studio Code](https://code.visualstudio.com/).
2. Prima `Ctrl` + `Shift`+ `X` para o guia de extensões.
3. Introduza `Gitmoji` para encontrar a extensão.
4. Prima o botão `Instalar`, então o botão `Ativar`.

## 🔨 Definição

### Selecione a categoria de saída

- `outputType` - Definir a categoria de saída de *emoji,* conforme necessário. O padrão é `emoji`. 

Para a categoria de *emoji:*

![emoji](https://raw.githubusercontent.com/seatonjiang/gitmoji-vscode/main/images/emoji.png)

Para a categoria de código:

![code](https://raw.githubusercontent.com/seatonjiang/gitmoji-vscode/main/images/code.png)

Amostra de definição:

```json
{
  "gitmoji.outputType": "emoji"
}
```

**Observação**: Se vocë utilizar Gitlab, introduza `emoji`, se você utilizar, você pode introduzir `code` ou `emoji`.

### Definição da adição de novos *emojis*

- `additionalEmojis` - Configurar a adição de novos *emojis.*

Amostra de definição:

```json
{
  "gitmoji.additionalEmojis": [
    {
      "emoji": "🐛",
      "code": ":bug:",
      "description": "Fix a bug.",
      "description_pt_br": "Corrigir o bug",
      "description_pt_pt": "Corrigir a falha",
      "description_zh_cn": "修复 BUG",
    },
    {
      "emoji": "🚑",
      "code": ":ambulance:",
      "description": "Critical hotfix.",
      "description_pt_br": "Correção crítica",
      "description_pt_pt": "Correcção crítica",
      "description_zh_cn": "紧急热修复",
    }
  ]
}
```

**Observação**: `description_zh_cn` é uma versão chinesa da descrição e `description_pt_pt` uma versão portuguesa europeia da descrição. Se a descrição for vazia, a versão inglesa será utilizada.

### Utilizar apenas os novos *emojis*

- `onlyUseAdditionalEmojis` - Utilizar seus novos *emojis* ao invés daqueles da extensão.

Amostra de definição:

```json
{
  "gitmoji.onlyUseAdditionalEmojis": true
}
```

### Pesquisar `gitmoji` pelo código de *emoji*

- `showEmojiCode` - Habilitar a pesquisa de *gitmojis* pelo código de *emoji*. (Por exemplo: `ambulance` tornar-se-á `hotfix`).

Amostra de definição:

```json
{
  "gitmoji.showEmojiCode": true
}
```

## 🤝 Contribuição

Quaisquer contribuições sempre serão bem-vindas. Você pode enviar quaisquer ideias, solicitações de *pull* ou problemas (*issues*). Tenha um excelente tempo! :-)

## 📃 Licença

O projeto está lançado com a licença de MIT, veja o ficheiro da [LICENÇA](https://github.com/seatonjiang/gitmoji-vscode/blob/main/LICENSE) para saber mais informações.