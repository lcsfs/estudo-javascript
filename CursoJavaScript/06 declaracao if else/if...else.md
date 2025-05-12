# Instruçoes condicionais

- Podemos usar if se quisermos executar um bloco de código somente se a condição for verdadeira.

```js 
let num = 1;
if (num === 1) {
  console.log('num é igual a 1')
}
```
- Podemos usar a instrução if...else se quisermos executar um bloco de código se a condição for verdadeira, ou caso a condição seja falsa, executar outro bloco de código.

```js
let num = 0;
if (num === 1) {
  console.log('num é igual a 1');
} else {
  console.log(`num não é igual a 1, o valor de num é ${num}`)
}
```