function mostrarParesImpares() {

    let contadorPar = 0;
    console.log("Números Pares");
    for (let i=0; i<30; i++) { 
        console.log(contadorPar);
        contadorPar += 2;
    }

    let contadorImpar = 1;
    console.log("\nNúmeros Ímpares");
    for (let i=0; i <30; i++) { 
        console.log(contadorImpar);
        contadorImpar += 2;
    }
}
 
mostrarParesImpares();