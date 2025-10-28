const prompt = require(`prompt-sync`)();

function geradorNums(){
    let num;

    do{
        num = parseInt(prompt('Introduza um número inteiro: '));

        if (isNaN(num) || num < 1 || num > 100) {
            console.log('Número inválido! Tente novamente.\n');
        }
    
    }while(isNaN(num) || num < 1 || num > 100);

    return num;
}

geradorNums();
console.log('Número válido, parabéns!');