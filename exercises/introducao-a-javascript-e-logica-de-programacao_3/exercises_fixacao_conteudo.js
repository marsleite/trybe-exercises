// Utilizando o array abaixo, percorra-o somando todos os valores. 
//Caso o valor final seja maior que 15, imprima-o. 
//Caso seja igual ou menor que 15, imprima a mensagem: "valor menor que 16":

/* A resolução do problema
1. Interpretação
2. Criação do algoritmo
3.Codificação do algoritmo 
*/

let fruits = [3, 4, 10, 1, 12];
let sum = 0;

for(index = 0; index < fruits.length; index += 1) {
    sum = sum + fruits[index];
}

if (sum > 15) {
  console.log(`O valor total da array é ${sum}`)
} else {
  console.log(`O valor é menor que 16`)
}