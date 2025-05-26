# Aula 3 – Condicionais e Loops

## Objetivos

- Usar estruturas de decisão como `if`, `else`.
- Repetir tarefas com `for` e `while`.
- Criar listas dinâmicas com base em entradas do usuário.

## Condicionais

```javascript
let idade = 18;

if (idade >= 18) {
  console.log("Maior de idade");
} else {
  console.log("Menor de idade");
}
```

## Loops

### For

```javascript
for (let i = 0; i < 5; i++) {
  console.log("Número: " + i);
}
```

### While

```javascript
let i = 0;
while (i < 5) {
  console.log("Contando: " + i);
  i++;
}
```

## Criando uma lista dinâmica

```html
<input type="text" id="item" placeholder="Novo item">
<button onclick="adicionar()">Adicionar</button>
<ul id="lista"></ul>

<script>
  function adicionar() {
    let input = document.getElementById("item");
    let texto = input.value;

    if (texto !== "") {
      let li = document.createElement("li");
      li.textContent = texto;
      document.getElementById("lista").appendChild(li);
      input.value = "";
    } else {
      alert("Digite um item válido.");
    }
  }
</script>
```

## Atividade Prática

- Crie uma interface onde o usuário digita itens e os adiciona a uma lista.
- Use `if` para verificar se o item não está vazio.
- Use `for` ou `while` para exibir uma contagem (opcional).