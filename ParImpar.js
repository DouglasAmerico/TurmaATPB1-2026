//Faça um algoritmo para verificar se um número é par ou ímpar (Uso do Operador % para coletar o Resto)
const prompt = require("prompt-sync")();

let numero = Number(prompt("Informe o numero: "));

if(numero%2 == 0){
    console.log("O numero "+numero+" é par");
}else{
    console.log("O numero "+numero+" é impar");
}