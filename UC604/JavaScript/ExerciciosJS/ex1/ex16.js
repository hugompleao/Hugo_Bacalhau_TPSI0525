const prompt = require('prompt-sync')();

function media30Nums() {
    let soma = 0;
    let contador = 0;

    console.log("Introduza 30 números inteiros pares entre 1 e 50:");

    while (contador < 30) {
        const numero = parseInt(prompt(`Número ${contador + 1}: `));

        if (isNaN(numero) || numero < 1 || numero > 50) {
            console.log("Número inválido! Introduza um número inteiro, entre 1 e 50.");
            continue;
        }
        else if (numero % 2 !== 0){
            console.log("Número inválido! Introduza um número par");
            continue;
        }
        soma += numero;
        contador++;
    }
    const media = soma / 30;
    console.log(`\nMédia: ${media}`);
}

media30Nums();