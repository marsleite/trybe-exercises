let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// 1 questão

for (let index = 0; index < numbers.length; index += 1) {
    let result = numbers[index];
    console.log(result);
}
console.log("");

// 2 Questão

let soma = 0;
for (i = 0; i < numbers.length; i += 1) {
 soma = soma + numbers[i];  
}
console.log(soma);
console.log("");
// 3 Questão

let soma3 = 0;
for (let i = 0; i < numbers.length; i += 1) {
    soma3 = soma3 + numbers[i];
}
let media = soma3 / numbers.length;
console.log(media);
console.log("");

// 4 Questao

if(media > 20){
    console.log('Valor maior que 20');
} else {
    console.log('Valor menor que 20');
}
console.log("");

// 5 Questão
let maior = numbers[0];

for(i = 0; i < numbers.length; i += 1) {
    if(numbers[i] > maior) {
        maior = numbers[i]
    }
}

// Questão 6
let impares = []
for(i in numbers){
    if (numbers[i] % 2 > 0){
        impares.push(numbers[i])
    }else if (impares === 0 ){
        console.log('nenhum valor impar encontrado')
    }
}
console.log(`Existe ${impares.length} valor impar no array`);