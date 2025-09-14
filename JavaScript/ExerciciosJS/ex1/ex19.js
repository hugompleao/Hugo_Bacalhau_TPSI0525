function seqBonatchi(){
    let a = 1;
    let b = 1;

    console.log("------60 números da sequência Bonatchi------");
    console.log(a);
    console.log(b);

    for (let i=3; i<= 60; i++) {
        let proximo = a + b;
        console.log(proximo);
        a = b;  
        b = proximo;
    }
}

seqBonatchi();