const prompt = require("prompt-sync")();
let primeiroValor = Number(prompt("Informe o primeiro valor: "));
let quantidadeDeVezes = Number(prompt("Quantas vezes tem que somar: "));
let soma = 0;

for (let index = primeiroValor; index <= quantidadeDeVezes; index++) {
    soma= soma + index;
}

console.log("A soma foi: "+soma);
