[English](README.md) | [简体中文](README.zh-CN.md) | Português Brasileiro | [Português Europeu](README.pt-PT.md) | [日本語](README.ja.md)

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
    <a href="https://github.com/seatonjiang/gitmoji-vscode/issues">Sinalize o <i>bug</i></a>
    ·
    <a href="https://github.com/seatonjiang/gitmoji-vscode/issues">Solicite a nova função</a>
</p>

<p align="center">
    Ferramenta Gitmoji para mensagens de compromisso de gitmoji em VSCode
</p>

## 💻 Captura de tela

<p align="center">
    <img src="assets/about.gif">
</p>

## 📦 Instalação

1. Abra [Visual Studio Code](https://code.visualstudio.com/).
2. Pressione `Ctrl` + `Shift`+ `X` para abrir o guia de extensões.
3. Digite `Gitmoji` para achar a extensão.
4. Clique no botão `Instalar`, então o botão `Ativar`.

## 🔨 Configuração

### Selecione o tipo de saída

- `outputType` - Configurar o tipo de saída de *emoji,* conforme necessário. O padrão é `emoji`.

Para o tipo de *emoji:*

![emoji](assets/emoji.png)

Para o tipo de código:

![code](assets/code.png)

Amostra de configuração:

```json
{
  "gitmoji.outputType": "emoji"
}
```

**Observação**: Se você usar Gitlab, digite `emoji`, se você usar GitHub, você pode escrever `code` ou `emoji`.

### Configurar a adição de *emojis* adicionais

- `addCustomEmoji` - Configurar a adição de novos *emojis.*

Amostra de configuração:

```json
{
  "gitmoji.addCustomEmoji": [
    {
      "emoji": "🧵",
      "code": ":thread:",
      "description": "Adicionar ou atualizar código relacionado a multithreading ou concurrency"
    },
    {
      "emoji": "🦺",
      "code": ":safety_vest:",
      "description": "Adicionar ou atualizar código relacionado à validação"
    }
  ]
}
```

### Usar apenas os *emojis* adicionais

- `onlyUseCustomEmoji` - Usar seus *emojis* adicionais ao invés desses da extensão.

Amostra de configuração:

```json
{
  "gitmoji.onlyUseCustomEmoji": true
}
```

### Procurar `gitmoji` pelo código de *emoji*

- `showEmojiCode` - Ativar a pesquisa de *gitmojis* pelo código de *emoji*. (Por exemplo: `ambulance` retornará `hotfix`).

Amostra de configuração:

```json
{
  "gitmoji.showEmojiCode": true
}
```

## 🤝 Contribuição

Nós damos as boas-vindas a quaisquer contribuições. Você pode enviar quaisquer ideias, assim como *pull requests* ou *issues*. Tenha um ótimo tempo! :-)

## 📃 Licença

O projeto está sob a licença de MIT, veja o arquivo da [LICENÇA](https://github.com/seatonjiang/gitmoji-vscode/blob/main/LICENSE) para ver mais detalhes.
