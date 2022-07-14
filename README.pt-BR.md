English | [简体中文](README.zh-CN.md)

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
    <a href="https://github.com/seatonjiang/gitmoji-vscode/issues">Sinalize o <i>bug</i></a>
    ·
    <a href="https://github.com/seatonjiang/gitmoji-vscode/issues">Solicite a nova função</a>
</p>

<p align="center">
    <a href="https://github.com/carloscuesta/gitmoji">Gitmoji</a>
    ferramenta para a mensagem de <i>commit</i> de <i>git</i> no VSCode
</p>

## 💻 Captura de tela

<p align="center">
    <img src="https://raw.githubusercontent.com/seatonjiang/gitmoji-vscode/main/images/about.gif">
</p>

## 📦 Instalação

1. Abra [Visual Studio Code](https://code.visualstudio.com/).
2. Pressione `Ctrl` + `Shift`+ `X` para o guia de extensões.
3. Digite `Gitmoji` para achar a extensão.
4. Clique no botão `Instalar`, então o botão `Ativar`.

## 🔨 Configuração

### Selecione o tipo de saída

- `outputType` - Configurar o tipo de saída de *emoji,* conforme necessário. O padrão é `emoji`. 

Para o tipo de *emoji:*

![emoji](https://raw.githubusercontent.com/seatonjiang/gitmoji-vscode/main/images/emoji.png)

Para o tipo de código:

![code](https://raw.githubusercontent.com/seatonjiang/gitmoji-vscode/main/images/code.png)

Amostra de configuração:

```json
{
  "gitmoji.outputType": "emoji"
}
```

**Observação**: Se vocë usar Gitlab, digite `emoji`, se você usar, você pode escrever `code` ou `emoji`.

### Configurar a adição de *emojis* adicionais

- `additionalEmojis` - Configurar a adição de novos *emojis.*

Amostra de configuração:

```json
{
  "gitmoji.additionalEmojis": [
    {
      "emoji": "🐛",
      "code": ":bug:",
      "description": "Fix a bug.",
      "description_pt_br": "Corrigir o bug",
      "description_zh_cn": "修复 BUG",
    },
    {
      "emoji": "🚑",
      "code": ":ambulance:",
      "description": "Critical hotfix.",
      "description_pt_br": "Correção crítica",
      "description_zh_cn": "紧急热修复",
    }
  ]
}
```

**Observação**: `description_zh_cn` é uma versão chinesa da descrição e `description_pt_br` uma versão portuguesa brasileira da descrição. Se algo vazio, a versão inglesa será usada.

### Usar apenas os *emojis* adicionais

- `onlyUseAdditionalEmojis` - Usar seus *emojis* adicionais ao invés desses da extensão.

Amostra de configuração:

```json
{
  "gitmoji.onlyUseAdditionalEmojis": true
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