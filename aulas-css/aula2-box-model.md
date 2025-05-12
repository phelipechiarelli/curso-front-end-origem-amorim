# Aula 2: Box Model, Espaçamento e Bordas

## 🧠 Objetivos da Aula
- Entender como o modelo de caixa funciona
- Aplicar margens, preenchimentos e bordas
- Controlar o tamanho e posicionamento de elementos

---

## 📦 O que é Box Model?

No CSS, **cada elemento** é considerado uma **caixa** composta por:

1. **Content** (conteúdo)
2. **Padding** (espaçamento interno)
3. **Border** (borda)
4. **Margin** (espaçamento externo)

![Modelo de Caixa](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/The_box_model/box-model.png)

---

## 🧱 Propriedades do Box Model

```css
.elemento {
  width: 300px;
  height: 200px;
  padding: 20px;
  border: 2px solid black;
  margin: 15px;
}
```

### 🔹 Padding
Espaço entre o conteúdo e a borda.

### 🔹 Border
Linha em volta do elemento.

```css
border: 2px dashed blue;
```

### 🔹 Margin
Espaço entre o elemento e outros à sua volta.

---

## 🧩 Alinhamento de Elementos

```css
text-align: center; /* alinha o texto */
margin: 0 auto;     /* centraliza um bloco na horizontal */
```

---

## 🧪 Atividade Prática

1. Estilize os blocos da sua página com o modelo de caixa:
   - Adicione `padding` interno para melhorar a leitura
   - Use `margin` para dar espaçamento entre seções
   - Aplique `border` para destacar elementos

2. Adicione classes para personalizar seções específicas:

**HTML:**
```html
<div class="caixa">
  <h2>Seção</h2>
  <p>Texto dentro da caixa.</p>
</div>
```

**CSS:**
```css
.caixa {
  background-color: #fff3e0;
  padding: 20px;
  margin: 20px auto;
  border: 1px solid #ffa726;
  width: 80%;
}
```

---

## ✅ Dica

Use `* { box-sizing: border-box; }` no início do seu CSS para que o `width` inclua padding e border.