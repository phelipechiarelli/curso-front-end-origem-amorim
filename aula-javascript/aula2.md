# Aula 2 – Eventos e Funções

## Objetivos

- Entender como criar e usar funções em JavaScript.
- Aprender a manipular eventos como clique e envio de formulário.

## Funções

Funções são blocos de código que realizam tarefas específicas.

### Sintaxe

```javascript
function saudacao() {
  alert("Bem-vindo!");
}
```

### Chamando a função

```html
<button onclick="saudacao()">Clique aqui</button>
```

## Eventos

Eventos são ações do usuário que podemos capturar com JavaScript.

### Tipos comuns

- `onclick` – clique em um botão ou elemento.
- `onmouseover` – quando o mouse passa sobre algo.
- `onsubmit` – envio de formulário.

## Exemplo com formulário

```html
<form onsubmit="return validarFormulario()">
  <input type="text" id="nome" placeholder="Nome">
  <input type="submit" value="Enviar">
</form>

<script>
  function validarFormulario() {
    let nome = document.getElementById("nome").value;
    if (nome === "") {
      alert("Preencha o nome!");
      return false;
    }
    alert("Formulário enviado!");
    return true;
  }
</script>
```

## Atividade Prática

Crie um formulário com campos para nome e email. Ao clicar em "Enviar":

- Verifique se os campos estão preenchidos.
- Mostre uma mensagem de erro se algum campo estiver vazio.