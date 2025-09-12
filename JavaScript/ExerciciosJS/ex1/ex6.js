function mostrarNumerosPrimos() {
    console.log('10 números primos:');
    let contador = 0;
    let num = 2;

    while (contador < 10) {
        let divisores = 0;

        for (let i = 1; i <= num; i++) {
            if (num % i === 0) {
                divisores++
            }
        }

        if (divisores === 2) {
            console.log(num);
            contador++;
        }

        num++;
    }
}

mostrarNumerosPrimos();



