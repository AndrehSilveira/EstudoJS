/*
var num = 5;
var resultado = 0;

for(i = 2; i <= (num / 2);i++){
    if(num % i === 0){
        resultado++;
        break;
    }

}

if (resultado === 0){
    console.log("O número " + num + " é primo!");
}else{
    console.log("O numero " + num + " NÃO é um número primo!");
}
*/
//Outra solução
var numero = 13;
var numeroPrimo = true;

for (i = 2; i < numero;i++){
    if(numero % i === 0){
        numeroPrimo = false;
        break;
    }
}

if(numeroPrimo){
    console.log("O numero "+ numero + " é primo!");
}else{
    console.log("O numero "+ numero +" NÃO é primto!");
}