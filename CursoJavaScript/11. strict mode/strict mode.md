# Strict mode

<p> O strict mode do JavaScript é um recurso importante para os desenvolvedores a evitar erros acidentais.
<p> Para ativá-lo, basta adicionar 'use strict' no inicio do arquivo, antes de qualquer outro codigo.

```js
'use strict'

// O modo estrito esta ativado para o script todo
```
<p> O strict mode, cria erros visiveis onde, o JavaScript falharia silenciosamente. Por exemplo:

```js
let hasDriversLicense = false;
const passTest = true;
if (passTest) hasDriverLicense = true; // Esta faltando o 's'
if (hasDriversLicense) console.log('Posso dirigir! 😃 ');
```
<p>Sem o strict mode, o codigo criaria silenciosamente uma nova variavel global "hasDriverLicense" (com erro de digitacao) e a condicao unca seria verdadeira.
<p>Com o strict mode, o JavaScript gera um erro, tornando o bug obvio.

<p>O strict mode tambem reserva certas palavras-chave para recursos futuros do JavaScript e impede seu uso como nome de variaveis:

```js
const interface = 'Audio'; // Erro em strict mode
const private = 534; // Erro em strict mode
```