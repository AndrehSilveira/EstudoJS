var fs = require("fs");
var nomeArquivo = "meuArquivo.txt"
fs.writeFile(nomeArquivo, "um texto qualquer", function(err){
    if(err != null){
        console.log(err);
    }else{
        //console.log("Arquivo escrito com sucesso!");
        fs.appendFile(nomeArquivo, "\nNova linha no texto!", function(err){
            if(err){
                console.log(err);
            }else{
                fs.readFile(nomeArquivo, "utf-8", function(err, data){
                    if(err){
                        console.log(err);
                    }else{
                        console.log(data);
                    }
                });
            }
        })

        
    }

});