var nomes = ["André", "Manira", "Rafa"];
console.log(nomes);

var primeiroNome = nomes[0];
var segundoNome = nomes[1];
var terceiroNome = nomes[2];

console.log("Primeira posição: " + primeiroNome);
console.log("Segunda posição: " + segundoNome);
console.log("Terceira posição: " + terceiroNome);

nomes[2] = "Julieta";
console.log(nomes[2]);

console.log(terceiroNome); //Ele não vai exibir "Julieta" porque está trazendo o novo da variável que recebeu o primeiro Array, que no caso é "Rafa" (Estrutural).

console.log("Tamanho do array: " + nomes.length);
//Abaixo, como descobrir o último Array, deve-se colocar o -1 porque o lenght não considera o 0 na contagem final (que é o primeiro elemento)
console.log("Ultimo array:" + nomes[nomes.length - 1]);

//Insere informação no final do Array
nomes[nomes.length] = "José";
console.log(nomes);

//Insere no último elemento usando a função push
nomes.push("Amanda");
console.log(nomes);

