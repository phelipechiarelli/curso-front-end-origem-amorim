# Aula 1: Introdução ao CSS, Cores e Fontes

## 🧠 Objetivos da Aula
- Compreender o que é CSS e para que serve
- Aprender a sintaxe básica do CSS
- Usar propriedades de cor e fontes

---

## 🎨 O que é CSS?

CSS (Cascading Style Sheets) é uma linguagem usada para definir o estilo e o layout das páginas HTML.

Com CSS, podemos mudar cores, fontes, tamanhos, espaçamentos e muito mais.

---

## ✍️ Sintaxe do CSS

```css
seletor {
  propriedade: valor;
}
```

### Exemplo:

```css
p {
  color: blue;
  font-size: 16px;
}
```

---

## 🎨 Cores no CSS

As cores podem ser definidas de várias formas:

```css
/* Nome da cor */
color: red;

/* Código hexadecimal */
color: #ff0000;

/* RGB */
color: rgb(255, 0, 0);

/* Transparência (RGBA) */
color: rgba(255, 0, 0, 0.5);
```

---

## 🔠 Fontes no CSS

```css
font-family: Arial, sans-serif;
font-size: 18px;
font-weight: bold;
```

### Exemplo de aplicação:

```css
body {
  font-family: "Verdana", sans-serif;
  color: #333;
  background-color: #f5f5f5;
}
```

---

## 🧪 Atividade Prática

1. Crie um arquivo chamado `style.css`.
2. Conecte o CSS ao seu `index.html` usando a tag `<link>` no `<head>`:

```html
<link rel="stylesheet" href="style.css" />
```

3. Estilize a página criada anteriormente com:
   - Cor de fundo para o `body`
   - Cor de texto personalizada para os títulos
   - Alteração de fonte e tamanho dos parágrafos

---

## ✅ Exemplo Final

**style.css**
```css
body {
  background-color: #e0f7fa;
  font-family: Arial, sans-serif;
}

h1 {
  color: #006064;
}

p {
  font-size: 18px;
  color: #333;
}
```