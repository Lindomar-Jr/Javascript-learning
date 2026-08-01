/*

As funções são um dos pilares da linguagem JavaScript.

Uma função é um bloco de código reutilizável que executa
uma determinada tarefa.

Vantagens de utilizar funções:

✔ Evita repetição de código
✔ Facilita manutenção
✔ Organiza melhor o projeto
✔ Torna o código mais legível
✔ Permite dividir grandes problemas em pequenas tarefas

Sintaxe básica:

function nomeDaFuncao() {

    // código

}

=========================================================
*/


/*
=========================================================
1) PRIMEIRA FUNÇÃO
=========================================================

Esta função apenas executa uma ação.

Ela não recebe informações e também não devolve nenhum
resultado.

*/

function saudacao() {

    console.log("Olá, seja bem-vindo!");

}

saudacao();



/*
=========================================================
2) FUNÇÃO COM PARÂMETROS
=========================================================

Parâmetros são informações que a função espera receber.

Eles funcionam como variáveis internas.

Sintaxe:

function nome(parametro){

}

*/

function apresentar(nome) {

    console.log("Olá " + nome);

}

apresentar("Lindomar");
apresentar("João");
apresentar("Maria");



/*
=========================================================
3) MAIS DE UM PARÂMETRO
=========================================================

Uma função pode receber vários parâmetros.

Eles devem ser separados por vírgula.

*/

function soma(numero1, numero2) {

    console.log(numero1 + numero2);

}

soma(10, 20);
soma(100, 500);



/*
=========================================================
4) ARGUMENTOS
=========================================================

Parâmetros:
São as variáveis declaradas na função.

Argumentos:
São os valores enviados quando chamamos a função.

Exemplo:

function exemplo(nome){ }

"nome" -> parâmetro

exemplo("Carlos");

"Carlos" -> argumento

*/



/*
=========================================================
5) FUNÇÃO COM RETORNO (RETURN)
=========================================================

O return devolve um valor para quem chamou a função.

Depois do return, a função é encerrada.

*/

function multiplicar(a, b) {

    return a * b;

}

let resultado = multiplicar(5, 8);

console.log(resultado);



/*
=========================================================
6) UTILIZANDO O RETORNO DIRETAMENTE
=========================================================

Como a função retorna um valor, podemos utilizá-lo
em qualquer lugar.

*/

console.log(multiplicar(3, 7));



/*
=========================================================
7) RETURN ENCERRA A FUNÇÃO
=========================================================

Nada após o return será executado.

*/

function exemploReturn() {

    console.log("Antes do return");

    return;

    console.log("Depois do return"); // Nunca será executado

}

exemploReturn();



/*
=========================================================
8) PARÂMETROS COM VALOR PADRÃO (DEFAULT)
=========================================================

Caso nenhum valor seja enviado, o JavaScript utilizará
o valor definido.

*/

function saudar(nome = "Visitante") {

    console.log("Olá " + nome);

}

saudar("Pedro");
saudar();



/*
=========================================================
9) ESCOPO DA FUNÇÃO
=========================================================

Variáveis declaradas dentro da função existem apenas
dentro dela.

*/

function testeEscopo() {

    let mensagem = "Estou dentro da função";

    console.log(mensagem);

}

testeEscopo();

// console.log(mensagem);
// Erro: mensagem não existe fora da função



/*
=========================================================
10) VARIÁVEL GLOBAL
=========================================================

Variáveis criadas fora das funções podem ser utilizadas
em qualquer lugar.

Evite utilizar muitas variáveis globais.

*/

let empresa = "Tech Solutions";

function mostrarEmpresa() {

    console.log(empresa);

}

mostrarEmpresa();



/*
=========================================================
11) FUNCTION EXPRESSION
=========================================================

Também podemos armazenar uma função dentro de uma variável.

*/

const subtrair = function(a, b) {

    return a - b;

};

console.log(subtrair(20, 5));



/*
=========================================================
12) ARROW FUNCTION
=========================================================

É uma forma mais moderna de criar funções.

Sintaxe:

const nome = () => {

}

*/

const mensagem = () => {

    console.log("Aprendendo Arrow Functions");

};

mensagem();



/*
=========================================================
13) ARROW FUNCTION COM PARÂMETROS
=========================================================

*/

const dividir = (a, b) => {

    return a / b;

};

console.log(dividir(20, 4));



/*
=========================================================
14) ARROW FUNCTION COM RETURN IMPLÍCITO
=========================================================

Quando existe apenas uma linha, podemos remover
as chaves e o return.

*/

const dobro = numero => numero * 2;

console.log(dobro(12));



/*
=========================================================
15) FUNÇÃO CHAMANDO OUTRA FUNÇÃO
=========================================================

Funções podem reutilizar outras funções.

*/

function quadrado(numero) {

    return numero * numero;

}

function mostrarQuadrado(valor) {

    console.log(quadrado(valor));

}

mostrarQuadrado(9);



/*
=========================================================
16) FUNÇÕES ANINHADAS
=========================================================

Uma função pode existir dentro de outra.

*/

function externa() {

        //console.log("Sou a função externa");

    function interna() {

        console.log("Sou a função interna");

    }

    interna();

}

externa();



/*
=========================================================
17) RETORNANDO OBJETOS
=========================================================

Uma função pode retornar qualquer tipo de dado.

*/

function criarUsuario(nome, idade) {

    return {

        nome: nome,
        idade: idade

    };

}

let usuario = criarUsuario("Carlos", 28);

console.log(usuario);



/*
=========================================================
18) RETORNANDO ARRAYS
=========================================================

*/

function listarFrutas() {

    return [

        "Maçã",
        "Banana",
        "Laranja"

    ];

}

console.log(listarFrutas());



/*
=========================================================
                 BOAS PRÁTICAS
=========================================================

✔ Dê nomes claros para as funções.

Ruim:

function x(){}

Bom:

function calcularMedia(){}

--------------------------------------

✔ Faça apenas uma responsabilidade por função.

Ruim:

- Calcula salário
- Envia e-mail
- Gera relatório

Tudo na mesma função.

Bom:

calcularSalario()

enviarEmail()

gerarRelatorio()

--------------------------------------

✔ Evite funções enormes.

Se uma função está muito grande,
provavelmente ela pode ser dividida.

--------------------------------------

✔ Utilize return quando precisar
devolver um resultado.

✔ Utilize console.log apenas para testes.

✔ Prefira nomes que indiquem ações.

Exemplos:

buscarCliente()

calcularTotal()

validarSenha()

criarPedido()

mostrarMensagem()

atualizarEstoque()



/*
=========================================================
                    RESUMO
=========================================================

function nome(){

}

→ Cria uma função.

--------------------------------------

Parâmetros

function soma(a, b){

}

→ Informações esperadas.

--------------------------------------

Argumentos

soma(10, 20);

→ Valores enviados.

--------------------------------------

return

return resultado;

→ Devolve um valor.

--------------------------------------

Function Expression

const soma = function(){}

--------------------------------------

Arrow Function

const soma = () => {}

--------------------------------------

Arrow com retorno implícito

const dobro = numero => numero * 2;

--------------------------------------

Valor padrão

function ola(nome = "Visitante")

--------------------------------------

Escopo

Variáveis criadas dentro da função
existem apenas nela.

*/