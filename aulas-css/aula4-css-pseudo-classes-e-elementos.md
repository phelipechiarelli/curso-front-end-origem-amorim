# Aula 4: Pseudo-classes e Pseudo-elementos

## 🎯 Objetivos
- Compreender o que são pseudo-classes e pseudo-elementos
- Aplicar estilos interativos com `:hover`, `:focus`, `::before` e `::after`
- Criar efeitos visuais sem alterar o HTML

---

## 🧠 Conceitos

### 🔹 Pseudo-classes

Pseudo-classes adicionam estilo a um elemento com base em seu estado.

```css
/* Quando o mouse passa por cima */
button:hover {
  background-color: green;
  color: white;
}

/* Quando o input está focado */
input:focus {
  border: 2px solid blue;
}

/* Seleciona o segundo item de uma lista */
li:nth-child(2) {
  color: red;
}
```

---

### 🔸 Pseudo-elementos

Pseudo-elementos permitem estilizar partes específicas de um elemento.

```css
/* Adiciona conteúdo antes do elemento */
h1::before {
  content: "🚀 ";
}

/* Adiciona conteúdo depois do elemento */
h1::after {
  content: " 🌟";
}

/* Seleciona a primeira letra */
p::first-letter {
  font-size: 2em;
  color: blue;
}
```

---

## 🧪 Atividade prática

1. Crie um botão com o efeito `:hover`
2. Use `::before` e `::after` para adicionar ícones a um título
3. Use `:focus` para destacar um campo de input

**Exemplo HTML:**
```html
<h1 class="decorado">Bem-vindo!</h1>
<button class="botao">Passe o mouse aqui</button>
<input type="text" placeholder="Digite algo" />
```

**Exemplo CSS:**
```css
.decorado::before {
  content: "👉 ";
}
.decorado::after {
  content: " 👈";
}

.botao:hover {
  background-color: purple;
  color: white;
}

input:focus {
  outline: none;
  border: 2px solid red;
}
```