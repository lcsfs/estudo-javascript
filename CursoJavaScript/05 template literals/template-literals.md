# String e templates literals

- Templates literais são um recurso que podemos criar strings sem a necessidade de concatenar os valores.


Exemplo:

``` js
// Modelo sem utilizar template string

const firstName = 'Lucas';
const favAnime = 'One Piece';

console.log('Me chamo ' + firstName + ' e meu anime favorito é: ' + favAnime + '.');
// Me chamo Lucas e meu anime favorito é: One Piece.
```

- Os templates literals devem estar entre crases ( ` ). Para inserir um valor de variável, basta defini-lo com um sinal de cifrão e chaves (${ })
```js
// Modelo utilizando template string

const firstName = 'Felipe';
const favAnime = 'Dragon Ball';

console.log(`Me chamo ${firstName} e meu anime favorito é: ${favAnime}.`);
// Me chamo Felipe e meu anime favorito é: Dragon Ball.
```