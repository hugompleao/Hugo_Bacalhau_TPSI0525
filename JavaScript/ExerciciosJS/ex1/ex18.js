const prompt = require('prompt-sync')();

function numsPerfeitos() {
    const limite = parseInt(prompt('Introduza um número: '));

    if (isNaN(limite) || limite <= 0) {
        console.log("Introduza um número inteiro positivo.");
        return;
    }

    let contador = 0;

    console.log(`Números perfeitos entre 1 e ${limite}:`);

    for (let num= 1; num <=limite; num++) {
        let somaDivisores = 0;

        for (let i = 1; i < num; i++) {
            if (num % i === 0) {
                somaDivisores += i;
            }
        }

        if (somaDivisores === num) {
            contador++;
        }
    }

    console.log(`Números perfeitos encontrados: ${contador}`);
}

numsPerfeitos();
