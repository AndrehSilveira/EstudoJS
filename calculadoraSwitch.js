var num1 = parseInt(process.argv[2]);
var num2 = parseInt(process.argv[4]);
var operacao = process.argv[3];

var resultado = 0;

switch(operacao){
    case "+":
        resultado = num1 + num2;
        break;
    case "-":
        resultado = num1 - num2;
        break;
    case "*":
        resultado = num1 * num2;
        break;
    case "/":
        resultado = num1 / num2;
        break;
    case "resto":
        resultado = num1 % num2;
        break;
    case "%":
        resultado = (num1 * num2) / 100;
        break;
    default: "Cálculo não realizável!"
}
//console.log(process.argv); esse comando exibe os argumentos dentro do código

console.log(resultado); // para realizar a conta, deve-se digitar no terminar a operação a se fazer, por exemplo 2 + 3