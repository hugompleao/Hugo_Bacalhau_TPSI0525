const prompt = require('prompt-sync')();

function operacoesNum() {
    const num = parseInt(prompt("Introduza um número inteiro: "));

    let contador = 0;

    let somar = 0;
    for (let i = 1; i < num; i++) {
        somar += num + i;
        contador++;
    }
    console.log(`\nSoma: ${somar}`);


    let subtrair = 0;
    for (let i = 1; i < num; i++) {
        subtrair += num - i;
        contador++;
    }
    console.log(`Subtração: ${subtrair}`);


    let multiplicar = 1;
    for (let i = 1; i < num; i++) {
        multiplicar *= num * i;
        contador++;
    }
    console.log(`Multiplicação: ${multiplicar}`);


    let dividir = 0;
    for (let i = 1; i < num; i++) {
        dividir += num / i;
        contador++;
    }
    console.log(`Divisão: ${dividir}`);

    console.log(`\nTotal de operações efetuadas: ${contador}`);
}

operacoesNum();