# Aula 3: Formulários e Inputs em HTML

## 🧠 Objetivos da Aula
- Entender como criar formulários em HTML
- Conhecer os principais tipos de campos (inputs)
- Criar um formulário de contato funcional

---

## 📝 O que é um formulário?

Um **formulário** HTML permite coletar dados dos usuários através de campos interativos como caixas de texto, botões, seletores e muito mais.

Ele é criado com a tag `<form>` e os campos com a tag `<input>`, `<textarea>`, `<select>`, etc.

---

## 🧩 Estrutura básica de um formulário

```html
<form action="envio.php" method="post">
  <label for="nome">Nome:</label>
  <input type="text" id="nome" name="nome" />

  <label for="email">E-mail:</label>
  <input type="email" id="email" name="email" />

  <input type="submit" value="Enviar" />
</form>
```

---

## 🔍 Atributos importantes

- `action`: define o destino dos dados (ex: um arquivo PHP).
- `method`: define o método de envio (`get` ou `post`).
- `name`: nome do campo (usado para identificar no backend).
- `id`: conecta o campo ao `label`.

---

## 🛠 Principais tipos de inputs

### 🔹 Texto (padrão)
```html
<input type="text" name="nome" />
```

### 🔹 E-mail
```html
<input type="email" name="email" />
```

### 🔹 Senha
```html
<input type="password" name="senha" />
```

### 🔹 Área de texto (várias linhas)
```html
<textarea name="mensagem"></textarea>
```

### 🔹 Botão de envio
```html
<input type="submit" value="Enviar" />
```

---

## 📝 Atividade Prática

### Crie um formulário de contato contendo:

1. Campo de **nome completo**
2. Campo de **e-mail**
3. Campo de **mensagem** com várias linhas
4. Botão para **enviar**

---

## 🧪 Exemplo de formulário completo

```html
<!DOCTYPE html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8" />
    <title>Formulário de Contato</title>
  </head>
  <body>
    <h1>Entre em Contato</h1>

    <form action="#" method="post">
      <label for="nome">Nome:</label><br />
      <input type="text" id="nome" name="nome" required /><br /><br />

      <label for="email">E-mail:</label><br />
      <input type="email" id="email" name="email" required /><br /><br />

      <label for="mensagem">Mensagem:</label><br />
      <textarea id="mensagem" name="mensagem" rows="5" cols="30" required></textarea><br /><br />

      <input type="submit" value="Enviar Mensagem" />
    </form>
  </body>
</html>
```

---

## ✅ Desafio Extra

- Adicione um campo de **telefone** com `type="tel"`
- Adicione um menu de seleção (`<select>`) com opções de assunto

```html
<label for="assunto">Assunto:</label>
<select id="assunto" name="assunto">
  <option value="duvida">Dúvida</option>
  <option value="sugestao">Sugestão</option>
  <option value="outro">Outro</option>
</select>
```