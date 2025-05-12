"use strict"

function logger() {
  console.log(`Meu nome e Lucas`);
}
logger()

// function fruitProcessor(apples, oranges) {
//   console.log(apples, oranges);
//   const juice = `Suco com ${apples} macas e ${oranges} laranjas!`;
//   return juice;
// }

// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);

// const appleOrangeJuice = fruitProcessor(2, 4);
// console.log(appleOrangeJuice);


// Function declaration
function calcAge1(birthYear) {
  return 2025 - birthYear
}
const age1 = calcAge1(1997);
console.log(age1);

// Function expression
const calcAge2 = function(birthYear) {
  return 2025 - birthYear
}
const age2 = calcAge2(1997);
console.log(age1, age2);

// Arrow function

const calcAge3 = birthYear => 2025 - birthYear;
const age3 = calcAge3(1997);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2025 - birthYear;
  const retirement = 65 - age;
  // return retirement
  return `${firstName} retires in ${retirement} years`
}

console.log(yearsUntilRetirement(1997, `Lucas`));
// ------------------------

function cutFruitPieces(fruit) {
  return fruit * 4
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges)

  console.log(applePieces, orangePieces);
  const juice = `Suco com ${applePieces} pedaços de maca e ${orangePieces} pedaços de laranja!`;
  return juice;
}
console.log(fruitProcessor(2, 3));