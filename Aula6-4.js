//salario > 10000 = 2%
//salario 10000 e 8000 = 4%
//salario 8000 e 6000 = 6%;
//salario 6000 e 3000 = 10%
//salario < 3000m= 15%

const prompt = require("prompt-sync")();

let salario = Number(prompt("Informe o salario: "));
let salarioOriginal = salario;
const reaj2 = 2,reaj4 = 4, reaj6=6,reaj10=10,reaj15=15;
if(salario >= 10000){
    salario= salario + (salario/100*reaj2);
}else if(salario >=8000){
    salario= salario + (salario/100*reaj4);
}else if(salario >= 6000){
    salario= salario + (salario/100*reaj6);
}else if(salario >= 3000){
    salario= salario + (salario/100*reaj10);
}else{
    salario= salario + (salario/100*reaj15);
}

console.log("O funcionario recebia o valor "+salarioOriginal+" com o reajuste receberá "+salario);
