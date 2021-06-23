//Questão 1

let numerosPrimos = [3, 5, 7];

let numeros = [2, 6, ...numerosPrimos];

console.log(numeros);

//Questão 2

function maiorNumero(num1, num2, num3){
    return Math.min(num1,num2,num3);
}

console.log(maiorNumero(10, 20, 30));