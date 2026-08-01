/*
=========================================================
GUIA DE ESTUDOS JAVASCRIPT
Tema: Operadores
=========================================================

Neste arquivo você aprenderá:

1. Operadores Aritméticos
2. Operadores de Atribuição
3. Precedência de Operadores
4. Operadores Relacionais (Comparação)
5. Operadores Lógicos

Dica:
Execute este arquivo no navegador (Console)
ou utilizando o Node.js.

=========================================================
*/


//=========================================================
// 1. OPERADORES ARITMÉTICOS
//=========================================================

/*
Os operadores aritméticos realizam cálculos matemáticos.

+  Soma
-  Subtração
*  Multiplicação
/  Divisão
%  Resto da divisão (Módulo)
** Potenciação
*/

let numero1 = 20;
let numero2 = 6;

console.log("========== OPERADORES ARITMÉTICOS ==========");

console.log("Soma:", numero1 + numero2);             //26

console.log("Subtração:", numero1 - numero2);        //14

console.log("Multiplicação:", numero1 * numero2);    //120

console.log("Divisão:", numero1 / numero2);          //3.333...

console.log("Resto da divisão:", numero1 % numero2); //2

console.log("Potência:", 2 ** 4);                    //16


/*
Quando usar o operador % (módulo)?

É muito utilizado para descobrir:

- Se um número é par
- Se um número é ímpar
- Ciclos
- Paginação
- Alternância de valores
*/

let numero = 8;

console.log(numero % 2); //0

// Se o resto da divisão por 2 for 0,
// o número é PAR.


//=========================================================
// INCREMENTO E DECREMENTO
//=========================================================

/*
++ Incrementa 1 unidade

-- Decrementa 1 unidade
*/

let contador = 10;

contador++;

console.log(contador); //11

contador--;

console.log(contador); //10


/*
Pré-incremento

Primeiro soma
Depois retorna o valor
*/

let a = 5;

console.log(++a); //6


/*
Pós-incremento

Primeiro retorna
Depois soma
*/

let b = 5;

console.log(b++); //5

console.log(b); //6



//=========================================================
// 2. OPERADORES DE ATRIBUIÇÃO
//=========================================================

/*
Além do operador "=", existem formas reduzidas.

+=
-=
*=
/=
%=
**=
*/

console.log("========== ATRIBUIÇÃO ==========");

let saldo = 1000;

saldo += 500;
// saldo = saldo + 500

console.log(saldo);

saldo -= 200;
// saldo = saldo - 200

console.log(saldo);

saldo *= 2;

console.log(saldo);

saldo /= 4;

console.log(saldo);

saldo %= 3;

console.log(saldo);


//=========================================================
// 3. PRECEDÊNCIA DOS OPERADORES
//=========================================================

/*
Assim como na matemática,
JavaScript possui uma ordem para executar operações.

Ordem simplificada:

1° ()
2° **
3° * / %
4° + -
*/

console.log("========== PRECEDÊNCIA ==========");

console.log(10 + 5 * 2);

// Resultado:
// 20

/*
Primeiro:

5 * 2 = 10

Depois:

10 + 10 = 20
*/


console.log((10 + 5) * 2);

// Resultado:
//30

/*
Agora os parênteses têm prioridade.

10 + 5 = 15

15 * 2 = 30
*/


console.log(100 / 5 + 10 * 2);

/*
Primeiro:

100 / 5 =20

10 * 2 =20

Depois:

20 +20 =40
*/


//=========================================================
// 4. OPERADORES RELACIONAIS
//=========================================================

/*
Os operadores relacionais retornam:

true
ou
false
*/

console.log("========== OPERADORES RELACIONAIS ==========");

let idade = 20;

console.log(idade > 18);
//true

console.log(idade < 18);
//false

console.log(idade >= 20);
//true

console.log(idade <= 15);
//false


/*
Igualdade
*/

console.log(10 == "10");

/*
Resultado:

true

O operador == compara apenas o valor.

Ele ignora o tipo.

Evite utilizar este operador em projetos reais.
*/


console.log(10 === "10");

/*
Resultado:

false

=== compara:

Valor

E

Tipo

É o operador recomendado.
*/


console.log(10 != "10");

/*
true ou false?

Resultado:

false

Porque ele compara apenas o valor.
*/


console.log(10 !== "10");

/*
Resultado:

true

Além do valor,
também compara o tipo.
*/


//=========================================================
// COMPARAÇÃO ENTRE STRINGS
//=========================================================

/*
Strings também podem ser comparadas.

A comparação ocorre pela tabela Unicode.
*/

console.log("Banana" == "Banana"); //true

console.log("Banana" == "banana"); //false



//=========================================================
// 5. OPERADORES LÓGICOS
//=========================================================

/*
&&  E (AND)

||  OU (OR)

!   NÃO (NOT)
*/

console.log("========== OPERADORES LÓGICOS ==========");

let possuiCarteira = true;

let maiorDeIdade = true;

console.log(possuiCarteira && maiorDeIdade);

/*
true

As duas condições precisam ser verdadeiras.
*/


let temDinheiro = false;

let temCartao = true;

console.log(temDinheiro || temCartao);

/*
true

Basta uma condição ser verdadeira.
*/


let usuarioLogado = false;

console.log(!usuarioLogado);

/*
Resultado:

true

O operador ! inverte o valor.
*/


//=========================================================
// EXEMPLO PRÁTICO
//=========================================================

let idadeUsuario = 25;

let possuiCNH = true;

let podeDirigir = idadeUsuario >= 18 && possuiCNH;

console.log(podeDirigir);

/*
true

Explicação:

25 >=18

true

true && true

Resultado:

true
*/


//=========================================================
// EXEMPLO COM OR
//=========================================================

let descontoClienteVip = false;

let cupomValido = true;

let aplicarDesconto = descontoClienteVip || cupomValido;

console.log(aplicarDesconto);

/*
Como existe pelo menos uma condição verdadeira,
o resultado será true.
*/


//=========================================================
// EXEMPLO COM NOT
//=========================================================

let sistemaBloqueado = false;

if (!sistemaBloqueado) {
    console.log("Sistema liberado.");
}

/*
A leitura fica:

SE o sistema NÃO estiver bloqueado...
*/


//=========================================================
// COMBINANDO OPERADORES
//=========================================================

let nota = 8;

let frequencia = 90;

let aprovado = nota >= 7 && frequencia >= 75;

console.log(aprovado);

/*
nota >=7

true

frequencia >=75

true

true && true

Resultado:

true
*/


//=========================================================
// RESUMO
//=========================================================

/*

ARITMÉTICOS

+   Soma

-   Subtração

*   Multiplicação

/   Divisão

%   Resto

**  Potência

++  Incremento

--  Decremento


-------------------------------

RELACIONAIS

>

<

>=

<=

==

===

!=

!==


-------------------------------

LÓGICOS

&&

||

!


-------------------------------

ORDEM DE PRECEDÊNCIA

()

**

* / %

+ -

*/
