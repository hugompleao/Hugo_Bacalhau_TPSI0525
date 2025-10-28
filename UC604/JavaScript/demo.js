//adivinha o nome
const prompt = require(`prompt-sync`)();

let nomeAdvinha = 'Hugo';

function adivinhaNome(nomeAdvinha){
let nomeAcertado=prompt('Adivinhe o nome: ');

    if(nomeAcertado===nomeAdvinha){
        console.log('Acertou o nome!');
    }else{
        console.log('Errou o nome, tente novamente!');
        adivinhaNome(nomeAdvinha);
    }
}

adivinhaNome(nomeAdvinha);