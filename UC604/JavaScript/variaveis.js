let nome = "Hugo"; //String Literal
let num = 1223; //Number Literal
let flag = true //Boolean Literal
let variavel; //undefined
console.log(variavel);

let typenull = null; //null = object
console.log(typeof(typenull));

let lista = [];
console.log(typeof(lista));

let bool = true;

//cast variavel types string to bool
nome="";
bool = Boolean(nome);
console.log(bool);

//cast variavel types number to bool
num=1;
bool = Boolean(num);
console.log(bool);

num=0;
bool = Boolean(num);
console.log(bool);

//cast variavel types number to string
nome = String(num);
console.log(nome);
console.log(typeof(nome));

//cast variavel types string to number
nome = "Hugo";
num = Number(nome);
console.log(num);
console.log(typeof(num));

//cast string to number (int, float)
num=parseInt(nome);
console.log("parse int", num)


num=parseInt(4,5);
console.log("parse int", num);
console.log(typeof(num));

// NaN 
console.log(isNaN(num))

lista[0]="Hugo";

lista.push(lista[0]);

//arrays
array[0]='Hugo';
array.push(lista[0]);
array[2]=23;
console.log(lista);
