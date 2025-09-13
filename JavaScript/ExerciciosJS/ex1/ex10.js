const prompt = require(`prompt-sync`)();

function contaDivisores() {
    const num = parseInt(prompt('Introduza um número inteiro: '));

    let contador = 0;

    for (let i = 1; i <= num; i++) {
        if (num % i === 0) {
            contador++;
        }
    }
    if (isNaN(num) || num <= 0) {
        console.log('Introduza um número inteiro positivo.');
    }
    else{
        console.log(`O número introduzido tem ${contador} divisores.`);
    }

}

contaDivisores();
