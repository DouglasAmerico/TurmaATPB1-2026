const prompt = require("prompt-sync")();

let quantasVezesExecutar = Number(prompt("Informe a quantidade de vezes: "));
let stringVar="";

for (let index = 0; index < quantasVezesExecutar; index++) {
    if(index == (quantasVezesExecutar-1)){
        stringVar = stringVar + index;
    }else{
        stringVar = stringVar + index +",";
    }
}

console.log(stringVar);
