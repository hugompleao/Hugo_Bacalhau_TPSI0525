function mostrarNumeros(){

    for (let i = 1; i <= 5; i++) {
    
    let linha = '';

    for (let x = 1; x <= i; x++) {
        linha += i;
    }
    console.log(linha);
    }
}

mostrarNumeros();