var nomes = ["André", "Manira", "Julieta", "Rafael"];


var nome = nomes.pop(); //remove o ultimo elemento do Array
//console.log(nome); //exibe o ultimo elemento que foi "removido"
//console.log(nomes); //exibe todos os elementos menos o "remove

//push insere o elemento no fim do Array e retorna seu novo tamanho
var x = nomes.push("Amanda");
//console.log(nomes);
//console.log(x);

//remove o primeiro elemento do Array
nomes.shift();
//console.log(nomes);

//adiciona elemento no começo do Array
nomes.unshift("José");
//console.log(nomes);

//substitui um elemento
nomes[0] = "Criscia";
//console.log(nomes);

//remove elemento, deixando "undefined" no lugar
//delete nomes[0];
//console.log(nomes);

//primeiro parâmtro onde começa a inserção (posição inicial), segundo parâmetro quantos elementos 
//que serão removitos a partir da posição inicial e terceiro parâmetro são os elementos a ser inseridos.
nomes.splice(0, 0, "André");
//console.log(nomes);

//concatena  um Array com outro
var sobreNomes = ["Dos Santos", "Da Silva", "Carvalho"];
var nomeCompleto = nomes.concat(sobreNomes);
//console.log(nomeCompleto);

//cria um novo Arry sem alterar o Array original - primeiro parâmetro posição inicial e segundo parâmetro (opicional) opção final (não incluso);
//console.log(nomes);
console.log(nomes.slice(1));
