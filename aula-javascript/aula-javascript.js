function exibeMensagem() {
    let texto = "Olá mundo!";  // String
    alert(texto);
}

// Aritméticos: +, -, *, /

function calculaNumeros() {
    let num1 = 10;
    let num2 = 45;
    let resultado = num1 + num2;
    let mensagem = "O resultado do calculo é: ";
    alert(`${mensagem} ${resultado}`);
}

// Comparação: ==, !=, ===, !==, >, <

function comparaValores() {
    let valor1 = 120;
    let valor2 = "120";
    let valor3 = 35;
    let valor4 = valor3;
    let valor5 = valor2;
    let mensagemVerdadeira = true; // verdadeiro
    let mensagemFalsa = false; // falso
    if (valor1 > valor3) {
        alert(mensagemVerdadeira);
    } else {
        alert(mensagemFalsa);
    }
}

function conteAteDez() {
    for (let i = 0; i <= 10; i += 2) {
        console.log("Número: " + i);
    }
}

function conteAteDezWhile() {
    let i = 0;
    while (i <= 10) {
        console.log("Contando: " + i);
        i++;
    }
}