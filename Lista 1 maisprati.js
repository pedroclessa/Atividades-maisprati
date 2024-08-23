const prompt = require("prompt-sync")();

// 1. Escreva um programa que recebe um número inteiro e verifica se ele é par ou ímpar
// utilizando uma estrutura de controle if.

// const numero = Number(prompt("Insira seu numero:"))

// if (numero % 2 == 0){
//     console.log("Seu numero é par")
// }
//     else{
//         console.log("Seu numero é impar")
//     }


// 2. Crie um programa que classifica a idade de uma pessoa em categorias (criança,
// adolescente, adulto, idoso) com base no valor fornecido, utilizando uma estrutura de
// controle if-else.

// const idade = Number(prompt("Insira sua idade: "))

// if(idade >= 1 && idade <= 10){
//     console.log("Você é uma Criança");
//  }else if(idade >= 11 && idade <= 17){
//     console.log("Você é um Adolescente");
//  }else if(idade >= 18 && idade <= 59){
//     console.log("Você é um Adulto");
//  }else if(idade >= 60){
//     console.log("Você é um Idoso")
//  }
//  else{
//     console.log("Você inseriu um numero negativo ou zero")
//  }
// 3. Implemente um programa que recebe uma nota de 0 a 10 e classifica como
// "Aprovado", "Recuperação", ou "Reprovado" utilizando if-else if.

// const nota = Number(prompt("Insira a nota do aluno: "))

// if(nota >= 0 && nota <= 3){
//         console.log("Você está Reprovado :C");
//      }else if(nota >= 4 && nota <= 6){
//         console.log("Você está de Recuperação :/");
//      }else if(nota >= 7 && nota <= 10){
//         console.log("Você está Aprovado parabens!!! :D");
//      }
//      else{
//         console.log("Você inseriu um numero negativo.")
//      }
// 4. Crie um menu interativo no console que oferece ao usuário a escolha de três opções.
// Utilize switch-case para implementar a lógica de cada opção selecionada.

// const tipoquarto = Number(prompt("Bem vindo ao Hotel do Jax!! \nEscolha seu tipo de quarto(seus preços estarão logo ao lado)\n1.Solteiro(R$110 a diaria) \n2.Casal(R$150 a diaria) \n3.Deluxe(R$250 a diaria)\n"));

// switch(tipoquarto) {
//     case 1:
//         console.log("Você escolheu o quarto de Solteiro!");
//         break;
//     case 2:
//         console.log("Você escolheu o quarto de Casal!");
//         break;
//     case 3:
//         console.log("Você escolheu o quarto Deluxe!");
//         break;
//     default:
//         console.log("Opção inválida. Por favor, escolha 1, 2 ou 3.");
// }
// 5. Escreva um programa que calcula o Índice de Massa Corporal (IMC) de uma pessoa e
// determina a categoria de peso (baixo peso, peso normal, sobrepeso, obesidade)
// utilizando if-else.

// let peso = (Number(prompt("Insira seu peso em KILOS: ")));
// let altura = (Number(prompt("Insira sua altura em METROS: ")));
// let altura2 = altura ** 2;
// let IMC = peso / altura2;

//    if(IMC < 18.5){
//       console.log("Você está abaixo do peso");
//    }else if(IMC >= 18.5 && IMC <= 24.9){
//       console.log("Você está com o peso normal");
//    }else if(IMC >= 25 && IMC <= 29.9){
//       console.log("Você está com sobrepeso");
//    }else if(IMC > 30){
//       console.log("Você está com grau de obesidade");
//    }


// 6. Ler três valores para os lados de um triângulo: A, B e C. Verificar se os lados fornecidos
// formam realmente um triângulo. Caso forme, deve ser indicado o tipo de triângulo:
// Isósceles, escaleno ou eqüilátero.
// Para verificar se os lados fornecidos formam triângulo: A < B + C e B < A + C e C < A + B
// Triângulo isósceles: possui dois lados iguais (A=B ou A=C ou B = C)
// Triângulo escaleno: possui todos os lados diferentes (A<>B e B <> C)
// Triângulo eqüilátero: possui todos os lados iguais (A=B e B=C)

