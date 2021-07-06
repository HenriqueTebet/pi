// Questão 1

let pares = [2,4,6,8,10];

let impares = pares.map(el=>el+1);

console.log(impares);

// Questão 2

let nomes = ['Jose','Maria','Joao','Maria'];

let marias = nomes.filter(nome=>nome==='Maria');

console.log(marias)

// Questão 3

let nums = [1,2,3,4,5];

let numsformat = nums.reduce((todos,parte)=>todos+'-'+parte);

console.log(numsformat);

// Questão 4

let animais = ['zebra','cabra','bode','gato','cachorro'];

animais.forEach(el=>console.log('O animal é ' + el));