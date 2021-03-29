let names = {
  person1: 'João', 
  person2: 'Maria', 
  person3: 'Jorge',
}

for(let index in names) {
  console.log(`Olá ${names[index]}`);
}
console.log("");

let cars = {
  model: 'A3 Sedan',
  manufacturer: 'Audi',
  year: 2020
}

for (let key in cars) {
  console.log(`${key}: ${cars[key]}`);
}