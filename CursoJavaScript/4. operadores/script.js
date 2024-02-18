// Operador aritmético
const year = 2037;
const ageLucas = year - 1997;
const ageLary = year - 1999;

console.log(ageLucas, ageLary);

console.log(ageLucas * 2, ageLary / 10, 2 ** 3);
// 2 ** 3 significa = 2 * 2 * 2

const firstName = "Lucas";
const lastName = "Ferreira";

console.log(firstName + ' ' + lastName);

// Operador de atribuição
let x = 10 + 5;
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++;
x--;
x--;
x++;
console.log(x);

// Operador de comparação
console.log(ageLucas > ageLary );
console.log(ageLucas >= 20);

const isFullAge = ageLary >= 18;

console.log(now - 1991 > now - 2018);