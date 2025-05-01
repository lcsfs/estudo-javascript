// false value: 0, '', undefined, null, NaN

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Lucas'));
console.log(Boolean({}));
console.log(Boolean(''));

const money = 0; // aqui tem um valor e é 0, e 0 é um valor falso
if (money) {
  console.log("don't spend it all");
} else {
  console.log('you should get a job');
}

let height;  // esta variavel nao está definida, no caso irá executar 'Height is UNDEFINED'
if (height) {
  console.log('YAY! Height is defined');
} else {
  console.log('Height is UNDEFINED');
}