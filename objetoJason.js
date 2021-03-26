var pessoa = {
    nome: "André",
    idade: 30,
    telefone: "(16) 99159 2715",
    animaisDeEstimacao: [
        "Pitucha",
        "Nina"
    ],
    mae: {
        nome: "Julieta",
        idade: 71
    }
};

pessoa.namorada = { // é impossível inserir propriedades dentro do objeto sem estar dentro dele, apenas chamando pelo objeto.algumaCoisaQueQueiraInserir
    nome: "Manira",
    idade: 28
}

//console.log(pessoa); //imprime o objeto todo

//console.log(pessoa.mae); //acessando propriedades dentro do objeto
pessoa.animaisDeEstimacao.push("Pudim"); //adicionando mais propriedades para o objeto
//console.log(pessoa.animaisDeEstimacao);

pessoa.nome = pessoa.nome + " Silveira"; //adicionando mais características dentro de uma propriedade de um objeto
//console.log(pessoa.nome);
/*
exibirDados(); //função para exibir

function exibirDados(){ //função para trazer o objeto
    console.log(pessoa);
}
*/
console.log(JSON.stringify(pessoa)); //transforma todo o objeto jason em texto (string)
