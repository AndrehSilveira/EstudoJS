var fs = require("fs");
var nomeArquivo = "Carros.json";
var carros = ["Gol", "Palio", "Uno", "Celta"];
var concessionaria = {
    nome: "Concecionaria XYZ",
    carros //não preciso colocar carros: carros pois, quando tem o mesmo nome, só preciso colocar o nome uma vez

}

fs.writeFile(nomeArquivo, JSON.stringify(concessionaria), function(err){ //stringify transforma objeto em string (texto)
    if(err){
        console.log(err);
    }else{
        fs.readFile(nomeArquivo, "utf-8", function(err, data){
            if(err){
                console.log(err);
            }else{
                var obj = JSON.parse(data); //transforma o objeto Jason que está em formato de string (texto) para dados afim de poder inserir uma nova informação (push)
                obj.carros.push("HRV"); // inserindo nova informação
                fs.writeFile(nomeArquivo, JSON.stringify(obj), function(err){
                     if(err){
                         console.log(err);
                     }
                })
            }
        })
    }
})