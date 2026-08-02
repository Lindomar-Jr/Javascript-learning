//======================================================================
// WHILE
//======================================================================

/*
    O while executa enquanto uma condição for verdadeira.

    Sintaxe:

    while (condição) {
        código
    }

    Primeiro verifica a condição.
    Depois executa o código.
*/

console.log("===== WHILE =====");

let numero = 1;

while (numero <= 5) {

    console.log(numero);

    numero++;

}

/*
Saída:

1
2
3
4
5
*/


//----------------------------------------------------------------------
// Cuidado com loops infinitos
//----------------------------------------------------------------------

/*
while (true){

    console.log("Nunca termina");

}

Esse loop nunca acaba.

Sempre altere a variável de controle.
*/


//======================================================================
// DO...WHILE
//======================================================================

/*
O do...while funciona de forma diferente.

Primeiro executa.

Depois verifica a condição.

Ou seja:

Ele sempre executa pelo menos uma vez.
*/

console.log("\n===== DO WHILE =====");

let contador = 1;

do {

    console.log(contador);

    contador++;

} while (contador <= 5);


//----------------------------------------------------------------------
// Exemplo onde a condição já começa falsa
//----------------------------------------------------------------------

let valor = 10;

do {

    console.log("Executou uma vez");

} while (valor < 5);

/*
Mesmo sendo falso,
o bloco executou uma vez.
*/


//======================================================================
// FOR
//======================================================================

/*
O for é o loop mais utilizado.

Sintaxe:

for (inicialização; condição; incremento){

}
*/

console.log("\n===== FOR =====");

for (let i = 1; i <= 5; i++) {

    console.log(i);

}


/*
Componentes do for

let i = 1      -> variável inicial

i <= 5         -> condição

i++            -> incremento
*/


//----------------------------------------------------------------------
// Contagem regressiva
//----------------------------------------------------------------------

console.log("\n===== CONTAGEM REGRESSIVA =====");

for (let i = 5; i >= 1; i--) {

    console.log(i);

}


//----------------------------------------------------------------------
// Incrementando de dois em dois
//----------------------------------------------------------------------

console.log("\n===== DE 2 EM 2 =====");

for (let i = 0; i <= 10; i += 2) {

    console.log(i);

}


//======================================================================
// PERCORRENDO ARRAYS COM FOR
//======================================================================

const frutas = [
    "Maçã",
    "Banana",
    "Uva",
    "Laranja"
];

console.log("\n===== FOR COM ARRAY =====");

for (let i = 0; i < frutas.length; i++) {

    console.log(frutas[i]);

}

/*
.length retorna o tamanho do array.

Nesse exemplo:

frutas.length

retorna 4.
*/


//======================================================================
// FOR...OF
//======================================================================

/*
O for...of percorre valores.

Muito usado com:

- Arrays
- Strings
- Sets
- Maps

É uma forma mais moderna.
*/

console.log("\n===== FOR OF =====");

for (const fruta of frutas) {

    console.log(fruta);

}


/*
Observe que:

Não usamos índice.

Recebemos diretamente o valor.
*/


//----------------------------------------------------------------------
// Percorrendo uma String
//----------------------------------------------------------------------

const nome = "JavaScript";

console.log("\n===== FOR OF STRING =====");

for (const letra of nome) {

    console.log(letra);

}


//======================================================================
// FOR...IN
//======================================================================

/*
O for...in percorre índices (ou chaves).

Muito utilizado para objetos.
*/

console.log("\n===== FOR IN ARRAY =====");

for (const indice in frutas) {

    console.log(indice);

}

/*
Resultado:

0
1
2
3
*/


//----------------------------------------------------------------------
// Pegando índice e valor
//----------------------------------------------------------------------

console.log("\n===== ÍNDICE E VALOR =====");

for (const indice in frutas) {

    console.log(indice, frutas[indice]);

}


//----------------------------------------------------------------------
// Utilizando em Objetos
//----------------------------------------------------------------------

const pessoa = {

    nome: "Carlos",
    idade: 30,
    cidade: "São Paulo"

};

console.log("\n===== FOR IN OBJETO =====");

for (const chave in pessoa) {

    console.log(chave, ":", pessoa[chave]);

}


