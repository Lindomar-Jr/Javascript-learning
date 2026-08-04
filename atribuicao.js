/*

O que são operadores de atribuição?

Os operadores de atribuição são utilizados para armazenar ou atualizar
valores dentro de uma variável.

O operador mais conhecido é o "=" (atribuição simples), mas existem
diversos operadores que simplificam operações matemáticas e tornam o
código mais limpo e legível.

Exemplo sem operador de atribuição composto:

numero = numero + 5;

Exemplo utilizando operador de atribuição composto:

numero += 5;

O resultado é exatamente o mesmo.
A diferença é que a segunda forma é mais curta e muito utilizada
no desenvolvimento profissional.
*/



//=========================================================
// 1. ATRIBUIÇÃO SIMPLES (=)
//=========================================================

/*
O operador "=" atribui um valor para uma variável.

Sintaxe:

variavel = valor;
*/

let nome = "Lindomar";
let idade = 24;

console.log(nome);
console.log(idade);



//=========================================================
// 2. ADIÇÃO E ATRIBUIÇÃO (+=)
//=========================================================

/*
Soma um valor à variável.

Sintaxe:

variavel += valor;

É equivalente a:

variavel = variavel + valor;
*/

let pontos = 100;

pontos += 50;

console.log(pontos); //150



// Outro exemplo

let dinheiro = 500;

dinheiro += 250;

console.log(dinheiro); //750



//=========================================================
// 3. SUBTRAÇÃO E ATRIBUIÇÃO (-=)
//=========================================================

/*
Subtrai um valor da variável.

Sintaxe:

variavel -= valor;

Equivale a:

variavel = variavel - valor;
*/

let vidas = 5;

vidas -= 1;

console.log(vidas); //4



let saldo = 1000;

saldo -= 300;

console.log(saldo); //700



//=========================================================
// 4. MULTIPLICAÇÃO E ATRIBUIÇÃO (*=)
//=========================================================

/*
Multiplica o valor atual da variável.

Sintaxe:

variavel *= valor;

Equivale a:

variavel = variavel * valor;
*/

let preco = 100;

preco *= 2;

console.log(preco); //200



let quantidade = 8;

quantidade *= 3;

console.log(quantidade); //24



//=========================================================
// 5. DIVISÃO E ATRIBUIÇÃO (/=)
//=========================================================

/*
Divide o valor da variável.

Sintaxe:

variavel /= valor;

Equivale a:

variavel = variavel / valor;
*/

let nota = 100;

nota /= 2;

console.log(nota); //50



let litros = 12;

litros /= 4;

console.log(litros); //3



//=========================================================
// 6. RESTO DA DIVISÃO E ATRIBUIÇÃO (%=)
//=========================================================

/*
Calcula o resto da divisão.

Sintaxe:

variavel %= valor;

Equivale a:

variavel = variavel % valor;
*/

let numero = 10;

numero %= 3;

console.log(numero); //1



let moedas = 27;

moedas %= 5;

console.log(moedas); //2



//=========================================================
// 7. EXPONENCIAÇÃO E ATRIBUIÇÃO (**=)
//=========================================================

/*
Eleva o valor da variável a uma potência.

Sintaxe:

variavel **= valor;

Equivale a:

variavel = variavel ** valor;
*/

let potencia = 4;

potencia **= 2;

console.log(potencia); //16



let base = 3;

base **= 3;

console.log(base); //27



//=========================================================
// COMPARAÇÃO ENTRE A FORMA TRADICIONAL E A FORMA REDUZIDA
//=========================================================

let valor = 10;

// Forma tradicional
valor = valor + 5;

console.log(valor); //15



valor = 10;

// Forma reduzida
valor += 5;

console.log(valor); //15



//=========================================================
// EXEMPLO PRÁTICO - CARRINHO DE COMPRAS
//=========================================================

/*
Imagine um carrinho de compras.

Cada produto adicionado aumenta o valor total.
*/

let totalCompra = 0;

totalCompra += 100; // Produto 1
totalCompra += 80;  // Produto 2
totalCompra += 25;  // Produto 3

console.log(totalCompra); //205



//=========================================================
// EXEMPLO PRÁTICO - JOGO
//=========================================================

/*
Jogador ganha pontos ao derrotar inimigos.
*/

let score = 0;

score += 100;
score += 250;
score += 400;

console.log(score); //750



/*
Jogador recebe dano.
*/

let vida = 100;

vida -= 15;
vida -= 20;

console.log(vida); //65



//=========================================================
// EXEMPLO PRÁTICO - DESCONTO
//=========================================================

let valorProduto = 200;

/*
Aplicando desconto de 10%.
*/

valorProduto *= 0.90;

console.log(valorProduto); //180



//=========================================================
// EXEMPLO PRÁTICO - MÉDIA
//=========================================================

let somaNotas = 30;

somaNotas /= 3;

console.log(somaNotas); //10



//=========================================================
// EXEMPLO COM STRINGS
//=========================================================

/*
O operador += também concatena textos.
*/

let mensagem = "Olá";

mensagem += " ";
mensagem += "Mundo!";

console.log(mensagem);

// Resultado:
// Olá Mundo!



//=========================================================
// CUIDADO COM TIPOS DIFERENTES
//=========================================================

let valor1 = 10;

valor1 += "5";

console.log(valor1);
console.log(typeof valor1);

/*
Resultado:

"105"

string

Como existe uma string na operação,
o JavaScript realiza concatenação.
*/



//=========================================================
// RESUMO DOS OPERADORES
//=========================================================

/*

=      Atribuição simples

+=     Soma e atribui

-=     Subtrai e atribui

*=     Multiplica e atribui

/=     Divide e atribui

%=     Resto da divisão e atribui

**=    Potência e atribui

*/



//=========================================================
// QUANDO UTILIZAR?
//=========================================================

/*

Use "=" quando estiver inicializando
ou substituindo completamente um valor.

Use "+=" para acumular valores.

Use "-=" para diminuir valores.

Use "*=" para reajustes, aumentos percentuais
ou multiplicações.

Use "/=" para calcular médias ou dividir valores.

Use "%=" quando precisar trabalhar com
resto de divisões (par ou ímpar, ciclos, etc.).

Use "**=" quando precisar calcular potências.

Esses operadores são extremamente comuns em
aplicações web, jogos, APIs, automações,
Node.js e qualquer projeto JavaScript moderno.

Quanto mais você se acostumar com eles,
mais limpo e profissional ficará o seu código.
*/