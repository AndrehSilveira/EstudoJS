 /*
Criar um jogo que no qual o jogador tente acertar o número.
O programa irá gerar um número aleatório entre 1 e 100 e o jogador deve tentar adivinhar em até 10 tentativas.
Toda vez que o jogador chutar um número, o programa deve informar, caso ele tenha errado, se o número que ele chutou é maior ou menor que o número correto.
Ou informar que o jogador venceu.
O jogo termina quando o jogador acerta ou acabam as tentativas

1) Gerar um número aleatório entre 1 e 100;
2) Inicializar o número de tentativas como 10;
3) Pedir para que o jogador tente adivinhar o número;
4) Decrementar o número de tentativas;
5) Verificar se a tentativa está correta;
6) Se a tentativa estiver correta:
    - Informar que acertou o número;;
    - Encerrar o jogo;
7) Se a tentativa for incorreta e acabaram as tentativas:
    - Informar que ele não venceu
    - Encerrar o jogo;
8) Se estiver incorreta e ainda existirem tentativas:
    - Informar ao usuário que o número está incorreto;
    - Informar se é maior ou menor que o número informado;
    - Pedir outra tentativa para o jogador;
 */
var readline = require("readline");
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

var numeroAleatorio = Math.round(Math.random() * 100);
 if(numeroAleatorio === 0){
     numeroAleatorio = 1;
 }

var numeroTentativas = 10;

var seuNome = rl.question("\n\nEsse é um jogo de adivinhação! Você tem 10 tentativas para adivinhar um número entre 1 e 100. Vamos lá? \n\n" +
                          "Primeiro, digite seu nome: ", function(nome){seuNome = nome;
                        if(seuNome){
                            console.clear();
                            console.log("\nOlá " + seuNome + "! Vamos começar?\n");
                            pergunta();
                        }else{rl.close();}
                        })

pergunta();

function pergunta(){
    rl.question("Digite um número entre 1 e 100: ", function(numero){
        numero = parseInt(numero); //A função transforma o parâmetro (no caso "numero") em uma string, portanto, ao comprar com ===, ele também compara o tipo
        numeroTentativas--; // então é necessário transformar "numero" em inteiro com ParseInt
        if(numero == numeroAleatorio){
            console.clear();
            console.log("\n\nParabéns, " + seuNome + "! Você acertou o número que é " + numero + "!\n\n");
            rl.close();
        }else if(numeroTentativas === 0) {
            console.clear();
            console.log("\n\nQue pena, " + seuNome + "! Suas chances acabaram e você não descobriu o número!\n\n");
            rl.close();
        }else if(numero > numeroAleatorio){
            console.clear();
            console.log("\n\nNumero errado, " + seuNome + "! Você ainda tem " + numeroTentativas + " tentativas! O número informado " + numero + " é maior que o sorteado.\n\n");
            pergunta();
        }else if (isNaN(numero)){
            console.clear();
            console.log("\n\nInforme apenas números, " + seuNome + "! Tentativas restantes: " + numeroTentativas + "!!!\n\n");
            pergunta();
        }else if(numero < numeroAleatorio){
            console.clear();
            console.log("\n\nNumero errado, " + seuNome + "! Você ainda tem " + numeroTentativas + " tentativas! O número informado " + numero + " é menor que o sorteado.\n\n");
            pergunta();
        }
    })
}

