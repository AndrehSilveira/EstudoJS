var a = 50;
var b = 40;

if (a > b){
    //se a é maior que b
    console.log("A é maior do que B");
}else if (a < b){
    // se não, executa código abaixo
    console.log("A não é maior do que B");
}else{
    //se não for nenhuma das duas, executa este:
    console.log("Os dois valores são iguais!");
}

if(a > b){
    console.log("Executar se A for maior que B");
    a++
}
console.log("Sempre executar!");
console.log(a)

var c = 10
var d = 20
var e = 10
var f = 30
if ((c === d) && (e === f)){
    console.log("C é igual a D e E é igual a F");
}else{
    console.log("Os números são diferentes");
}

console.log(!(1 > 2));

var fruta = "pera";

switch(fruta){
    case "banana":
        valor = 2;
        break;
    case "Maçã":
        valor = 3;
        break;
    case "Abacate":
        valor = 5.50;
        break;
    default:
        valor = 10;
}

console.log(valor);

x = 1;
y = 2;
resultado = "";

resultado = x < 2 ? "X é menor que dois" : "X é maior que dois";
console.log(resultado)