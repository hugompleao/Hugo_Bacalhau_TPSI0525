const prompt = require('prompt-sync')();

function tabelaAscii() {
    let continuar = true;
    let inicio = 0;
    const fim = 255;

    while (continuar && inicio <= fim) {
        console.log("------Tabela ASCII------");
        
        for (let i = inicio; i < inicio + 20 && i <= fim; i++) {
            console.log(`${i} -> ${String.fromCharCode(i)}`);
        }

        inicio += 20;

        if (inicio <= fim) {
            const resposta = prompt("Pretende continuar? (s/n): ").toLowerCase();
            if (resposta !== 's') {
                continuar = false;
            }
        }
    }
}

tabelaAscii();