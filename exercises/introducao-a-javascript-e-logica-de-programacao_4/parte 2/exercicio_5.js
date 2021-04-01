function maiorValor (maior){
  let valores = [2, 3, 2, 5, 8, 2, 3];
  let contador = {};
  for (let i = 0; i < valores.length; i += 1){
    if (contador[valores[i]]) {
      contador[valores[i]] += 1;
    } else {
      contador[valores[i]] = 1;
    }
  }
  for (let j in contador) {
    if (contador[j] >= 2) {
      maior = contador[j];
    }
  }
};
console.log(maiorValor(maior));

