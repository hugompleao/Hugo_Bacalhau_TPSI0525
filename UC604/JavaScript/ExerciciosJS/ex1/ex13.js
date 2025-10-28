const prompt = require('prompt-sync')();

function tabuada(){
    const num = parseInt(prompt("Introduza um número inteiro: "));

    console.log(`\n------Tabuada do ${num}------`);

    let resultado= 1;
    
    for(let i=0; i<=10; i++){
        resultado = num * i;
        console.log(`${num} x ${i} = ${resultado}`);
    }
}
tabuada();