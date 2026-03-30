const prompt = require("prompt-sync")();

let a,b,c,d,e, menorValor;

a = Number(prompt("Informe o valor: "));
menorValor = a;
b = Number(prompt("Informe o valor: "));
if(b < menorValor) menorValor= b;
c = Number(prompt("Informe o valor: "));
if(c < menorValor) menorValor= c;
d = Number(prompt("Informe o valor: "));
if(d < menorValor) menorValor= d;
e = Number(prompt("Informe o valor: "));
if(e < menorValor) menorValor= e;

console.log("O menor valor é "+menorValor);
