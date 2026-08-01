/*

Uma estrutura condicional permite que o programa tome
decisões com base em uma condição.

Em outras palavras:

"SE uma condição for verdadeira, faça isso.
SENÃO, faça outra coisa."

Sintaxe básica:

if (condição) {
    // Código executado se a condição for verdadeira
} else {
    // Código executado se a condição for falsa
}

==========================================================
*/


/*
==========================================================
EXEMPLO 1 - IF SIMPLES
==========================================================

O bloco será executado somente se a condição for verdadeira.
*/

let idade = 20;

if (idade >= 18) {
    console.log("Você é maior de idade.");
}


/*
Saída:

Você é maior de idade.
*/



/*
==========================================================
EXEMPLO 2 - IF COM CONDIÇÃO FALSA
==========================================================

Como a condição é falsa, nada será executado.
*/

let temperatura = 18;

if (temperatura > 30) {
    console.log("Está muito quente.");
}


/*
Saída:

(nenhuma)

O console não exibirá nada porque a condição é falsa.
*/



/*
==========================================================
EXEMPLO 3 - IF E ELSE
==========================================================

O else é executado quando o if for falso.
*/

let saldo = 50;

if (saldo >= 100) {
    console.log("Compra aprovada.");
} else {
    console.log("Saldo insuficiente.");
}


/*
Saída:

Saldo insuficiente.
*/



/*
==========================================================
EXEMPLO 4 - VERIFICANDO UMA SENHA
==========================================================

Muito comum em sistemas de login.
*/

let senha = "123456";

if (senha === "123456") {
    console.log("Senha correta.");
} else {
    console.log("Senha incorreta.");
}


/*
Saída:

Senha correta.
*/



/*
==========================================================
EXEMPLO 5 - VERIFICANDO SE UM NÚMERO É POSITIVO
==========================================================
*/

let numero = 15;

if (numero > 0) {
    console.log("Número positivo.");
} else {
    console.log("Número negativo ou igual a zero.");
}



/*
==========================================================
EXEMPLO 6 - VERIFICANDO APROVAÇÃO
==========================================================

Neste exemplo utilizamos uma nota.
*/

let nota = 8;

if (nota >= 7) {
    console.log("Aluno aprovado.");
} else {
    console.log("Aluno reprovado.");
}



/*
==========================================================
EXEMPLO 7 - PODE ENTRAR NO EVENTO?
==========================================================
*/

let possuiIngresso = true;

if (possuiIngresso) {
    console.log("Entrada permitida.");
} else {
    console.log("Entrada negada.");
}


/*
Observe que não precisamos escrever:

if (possuiIngresso === true)

Porque a variável já possui um valor booleano.
*/



/*
==========================================================
EXEMPLO 8 - COMPARANDO DUAS IDADES
==========================================================
*/

let idadeJoao = 22;
let idadeMaria = 25;

if (idadeJoao > idadeMaria) {
    console.log("João é mais velho.");
} else {
    console.log("Maria é mais velha.");
}



/*
==========================================================
EXEMPLO 9 - VERIFICANDO SE O ESTOQUE É SUFICIENTE
==========================================================
*/

let estoque = 12;

if (estoque > 0) {
    console.log("Produto disponível.");
} else {
    console.log("Produto indisponível.");
}



/*
==========================================================
EXEMPLO 10 - DESCONTO PARA CLIENTES
==========================================================
*/

let valorCompra = 350;

if (valorCompra >= 300) {
    console.log("Cliente ganhou desconto.");
} else {
    console.log("Compra sem desconto.");
}



/*
==========================================================
COMO O JAVASCRIPT AVALIA UMA CONDIÇÃO
==========================================================

A condição sempre precisa resultar em:

true
ou

false

Exemplos:

10 > 5       -> true
5 > 10       -> false
8 == 8       -> true
8 != 8       -> false
18 >= 18     -> true
15 <= 10     -> false

Sempre que o resultado for true,
o bloco do if será executado.

Caso seja false,
o JavaScript irá executar o else (caso exista).
*/



/*
==========================================================
ERRO COMUM #1
==========================================================

Errado:

if (idade = 18)

O operador "=" faz ATRIBUIÇÃO.

Correto:

if (idade == 18)

ou, preferencialmente:

if (idade === 18)
*/



/*
==========================================================
ERRO COMUM #2
==========================================================

Esquecer as chaves.

Embora o JavaScript permita omitir as chaves quando existe
apenas uma instrução, a recomendação profissional é
sempre utilizá-las.

Exemplo recomendado:
*/

let ativo = true;

if (ativo) {
    console.log("Usuário ativo.");
}



/*
==========================================================
ERRO COMUM #3
==========================================================

Colocar ponto e vírgula após o if.

ERRADO:

if (idade >= 18);

{
    console.log("Maior de idade.");
}

Esse ponto e vírgula encerra o if, fazendo com que
o bloco seja executado sempre.

O correto é:
*/

if (idade >= 18) {
    console.log("Maior de idade.");
}



/*
==========================================================
ELSE IF
==========================================================

O else if significa:

"SENÃO SE"

Ele é utilizado quando precisamos testar várias condições
em sequência.

O JavaScript verifica as condições de cima para baixo.

Assim que encontrar uma condição verdadeira,
ele executa aquele bloco e ignora todos os demais.

Sintaxe:

if (condição1) {

    // Executa se condição1 for verdadeira

} else if (condição2) {

    // Executa se condição2 for verdadeira

} else {

    // Executa caso nenhuma condição seja verdadeira

}

==========================================================
*/


/*
==========================================================
EXEMPLO 11 - CLASSIFICAÇÃO DE NOTAS
==========================================================

Neste exemplo, o programa verifica a nota do aluno
e informa sua situação.
*/

let notaAluno = 8;

if (notaAluno >= 9) {

    console.log("Excelente!");

} else if (notaAluno >= 7) {

    console.log("Aprovado.");

} else if (notaAluno >= 5) {

    console.log("Recuperação.");

} else {

    console.log("Reprovado.");

}


/*
Saída:

Aprovado.
*/



/*
==========================================================
EXEMPLO 12 - CLASSIFICAÇÃO DA IDADE
==========================================================
*/

let idadePessoa = 15;

if (idadePessoa < 12) {

    console.log("Criança");

} else if (idadePessoa < 18) {

    console.log("Adolescente");

} else if (idadePessoa < 60) {

    console.log("Adulto");

} else {

    console.log("Idoso");

}


/*
Saída:

Adolescente
*/



/*
==========================================================
EXEMPLO 13 - HORÁRIO DO DIA
==========================================================
*/

let hora = 14;

if (hora < 12) {

    console.log("Bom dia!");

} else if (hora < 18) {

    console.log("Boa tarde!");

} else {

    console.log("Boa noite!");

}


/*
Saída:

Boa tarde!
*/



/*
==========================================================
EXEMPLO 14 - VELOCIDADE DO VEÍCULO
==========================================================
*/

let velocidade = 105;

if (velocidade <= 60) {

    console.log("Velocidade permitida.");

} else if (velocidade <= 80) {

    console.log("Atenção! Reduza a velocidade.");

} else {

    console.log("Multa por excesso de velocidade.");

}


/*

==========================================================
RESUMO
==========================================================

if
→ Executa um bloco somente se a condição for verdadeira.

else
→ Executa outro bloco quando a condição for falsa.

Estrutura completa:

if (condição) {

    // verdadeiro

} else {

    // falso

}

Lembre-se:

if = "SE"

else = "SENÃO"

*/