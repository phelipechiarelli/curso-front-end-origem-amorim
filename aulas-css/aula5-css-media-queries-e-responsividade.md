# Aula 5: Media Queries e Responsividade

## 🎯 Objetivos
- Compreender o que são media queries
- Criar layouts que se adaptam a diferentes tamanhos de tela
- Utilizar unidades relativas para melhorar a flexibilidade do design

---

## 🧠 Conceitos

### 📱 O que são Media Queries?

Media queries permitem aplicar estilos diferentes dependendo do tamanho da tela ou dispositivo.

```css
/* Estilo padrão (desktop) */
body {
  background-color: white;
}

/* Estilo para telas menores que 768px */
@media (max-width: 768px) {
  body {
    background-color: lightgray;
  }
}
```

### 📐 Unidades Relativas

- `em` e `rem`: baseadas no tamanho da fonte
- `%`: baseado no tamanho do elemento pai
- `vw` e `vh`: porcentagem da largura e altura da janela

```css
.container {
  width: 80%;
  padding: 2em;
}

h1 {
  font-size: 4vw;
}
```

---

## 🧪 Atividade prática

1. Estilize sua página HTML para funcionar bem em telas pequenas e grandes.
2. Use media queries para alterar o layout em dispositivos móveis.
3. Utilize unidades relativas para garantir um layout mais flexível.

**Exemplo HTML:**
```html
<div class="caixa">
  <h2>Responsividade</h2>
  <p>Esta página se adapta ao tamanho da tela!</p>
</div>
```

**Exemplo CSS:**
```css
.caixa {
  width: 80%;
  margin: auto;
  padding: 2em;
  background-color: #eee;
  font-size: 1rem;
}

/* Ajustes para celular */
@media (max-width: 600px) {
  .caixa {
    background-color: #cceeff;
    font-size: 0.9rem;
    padding: 1em;
  }
}
```