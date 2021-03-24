// exercicio de fixação Trybe

// 1- Programa
let a = 10;
let b = 2;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);

// 2 - Programa

let num1 = 10;
let num2 = 6;

if (num1 > num2) {
    console.log(`O valor ${num1} é maior que ${num2}`);
} else {
    console.log(`o valor ${num2} é maior que ${num1}`);
}

//3- Programa

let num1 = 5;
let num2 = 7;
let num3 = 2;

if (num1 > num2 && num1 > num3) {
  console.log(`O valor ${num1} é maior dentre os 3 números`);
} else if (num2 > num1 && num2 > num3) {
  console.log(`O valor ${num2} é maior dentre os 3 números`);
} else {
  console.log(`O valor ${num3} é maior dentre os 3 números`);
}