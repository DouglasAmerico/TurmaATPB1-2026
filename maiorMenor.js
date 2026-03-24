const prompt = require("prompt-sync")();

let valor1 = Number(prompt("Digite o primeiro valor: "));
let valor2 = Number(prompt("Digite o segundo valor: "));

if(valor1 > valor2){
    console.log("O maior valor é: "+valor1);
}else if(valor2 > valor1){
    console.log("O maior valor é: "+valor2);
}else{
    console.log("Os valores são iguais");
}




