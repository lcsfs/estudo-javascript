# Operadores

<p>
    Precisamos de operadores quando realizamos qualquer operação em uma linguagem de programação, e em Javascript temos operadores aritméticos, de atribuição, de comparação, lógicos, bit a bit (bitwise), unários e entre outros.
</p>

## Operadores aritméticos
``` js
1 + 1 // executa uma adição 
2 - 2 // executa uma subtração 
3 * 3 // executa uma multiplicação 
4 / 4 // executa uma divisão 
11 % 3 // operador mod, retorna o resto da divisão
3 ** 4 // operador exponencial, retorna o resultado de elevar o primeiro operando à potência do segundo operando.

x++ // o operador incrementa seu operando e retorna o valor antes ou depois do incremento, dependendo de onde o operador é colocado. 

Incremento de postfix - let x = 3;
                        const y = x++;
                        // x is 4; y is 3 

Incremento de prefixo - let x = 3;
                        const y = ++x;
                        // x is 4; y is 4

x-- // operador decremento, subtrai um de seu operando. O valor de retorno é análogo àquele do operador de incremento.
```

## Operadores de atribuição
``` q
= // atribui o valor do operando esquerdo ao operando direito.
+= // atribuição de soma (x += y == x = x + y)
-= // atribuição de subtração (x -= y == x = x - y)
*= // atribuição de multiplicação (x *= y == x = x * y)
/= // atribuição de divisão (x /= y == x = x / y)
%= // atribuição de resto (x %= y == x = x % y)
```

## Operadores de comparação

```js
> // maior que;
< // menor que;
>= // maior ou igual a;
<= // menor ou igual a;
== // igual a;
=== // igual a, tanto o valor quando o tipo;
!= // diferente de;

A comparação deste operador sempre irá retornar um valor boolean
```

## Operadores logicos

```js
&& // (E lógigo) - Retorna true caso ambos valores sejam true, caso contrario, retorna false.
|| // (OU logico) - Retorna true caso ambos os operandos sejam true, se ambos forem false, retorna false.
! // (NOT logico) - Retorna falso caso o único operando possa ser convertido para verdadeiro; senão, retorna verdadeiro.
```