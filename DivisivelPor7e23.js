//Faça um algoritmo para verificar se um número é divisível por 7 ou por 23.
const prompt = require("prompt-sync")();

let numero = Number(prompt("Informe o numero: "));

if(numero%7 == 0 || numero%23 == 0){ 
    console.log("O numero "+numero+" é divisivel por 7 ou por 23");
}else{
    console.log("O numero "+numero+" não é divisivel por 7 e por 23");
}