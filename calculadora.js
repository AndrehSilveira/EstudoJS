var num1 = parseInt(process.argv[2]);
var num2 = parseInt(process.argv[4]);
var operacao = process.argv[3];

var resultado = 0;

if (operacao === "+"){
    resultado = num1 + num2;
}else if(operacao === "-"){
        resultado = num1 - num2;
}else if(operacao === "*"){
    resultado = num1 * num2;
}else if(operacao === "/"){
    resultado === num1 / num2;
}else if(operacao === "resto"){
    resultado === num1 % num2;
}else if(operacao === "%"){
    resultado === (num1 * num2) / 100;
}
console.log(resultado);