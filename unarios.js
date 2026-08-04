/*

O que são operadores unários?

Operadores unários são aqueles que atuam sobre apenas um único operando
(uma variável ou valor).

Enquanto operadores como "+" ou "*" trabalham com dois valores,
os operadores unários precisam de apenas um.

Exemplos:

contador++;
contador--;
!ativo;
typeof nome;

Esses operadores são muito utilizados em estruturas de decisão,
loops, validações e manipulação de variáveis.

Neste guia veremos os principais operadores unários do JavaScript.
*/



//=========================================================
// 1. OPERADOR DE INCREMENTO (++)
//=========================================================

/*
Incrementa (adiciona) 1 ao valor da variável.

Sintaxe:

variavel++;

ou

++variavel;
*/

let contador = 10;

contador++;

console.log(contador); //11



contador++;

console.log(contador); //12



//=========================================================
// PRÉ-INCREMENTO (++variavel)
//=========================================================

/*
Primeiro incrementa.
Depois utiliza o valor.
*/

let numero = 5;

console.log(++numero); //6

console.log(numero); //6



//=========================================================
// PÓS-INCREMENTO (variavel++)
//=========================================================

/*
Primeiro utiliza o valor.
Depois incrementa.
*/

let valor = 5;

console.log(valor++); //5

console.log(valor); //6



//=========================================================
// 2. OPERADOR DE DECREMENTO (--)
//=========================================================

/*
Remove 1 do valor da variável.

Sintaxe:

variavel--;

ou

--variavel;
*/

let vidas = 5;

vidas--;

console.log(vidas); //4



vidas--;

console.log(vidas); //3



//=========================================================
// PRÉ-DECREMENTO (--variavel)
//=========================================================

let idade = 20;

console.log(--idade); //19

console.log(idade); //19



//=========================================================
// PÓS-DECREMENTO (variavel--)
//=========================================================

let estoque = 10;

console.log(estoque--); //10

console.log(estoque); //9



//=========================================================
// QUANDO USAR PRÉ E PÓS INCREMENTO?
//=========================================================

/*
Sempre que você apenas deseja aumentar ou diminuir uma variável,
não existe diferença prática.

contador++;
contador--;

A diferença aparece quando o valor é utilizado na mesma expressão.
*/

let x = 1;

let resultado1 = ++x;
// x vira 2 antes da atribuição.

console.log(resultado1); //2



x = 1;

let resultado2 = x++;
// resultado recebe 1.
// depois x passa a valer 2.

console.log(resultado2); //1
console.log(x); //2



//=========================================================
// 3. OPERADOR UNÁRIO POSITIVO (+)
//=========================================================

/*
Converte um valor para número.

Muito utilizado quando recebemos dados
de formulários (que normalmente são strings).
*/

let textoNumero = "25";

console.log(typeof textoNumero); //string

let numeroConvertido = +textoNumero;

console.log(numeroConvertido); //25
console.log(typeof numeroConvertido); //number



// Outro exemplo

let preco = +"199.90";

console.log(preco);



//=========================================================
// CUIDADO!
//=========================================================

let texto = "JavaScript";

console.log(+texto);

// Resultado:
// NaN (Not a Number)



//=========================================================
// 4. OPERADOR UNÁRIO NEGATIVO (-)
//=========================================================

/*
Transforma um número em negativo
ou inverte seu sinal.
*/

let saldo = 150;

console.log(-saldo); //-150

console.log(saldo); //150



let temperatura = -20;

console.log(-temperatura); //20



//=========================================================
// 5. OPERADOR LÓGICO NOT (!)
//=========================================================

/*
Inverte valores booleanos.

true vira false.
false vira true.
*/

let ligado = true;

console.log(!ligado); //false



let online = false;

console.log(!online); //true



//=========================================================
// NOT COM VALORES "TRUTHY" E "FALSY"
//=========================================================

/*
Qualquer valor pode ser convertido
para booleano.

! faz essa conversão automaticamente.
*/

console.log(!1);          //false
console.log(!0);          //true
console.log(!"Olá");      //false
console.log(!"");         //true
console.log(!null);       //true
console.log(!undefined);  //true



//=========================================================
// DUPLO NOT (!!)
//=========================================================

/*
Converte qualquer valor para booleano.
*/

console.log(!!1);          //true
console.log(!!0);          //false
console.log(!!"Texto");    //true
console.log(!!"");         //false
console.log(!!null);       //false



//=========================================================
// 6. OPERADOR typeof
//=========================================================

/*
Retorna o tipo da variável.
*/

let nome = "Lindomar";
let idadeUsuario = 24;
let ativo = true;
let lista = [];
let pessoa = {};

console.log(typeof nome);          //string
console.log(typeof idadeUsuario);  //number
console.log(typeof ativo);         //boolean
console.log(typeof lista);         //object
console.log(typeof pessoa);        //object



//=========================================================
// typeof COM null
//=========================================================

/*
Curiosidade importante:

typeof null retorna "object".

Isso é considerado um erro histórico
do JavaScript e foi mantido por
compatibilidade.
*/

console.log(typeof null); //object



//=========================================================
// typeof COM undefined
//=========================================================

let cidade;

console.log(typeof cidade); //undefined



//=========================================================
// EXEMPLO PRÁTICO - CONTADOR
//=========================================================

let visitas = 0;

visitas++;
visitas++;
visitas++;
visitas++;

console.log(visitas); //4



//=========================================================
// EXEMPLO PRÁTICO - ESTOQUE
//=========================================================

let produtos = 20;

produtos--;

console.log(produtos);



//=========================================================
// EXEMPLO PRÁTICO - LOGIN
//=========================================================

let logado = false;

if (!logado) {
    console.log("Faça login para continuar.");
}



//=========================================================
// EXEMPLO PRÁTICO - CONVERSÃO
//=========================================================

let idadeTexto = "30";

let idadeNumero = +idadeTexto;

console.log(idadeNumero + 5); //35



//=========================================================
// RESUMO DOS OPERADORES UNÁRIOS
//=========================================================

/*

++      Incrementa 1

--      Decrementa 1

+       Converte para número

-       Inverte o sinal

!       Inverte valor booleano

!!      Converte para booleano

typeof  Retorna o tipo do valor

*/



//=========================================================
// BOAS PRÁTICAS
//=========================================================

/*

✔ Use ++ e -- para contadores em loops.

✔ Utilize + para converter strings numéricas
em números quando apropriado.

✔ Use ! para inverter condições booleanas.

✔ Utilize !! quando precisar garantir que
um valor seja booleano.

✔ Use typeof antes de realizar operações
quando precisar validar o tipo de um dado.

Evite usar pré-incremento (++variavel) e
pós-incremento (variavel++) na mesma expressão,
pois isso pode dificultar a leitura do código.
Prefira escrever um código claro e previsível.

*/