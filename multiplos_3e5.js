//Listar todos os números que são múltiplos de 3 ou 5 abaixo de mil e somar todos.

var multiplos = [];
for (i = 3; i < 1000; i++){
    if ((i % 3 === 0) || (i % 5 === 0)){
        multiplos[multiplos.length] = i; //versao usando lenght para inserir um por um do primeiro ao ultimo
        //multiplos.push(i); //versao usando .push para inserir um por um do primeiro ao ultimo (pilha)
    }
}

var sum = 0;
for (i = 0;i < multiplos.length; i++){
    sum += multiplos[i];
}

console.log(sum);

