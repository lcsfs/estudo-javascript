# Coerção de tipos

- Coerção de tipos (type coercion) é o processo de conversão de um valor de um tipo, para o outro: Number para String, String para Number, Booleano para Number.

- O Javascript lida com tipos de duas maneiras: conversion (explicit) e coercion (automatic)

```js
// Type Conversion (explicit)
const inputYear = '1997';
console.log(Number(inputYear) + 18) // 2015

// Exemplo de conversao
console.log(Number('Lucas')); // NaN
console.log(String(27)); // "27"

// Type Coercion (automatic)
console.log('I am ' + 23 + ' years old'); // concatenacao de String
// O operador (+) aciona a coercao para string

console.log('23' - '10' - 3); // 10
console.log('23' * '2'); // 46
console.log('23' > '18'); // true
// Outros operadores aciona a coercao para number
```
- O operador (+) converte numeros para string quando usado com uma string
- Os operadores (-, *, /, <, >) convertem string para numeros