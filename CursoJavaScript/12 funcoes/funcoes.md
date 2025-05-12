# Funções

<p> Funcoes sao blocos de construcao fundamentais em JavaScript, sao pedacos de codigo reutilizaveis que podem ser executados sempre que necesarrio.

### Function Declaration
- Para declarar uma funcao, voce deve usar a palavra-chave 'function' e especificar um nome para ela. Por exemplo

```js
function dados(nome) {
  return `Meu nome e ${nome}`
}

const lucas = dados(`Lucas`);
console.log(dados) // Meu nome e Lucas
```
- Aqui, declaramos uma funcao chamada 'dados', usamos a palavra-chave 'function' seguida do nome da funcao: 'dados'.

### Function Expression
- Aqui, voce cria uma expressao de funcao e a atribui em uma variavel que pode ser chamada.

```js
const dados = function(nome) {
  return `Meu nome e ${nome}`
}

const lucas = dados(`Lucas`)
console.log(dados)
```
- Como voce pode ver, aqui temos a palavra-chave 'function' sem um nome para ela. Isso a torna uma 'expression', que voce deve atribuir a uma variavel.

### Arrow Functions

- A arrow function foram introduzidas no ES6, como uma forma mais curta da functions expression, muito util para funcoes simples de uma linha.

```js
const primeiroNome = nome => `Meu nome e ${nome}`;
console.log(primeiroNome(`Lucas`)); // Meu nome e Lucas
```
- Não é necessario o uso de 'return', com uma unica linha.
- Para vários parâmetros, são necessários parênteses: (param1, param2) => expressão.
- Para várias linhas de código, são necessarias chaves e o uso de 'return'.