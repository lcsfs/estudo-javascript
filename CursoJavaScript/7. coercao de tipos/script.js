// type conversion
const inputYear = '1997';
console.log(Number(inputYear), inputYear); // 1997, '1997'
console.log(Number(inputYear) + 27); // 2024

console.log(Number('Lucas')); // NaN
console.log(typeof NaN); // number

console.log(String(27), 27); // '27', 27

// type coercion
console.log('I am ' + 27 + ' years old');
console.log('27' - '20' - 7); // as strings são convertidar para number, e subtrai a operação
console.log('27' * '2');


let n = '1' + 1;
n = n - 1;
console.log(n); // 10