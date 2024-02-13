## Variáveis são responsaveis por guardar dados na memória

### var
 - É uma variável que armazena seus dados globalmente, onde 
você pode colocar ela em qualquer lugar e ela aparece em
qualquer lugar, fora ou dentro de um escopo, ela pode ser 
alterada.

### let 
- É uma variável que armazena seus dados localmente, onde 
você só pode acessá-la dentro de seu próprio escopo, ela pode ser 
alterada

### const 
- É uma variável que armazena seus dados localmente, onde 
você só pode acessá-la dentro de seu próprio escopo, ela NÃO pode
ser alterada

## Sintaxe de nomes de variaveis
- Os nomes podem iniciar com $, __, ou letras, podem conter números mas não iniciar com eles.
- Não podemos utilizar palavras reservadas: https://www.w3schools.com/js/js_reserved.asp

``` javascript
// Incorreto
let 1nome
let function

// Correto
let $nome
let _idade
let possuiTrabalho
```