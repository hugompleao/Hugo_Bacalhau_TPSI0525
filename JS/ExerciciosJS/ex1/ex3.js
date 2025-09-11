const prompt = require(`prompt-sync`)();

function calcularMedia(notas) {
    let i=1;
    let soma=0;

    while (i<=notas) {
        let nota = parseFloat(prompt('Introduza a nota dos alunos: '));
        soma+=nota;
        i++;
    }

    let media = soma / notas;
    return media;
}

let mediaAlunos = calcularMedia(10);
console.log(`A média dos alunos é: ${mediaAlunos}`);
