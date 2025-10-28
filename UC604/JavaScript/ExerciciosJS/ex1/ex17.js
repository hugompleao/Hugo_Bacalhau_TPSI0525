const prompt = require('prompt-sync')();

function multiplosDe5(){
    console.log('------Multiplos de 5 mas não de 3------')

    for(let i=5; i<=1000; i++){
        if(i % 5 === 0 && i % 3 !== 0){
            console.log(i);
        }
    }

}

multiplosDe5();