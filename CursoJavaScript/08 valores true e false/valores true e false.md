# Valores Truthy e Falsy

- Valroes falsos sao valroes que nao sao exatamente falsos, mas se tornam falsos quando convertidos para um booleano.

- Existem 5 valores falsos em JavaScript:
```js
0
'' (string vazia)
undefined
null
NaN
```
- Todo o resto é verdadeiro

```js
console.log(Boolean(0)); // false
console.log(Boolean('')); // false
console.log(Boolean(undefined)); // false
console.log(Boolean('Jonas')); // true
console.log(Boolean({})); // true

const money = 0;
if (money) {
 console.log("Nao gaste tudo!");
} else {
 console.log('Voce deveria conseguir um emprego'); // Isso e executado porque 0 e false
}

// Tomar cuidado com o 0
let height;
if (height) {
 console.log('Altura é definida');
} else {
 console.log('Altura é UNDEFINED'); // Isso é executado porque a altura é undefined
}
```