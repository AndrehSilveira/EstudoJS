/*for (i = 0; i < 10; i++){
    console.log(i);
}*/
var nomes = ["Andre", "Manira", "Julieta", "Rafa"];
for(i = 0;i < nomes.length; i++){
    //console.log(nomes[i]);
}

for(i = nomes.length -1;i >= 0; i--){
    //console.log(nomes[i]);
}

/*var i = 0;
while(i < nomes.length){
    console.log(nomes[i]);
    i++;
}
*/

/*var i = 0
while(i < nomes.length){
    console.log(nomes[i]);
    if(nomes[i] === "Julieta"){
        console.log("Encontrei a " + nomes[i])
        break;
    }
    i++
}
*/

var numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var i = 0;
while(i < numeros.length){
    var num = numeros[i];
    i++

    if(num % 2 === 0){
        //console.log(num + " é par!");
        continue;
    }

    //console.log(num + " é impar!");
}

var j = 30;
do {
    j++;
    //console.log(j);
} while (j < 10);

for (var numero of numeros){
    console.log(numero);
}