// function verificartriangulo(A, B, C){
//     if(A == B && B == C){
//         console.log("É um triangulo equilátero");
//     }else if(A == B || A == C || B == C){
//     console.log("É um triangulo isóceles");

//     }else{
//     console.log("É um trinagulo escaleno");
//     }
// }
// let A = Number(prompt("Insira o lado A: "))
// let B = Number(prompt("Insira o lado B: "))
// let C =  Number(prompt("Insira o lado C: "))

// if (A < B + C && B < A + C && C < A + B){
//     verificartriangulo(A, B, C)
// }

// 7. As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se
// forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs
// compradas, calcule e escreva o valor total da compra.

// const maçãs = Number(prompt("Quantas maçãs você deseja?"))
// let preço = null

// if(maçãs > 12){
//     preço = 0.25
// }else{
//     preço = 0.30
// }

// function comprarmaçâs(preço, maças){
//     let soma = null
//     soma = maças * preço

//     console.log(`O total da compra deu R$${soma}`)
// }
// comprarmaçâs(preço, maçãs)

// 8. Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais)
// e escreve-los em ordem crescente.

// let numero1 = Number(prompt("Insira um numero: "));
// let numero2 = Number(prompt("Insira outro numero: "));

// if (numero1 < numero2) {
//     console.log(numero1, numero2);
// } else {
//     console.log(numero2, numero1);
// }

// 9. Implemente um programa que exibe uma contagem regressiva de 10 até 1 no console
// utilizando um loop for.

// for (i = 10; i > 0; i--){
//     console.log(i)

// }

// 10. Escreva um algoritmo para ler um número inteiro e escrevê-lo na tela 10 vezes.

// let numero = Number(prompt("Insira um numero: "))

// for(i = 0; i < 10; i++){
//     console.log(numero)
// }

// 11. Escreva um programa que solicita ao usuário 5 números e calcula a soma total
// utilizando um loop for.

// let soma = 0

// for(i = 0; i < 5; i++){
//     let numero = Number(prompt(`Insira um numero para somar com ${soma} `))
//     soma = numero + soma
//     console.log(`Sua soma deu ${soma}`)
// }

// 12. Crie um programa que exibe a tabuada de um número fornecido pelo usuário (de 1 a
// 10) utilizando um loop for.

// let numero = Number(prompt("Insira um numero para que seja feita a sua tabuada: "))

// for(i = 0; i <= 10; i++){
//     console.log(`${numero} x ${i} = ${numero * i}`)
// }

// 13. Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer
// a média aritmética desses números.

// let numero = parseFloat(prompt("Insira numeros decimais para realizar sua média aritimética, quando estiver satisfeito insira 0\n Insira seu numero: "))
// let count = 0
// let soma = 0
// let média = 0

//     while(numero > 0){
//         count ++
//         soma = soma + numero
//         numero = parseFloat(prompt("Insira numeros decimais para realizar sua média aritimética, quando estiver satisfeito insira 0\n Insira seu numero: "))

//     }

//         if (numero === 0){
//             média = soma/count
//             console.log(`A média aritimética de todos os numeros inseridos foi de ${média}`)
//         }

// 14. Crie um programa que calcula o fatorial de um número fornecido pelo usuário
// utilizando um loop for ou while.

// let numero = Number(prompt("Insira um numero para que seu fatorial seja calculado: "))
// let multiplicador = 1
// let show = null

// for (i = 1; i <= numero; i++ ){
//    show = multiplicador * i
//    console.log(show)
//    multiplicador = show
// }



// 15. Escreva um programa que gera e imprime os primeiros 10 números da sequência de
// Fibonacci utilizando um loop for.

// let soma = 0;
// let numero = 1;
// let soma2 = 0;

// for (i = 0; i < 10; i++) {
//     console.log(soma);
//     soma2 = soma + numero; 
//     soma = numero; 
//     numero = soma2; 
// }