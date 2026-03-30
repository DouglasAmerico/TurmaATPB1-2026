const prompt = require("prompt-sync")();

let n1 = Number(prompt("Informe o primeiro valor: "));
let n2 = Number(prompt("Informa o segundo valor: "));

if(n1 > n2){
    console.log("O valor "+n1+" é maior que o valor "+n2);
}else if(n2 > n1){
    console.log("O valor "+n2+" é maior que o valor "+n1);
}else{
    console.log("O valores são iguais");
    
}