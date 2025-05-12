const age = 27;
age >= 18 ? console.log('Eu posso beber vinho') : console.log('Nao posso beber vinho');

const drink = age >= 18 ? 'vinho' : 'agua';
console.log(drink);

let drink2;
if (age >= 18) {
  drink2 = 'vinho';
} else {
  drink2 = 'agua'
}
console.log(drink2);

console.log(`Eu gosto de beber ${age >= 18 ? 'vinho' : 'agua'}`);