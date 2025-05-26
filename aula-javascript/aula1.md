# Aula 1 – Sintaxe Básica de JavaScript e Variáveis

## Objetivos

- Compreender a estrutura básica de um script JavaScript.
- Aprender como declarar variáveis.
- Manipular elementos HTML utilizando JavaScript.

## Introdução ao JavaScript

JavaScript é uma linguagem de programação usada para tornar páginas web interativas. Pode ser utilizada para atualizar conteúdo dinamicamente, validar formulários, criar animações e muito mais.

## Inserindo JavaScript no HTML

Existem três formas de adicionar JavaScript a uma página:

1. **Inline** (dentro de atributos HTML):
```html
<button onclick="alert('Olá!')">Clique aqui</button>
```

2. **Interno** (dentro de uma tag `<script>`):
```html
<script>
  alert('Olá, mundo!');
</script>
```

3. **Externo** (link para um arquivo `.js`):
```html
<script src="script.js"></script>
```

## Variáveis

### Tipos de declaração

```javascript
var nome = "Maria";   // Antiga forma (evitar usar)
let idade = 25;       // Escopo de bloco
const pi = 3.14;      // Constante
```

### Tipos de dados

```javascript
let texto = "Olá";     // String
let numero = 10;       // Number
let ativo = true;      // Boolean
```

## Operadores

- Aritméticos: `+`, `-`, `*`, `/`
- Atribuição: `=`, `+=`, `-=`
- Comparação: `==`, `!=`, `===`, `!==`, `>`, `<`

## Manipulando o DOM

```html
<p id="mensagem">Mensagem original</p>
<button onclick="alterarMensagem()">Alterar</button>

<script>
  function alterarMensagem() {
    let paragrafo = document.getElementById("mensagem");
    paragrafo.textContent = "Mensagem alterada!";
    paragrafo.style.color = "red";
  }
</script>
```

## Atividade Prática

Crie um arquivo HTML com:

- Um parágrafo com id.
- Um botão.
- Um script que altere o texto e a cor do parágrafo ao clicar no botão.