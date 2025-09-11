const prompt = require(`prompt-sync`)();

function verificarParesImpares() {
    let i = 1;

    while (i <= 10) {
        let num = parseInt(prompt('Introduza um número: '));

        if (num % 2 === 0) {
            console.log('Número Par');
        } else {
            console.log('Número Impar');
        }
        i++;
    }
}

verificarParesImpares();



