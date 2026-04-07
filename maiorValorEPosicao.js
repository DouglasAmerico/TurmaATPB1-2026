//Escreva um programa para ler 5 valores inteiros, escrever o maior deles 
// e apresentar a posição de ordem em qual ele foi digitado 
// (se ele foi digitado por primeiro ou por segundo ou...)
const prompt = require("prompt-sync")();

let n1,n2,n3,n4,n5,maior,posicao;

n1 = Number(prompt("Informe o valor: "));
maior= n1;
posicao=1;
n2 = Number(prompt("Informe o valor: "));
if(n2 > maior){
    maior=n2;
    posicao=2;
}
n3 = Number(prompt("Informe o valor: "));
if(n3 > maior){
    maior=n3;
    posicao=3;
}
n4 = Number(prompt("Informe o valor: "));
if(n4 > maior){
    maior=n4;
    posicao=4;
}
n5 = Number(prompt("Informe o valor: "));
if(n5 > maior){
    maior=n5;
    posicao=5;
}
console.log("O maior valor foi "+maior+" e foi informado por "+posicao+"°");
