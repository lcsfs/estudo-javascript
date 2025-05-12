"use strict"

const friend1 = 'Lucas';
const friend2 = 'Julia';
const friend3 = 'Ariane';

const friends = ['Lucas', 'Julia', 'Ariane']
console.log(friends);

// Syntaxe alternativa
// const years = new Array(1991, 1984, 2008, 2020);
// console.log(years);

console.log(friends[0]); // 'Lucas'
console.log(friends[2]); // 'Ariane'

console.log(friends.length);
console.log(friends[friends.length] - 1);

friends[2] = 'Raissa';
console.log(friends);

const firstName = 'Lucas';
const lucas = [firstName, 'Ferreira', 2025 - 1997, 'Developer Web', friends];
console.log(lucas);
console.log(lucas[lucas.length - 1]);

// Exercicio do video

const calcAge = function (birthYear) {
  return 2025 - birthYear;
}
const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
console.log(ages);

// basic arrays operations

const nameOfFriends = ["Raissa", "Julia", "Ariane"];
// adiciona elemento no fim da array
nameOfFriends.push('Ana');
console.log(nameOfFriends);
// adiciona no inicio da array
nameOfFriends.unshift('Thiago');
console.log(nameOfFriends);
// tanto o push quanto o unshift retornam um novo valor na array
const newLenght = nameOfFriends.push('Lucas');
console.log(newLenght);

// remove o ultimo elemento
const popped = nameOfFriends.pop();
console.log(nameOfFriends);
console.log(popped);
// remove o primeiro elemento
const shifted = nameOfFriends.shift();
console.log(nameOfFriends);
console.log(shifted);

 // procurando elementos
 console.log(nameOfFriends.indexOf('Ariane')); // 2
 console.log(nameOfFriends.indexOf('Leandro')); // -1 (nao encontrou)
// método ES6 - retorna boolen
console.log(nameOfFriends.includes('Ariane')); // true
console.log(nameOfFriends.includes('Leandro')); // false
// o método includes é util para condicionais