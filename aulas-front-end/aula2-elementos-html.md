# Aula 2: Elementos HTML - Listas, Imagens e Links

## 🧠 Objetivos da Aula
- Aprender a utilizar listas ordenadas e não ordenadas
- Incorporar imagens em uma página
- Criar links de navegação internos e externos

---

## 📝 Listas em HTML

### 🔹 Lista Não Ordenada (`<ul>`)
Usada quando a ordem dos itens **não importa**.

```html
<ul>
  <li>HTML</li>
  <li>CSS</li>
  <li>JavaScript</li>
</ul>
```

### 🔹 Lista Ordenada (`<ol>`)
Usada quando a ordem dos itens **é importante**.

```html
<ol>
  <li>Instalar o VS Code</li>
  <li>Aprender HTML</li>
  <li>Aprender CSS</li>
</ol>
```

---

## 🖼 Inserindo Imagens

Para exibir uma imagem usamos a tag `<img>`, que precisa do atributo `src`.

```html
<img src="cachorro.jpg" alt="Um cachorro fofo" width="300" />
```

### 📌 Dicas:
- O atributo `alt` descreve a imagem (importante para acessibilidade).
- Você pode usar imagens locais ou de URLs externas.

```html
<img src="https://placekitten.com/300/200" alt="Gatinho fofo" />
```

---

## 🔗 Criando Links

A tag `<a>` cria links para outras páginas ou sites.

### 🔸 Link para outro site:

```html
<a href="https://www.google.com" target="_blank">Ir para o Google</a>
```

### 🔸 Link interno (para outra página do seu site):

```html
<a href="contato.html">Página de Contato</a>
```

### 🔸 Link dentro da mesma página (âncora):

```html
<a href="#sobre">Ir para a seção Sobre</a>

<h2 id="sobre">Sobre o projeto</h2>
```

---

## 🧪 Atividade Prática

### Adicione à sua página criada na Aula 1:

1. Uma **lista não ordenada** com seus hobbies ou interesses.
2. Uma **lista ordenada** com o passo a passo para criar um projeto.
3. Pelo menos **duas imagens** com `alt` e largura definida.
4. Um **link** para um site externo (ex: Google).
5. Um **link interno** para uma segunda página chamada `galeria.html`.

---

## 📝 Exemplo final:

```html
<!DOCTYPE html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8" />
    <title>Minha Página com Listas, Imagens e Links</title>
  </head>
  <body>
    <h1>Bem-vindo!</h1>

    <h2>Meus hobbies</h2>
    <ul>
      <li>Desenhar</li>
      <li>Jogar videogame</li>
      <li>Programar</li>
    </ul>

    <h2>Passos para iniciar um projeto</h2>
    <ol>
      <li>Instalar o VS Code</li>
      <li>Configurar o Git</li>
      <li>Criar o HTML</li>
    </ol>

    <h2>Galeria</h2>
    <img src="https://placekitten.com/300/200" alt="Gato 1" />
    <img src="https://placekitten.com/300/201" alt="Gato 2" />

    <p><a href="https://www.google.com" target="_blank">Visite o Google</a></p>
    <p><a href="galeria.html">Veja minha galeria</a></p>
  </body>
</html>
```