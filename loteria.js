var numero = [];

function loteria(){
    for (i = 0;i < 6; i++){
        numero.push(Math.round(Math.random() * 59 + 1));
    }
}

loteria();
    
numero.sort((a,b) => a - b);

console.log(numero);