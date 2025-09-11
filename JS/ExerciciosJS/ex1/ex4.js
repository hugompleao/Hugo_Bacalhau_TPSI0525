const prompt = require(`prompt-sync`)();

let num = parseInt(prompt('Introduza um número inteiro: '));

function numPrimo(numero) {
    if (numero<=1) {
        return false;
    }

    let divisores = 0;
    let i = 1;

    while (i<=numero) {
        if (numero % i === 0) {
            divisores++;
        }
        i++;
    }
    return divisores === 2;
}
 
if (numPrimo(num)) {
    console.log('É primo');
} else {
    console.log('Não é primo');
}