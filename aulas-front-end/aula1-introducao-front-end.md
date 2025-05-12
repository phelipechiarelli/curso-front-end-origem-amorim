# Aula 1: Introdução ao Desenvolvimento Front-End

## 🧠 Objetivos da Aula
- Entender o que é desenvolvimento front-end
- Conhecer ferramentas como VS Code e Git
- Criar a primeira página HTML

---

## 🚀 O que é Front-End?

O front-end é a parte visual de um site ou aplicação.  
Tudo que o usuário vê e interage no navegador é construído com **HTML**, **CSS** e **JavaScript**.

---

## 🛠 Ferramentas de Desenvolvimento

### 🔹 VS Code (Visual Studio Code)
Editor de código leve e poderoso.

#### 📦 Extensões recomendadas:
- **Live Server**: abre seu HTML no navegador com recarregamento automático.
- **Prettier**: formata o código automaticamente.
- **GitLens**: integração com Git.
- **HTML CSS Support**: ajuda na escrita de CSS no HTML.

### 🔹 Git e GitHub
- **Git**: sistema de controle de versões.
- **GitHub**: plataforma para armazenar projetos online.

#### 🧪 Comandos básicos:
```bash
git init
git add .
git commit -m "primeiro commit"
git remote add origin https://github.com/usuario/repositorio.git
git push -u origin main
```

---

## 🏗 Estrutura Básica de uma Página HTML

```html
<!DOCTYPE html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8" />
    <title>Minha Primeira Página</title>
  </head>
  <body>
    <h1>Olá, mundo!</h1>
    <p>Essa é minha primeira página web.</p>
  </body>
</html>
```

---

## 🧩 Elementos Semânticos

- `<header>`: cabeçalho
- `<nav>`: menu de navegação
- `<main>`: conteúdo principal
- `<section>`: seção do conteúdo
- `<article>`: artigo independente
- `<footer>`: rodapé

---

## 📝 Atividade Prática

### Criação da sua primeira página HTML:

1. Crie um arquivo chamado `index.html`.
2. Insira a estrutura básica.
3. Adicione um título principal (`<h1>`) e um parágrafo (`<p>`).
4. Use pelo menos **um elemento semântico**.

```html
<!DOCTYPE html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8" />
    <title>Página de Exemplo</title>
  </head>
  <body>
    <header>
      <h1>Bem-vindo ao meu site!</h1>
    </header>
    <main>
      <p>Essa é uma página simples criada em HTML.</p>
    </main>
    <footer>
      <p>Rodapé da página</p>
    </footer>
  </body>
</html>
```

---

## ✅ Dica

Use o **Live Server** no VS Code para visualizar sua página em tempo real!