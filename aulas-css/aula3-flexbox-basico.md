# Aula 3: Flexbox Básico

## 🧠 Objetivos da Aula
- Introduzir o Flexbox
- Criar layouts flexíveis e responsivos
- Organizar elementos na tela com facilidade

---

## 🧩 O que é Flexbox?

Flexbox é um modelo de layout do CSS que facilita a **organização de elementos em linha ou em coluna**.

Ele é ativado usando a propriedade `display: flex`.

---

## 🔧 Propriedades do Flex Container

```css
.container {
  display: flex;
  flex-direction: row;      /* ou column */
  justify-content: center;  /* alinhamento horizontal */
  align-items: center;      /* alinhamento vertical */
  gap: 10px;                /* espaço entre os itens */
}
```

### 🔹 Exemplos de `justify-content`:

- `flex-start`: início
- `center`: centro
- `space-between`: espaço entre os itens
- `space-around`: espaço ao redor
- `space-evenly`: espaço igual

---

## 🪄 Flex Items

Os elementos dentro do container flexível são chamados de **itens**.

Você pode aplicar:

```css
.item {
  flex: 1;        /* ocupa espaço proporcional */
  order: 2;       /* muda a ordem do item */
  align-self: flex-start;
}
```

---

## 🧪 Atividade Prática

1. Crie uma `div` com classe `.container`
2. Adicione 3 caixas dentro com a classe `.item`
3. Use `display: flex` para organizar os elementos

**HTML:**
```html
<div class="container">
  <div class="item">Item 1</div>
  <div class="item">Item 2</div>
  <div class="item">Item 3</div>
</div>
```

**CSS:**
```css
.container {
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 200px;
  background-color: #e0f7fa;
}

.item {
  background-color: #00838f;
  color: white;
  padding: 20px;
  border-radius: 8px;
}
```

---

## ✅ Desafio Extra

- Altere o `flex-direction` para `column` e veja o resultado.
- Experimente usar `wrap` para os itens se ajustarem automaticamente:

```css
.container {
  flex-wrap: wrap;
}
```