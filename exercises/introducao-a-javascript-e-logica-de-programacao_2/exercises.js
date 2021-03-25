let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// 1 questão

for (let index = 0; index < numbers.length; index += 1) {
    let result = numbers[index]
    console.log(result);
}
console.log("")

// 2 Questão

let soma = 0;
for (i = 0; i < numbers.length; i += 1) {
 soma = soma + numbers[i]  
}
console.log(soma)