/*
Resultado

nome : Carlos

idade : 30

cidade : São Paulo
*/


//======================================================================
// BREAK
//======================================================================

/*
O break encerra imediatamente o loop.
*/

console.log("\n===== BREAK =====");

for (let i = 1; i <= 10; i++) {

    if (i === 6) {

        break;

    }

    console.log(i);

}

/*
Resultado

1
2
3
4
5
*/


//======================================================================
// CONTINUE
//======================================================================

/*
O continue pula apenas a iteração atual.

O loop continua normalmente.
*/

console.log("\n===== CONTINUE =====");

for (let i = 1; i <= 5; i++) {

    if (i === 3) {

        continue;

    }

    console.log(i);

}

/*
Resultado

1
2
4
5
*/


//======================================================================
// LOOPS ANINHADOS
//======================================================================

/*
Um loop pode ficar dentro de outro.

Muito utilizado para:

- Matrizes
- Tabelas
- Jogos
- Grades
*/

console.log("\n===== LOOPS ANINHADOS =====");

for (let linha = 1; linha <= 3; linha++) {

    console.log("Linha", linha);

    for (let coluna = 1; coluna <= 3; coluna++) {

        console.log("Coluna", coluna);

    }

}


//======================================================================
// TABUADA
//======================================================================

console.log("\n===== TABUADA DO 5 =====");

for (let i = 1; i <= 10; i++) {

    console.log(`5 x ${i} = ${5 * i}`);

}


//======================================================================
// EXEMPLO PRÁTICO
//======================================================================

const notas = [7, 9, 8, 6, 10];

let soma = 0;

for (const nota of notas) {

    soma += nota;

}

const media = soma / notas.length;

console.log("\n===== MÉDIA =====");

console.log("Média:", media);


//======================================================================
// QUANDO UTILIZAR CADA LOOP?
//======================================================================

/*

WHILE

✔ Quando você NÃO sabe exatamente
quantas vezes irá repetir.

Exemplo:
Ler dados até o usuário informar "sair".

--------------------------------------------------

DO...WHILE

✔ Quando precisa executar pelo menos uma vez.

Exemplo:
Menus.

--------------------------------------------------

FOR

✔ Quando sabe exatamente
quantas repetições existirão.

Exemplo:
Contar de 1 até 100.

--------------------------------------------------

FOR...OF

✔ Quando quer percorrer
os valores de um array.

É a opção preferida para arrays.

--------------------------------------------------

FOR...IN

✔ Quando precisa percorrer
as propriedades de um objeto.

Também pode percorrer índices de arrays,
mas normalmente utiliza-se for...of
para arrays.
*/


//======================================================================
// BOAS PRÁTICAS
//======================================================================

/*

✔ Dê nomes claros às variáveis.

Ruim:

i, j, k

Bom:

indice
contador
linha
coluna

--------------------------------------------------

✔ Evite loops infinitos.

Sempre atualize a variável de controle.

--------------------------------------------------

✔ Prefira for...of para arrays.

Código mais limpo e legível.

--------------------------------------------------

✔ Use break somente quando necessário.

--------------------------------------------------

✔ Use continue apenas quando realmente
fizer sentido.

Seu uso excessivo pode dificultar a leitura.

--------------------------------------------------

✔ Escolha o loop adequado para cada situação.

Não existe um loop "melhor".

Existe o mais apropriado para o problema.
*/


//======================================================================
// RESUMO
//======================================================================

/*

while
→ Executa enquanto a condição for verdadeira.

-------------------------------------

do...while
→ Executa primeiro.
Depois verifica a condição.

-------------------------------------

for
→ Melhor quando sabemos
a quantidade de repetições.

-------------------------------------

for...of
→ Percorre valores.

Ideal para arrays.

-------------------------------------

for...in
→ Percorre índices ou propriedades.

Ideal para objetos.

-------------------------------------

break
→ Interrompe o loop.

-------------------------------------

continue
→ Pula apenas a iteração atual.

-------------------------------------

Loops aninhados
→ Um loop dentro do outro.

Muito usados em matrizes, tabelas,
grades e algoritmos mais complexos.

*/