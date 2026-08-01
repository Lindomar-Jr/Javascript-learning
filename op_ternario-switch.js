/*

Este arquivo aborda:

1. Operador Ternário
2. Ternário com múltiplas condições
3. Quando utilizar o operador ternário
4. Estrutura Switch
5. Uso do break
6. Uso do default
7. Agrupando casos
8. Switch com expressões
9. Comparação entre if/else e switch
*/


// =======================================================
// 1. OPERADOR TERNÁRIO
// =======================================================

/*
O operador ternário é uma forma reduzida de escrever um if/else.

Sintaxe:

condição ? valorSeVerdadeiro : valorSeFalso;

Ele possui três partes:

1° condição
2° resultado caso seja verdadeiro
3° resultado caso seja falso
*/

let idade = 20;

let resultado = idade >= 18
    ? "Maior de idade"
    : "Menor de idade";

console.log(resultado);


// -------------------------------------------------------

/*
O código acima equivale a:

if (idade >= 18) {
    resultado = "Maior de idade";
} else {
    resultado = "Menor de idade";
}
*/


// =======================================================
// 2. OUTRO EXEMPLO
// =======================================================

let nota = 8;

let situacao = nota >= 7
    ? "Aprovado"
    : "Reprovado";

console.log(situacao);


// =======================================================
// 3. TERNÁRIO DENTRO DO CONSOLE
// =======================================================

/*
Nem sempre precisamos guardar o resultado
em uma variável.
*/

let temperatura = 32;

console.log(
    temperatura > 30
        ? "Está quente!"
        : "Temperatura agradável."
);


// =======================================================
// 4. TERNÁRIO COM MAIS DE UMA CONDIÇÃO
// =======================================================

/*
É possível encadear operadores ternários.

Porém, muitos ternários seguidos dificultam
a leitura do código.

Use apenas quando a lógica for simples.
*/

let media = 6;

let status = media >= 7
    ? "Aprovado"
    : media >= 5
        ? "Recuperação"
        : "Reprovado";

console.log(status);


// Equivalente usando if/else

/*
if (media >= 7) {

    status = "Aprovado";

} else if (media >= 5) {

    status = "Recuperação";

} else {

    status = "Reprovado";

}
*/


// =======================================================
// 5. QUANDO UTILIZAR O OPERADOR TERNÁRIO
// =======================================================

/*
Ideal para decisões pequenas.

Exemplos:

✔ Mostrar "Sim" ou "Não"

✔ Ativo ou Inativo

✔ Maior ou Menor

✔ Logado ou Não Logado

Evite utilizá-lo quando houver muitas
condições ou blocos grandes de código.
*/


// Exemplo

let logado = true;

let mensagem = logado
    ? "Bem-vindo!"
    : "Faça login.";

console.log(mensagem);


// =======================================================
// 6. SWITCH
// =======================================================

/*
O switch é utilizado quando temos várias
opções para comparar a mesma variável.

Sintaxe:

switch (expressao) {

    case valor:
        código
        break;

    default:
        código

}
*/


let dia = 3;

switch (dia) {

    case 1:
        console.log("Domingo");
        break;

    case 2:
        console.log("Segunda-feira");
        break;

    case 3:
        console.log("Terça-feira");
        break;

    case 4:
        console.log("Quarta-feira");
        break;

    case 5:
        console.log("Quinta-feira");
        break;

    case 6:
        console.log("Sexta-feira");
        break;

    case 7:
        console.log("Sábado");
        break;

    default:
        console.log("Dia inválido");

}


// =======================================================
// 7. IMPORTÂNCIA DO BREAK
// =======================================================

/*
O break encerra o switch.

Sem ele, o JavaScript continuará executando
os próximos cases até encontrar um break
ou chegar ao final do switch.

Esse comportamento é chamado de "fall through".
*/

let numero = 2;

switch (numero) {

    case 1:
        console.log("Um");

    case 2:
        console.log("Dois");

    case 3:
        console.log("Três");

}

/*
Saída:

Dois
Três

Observe que o case 3 também foi executado,
pois não existe break.
*/


// Agora corretamente

switch (numero) {

    case 1:
        console.log("Um");
        break;

    case 2:
        console.log("Dois");
        break;

    case 3:
        console.log("Três");
        break;

}


// =======================================================
// 8. DEFAULT
// =======================================================

/*
O default funciona como o else.

Ele será executado caso nenhum case
seja encontrado.
*/

let cor = "roxo";

switch (cor) {

    case "azul":
        console.log("Cor Azul");
        break;

    case "verde":
        console.log("Cor Verde");
        break;

    case "vermelho":
        console.log("Cor Vermelha");
        break;

    default:
        console.log("Cor não cadastrada");

}


// =======================================================
// 9. AGRUPANDO CASES
// =======================================================

/*
Vários cases podem executar
o mesmo bloco de código.
*/

let letra = "A";

switch (letra) {

    case "A":
    case "E":
    case "I":
    case "O":
    case "U":
        console.log("É uma vogal.");
        break;

    default:
        console.log("É uma consoante.");

}


// =======================================================
// 10. SWITCH COM STRINGS
// =======================================================

let cargo = "Administrador";

switch (cargo) {

    case "Administrador":
        console.log("Acesso total.");
        break;

    case "Editor":
        console.log("Pode editar conteúdos.");
        break;

    case "Usuário":
        console.log("Acesso básico.");
        break;

    default:
        console.log("Cargo desconhecido.");

}


// =======================================================
// 11. SWITCH COM EXPRESSÃO
// =======================================================

/*
O switch compara usando igualdade estrita (===).

Isso significa que tipo e valor
precisam ser iguais.
*/

let valor = "10";

switch (valor) {

    case 10:
        console.log("Número");

        break;

    case "10":
        console.log("String");

        break;

}

/*
Resultado:

String

Porque:

10 !== "10"
*/


// =======================================================
// 12. IF/ELSE OU SWITCH?
// =======================================================

/*
Prefira IF quando:

✔ Existem comparações (> < >= <=)
✔ Existem operadores lógicos (&& ||)
✔ Existem condições complexas

Exemplo:

if (idade >= 18 && possuiCarteira) {

}
*/


/*
Prefira SWITCH quando:

✔ Há várias opções fixas.

Exemplo:

Status

"pendente"

"aprovado"

"cancelado"

"entregue"
*/


// =======================================================
// 13. EXEMPLO COMPLETO
// =======================================================

let opcao = 2;

switch (opcao) {

    case 1:
        console.log("Cadastrar cliente");
        break;

    case 2:
        console.log("Editar cliente");
        break;

    case 3:
        console.log("Excluir cliente");
        break;

    case 4:
        console.log("Listar clientes");
        break;

    default:
        console.log("Opção inválida.");

}


// =======================================================
// 14. RESUMO
// =======================================================

/*

OPERADOR TERNÁRIO

✔ Substitui if/else simples.
✔ Deixa o código mais compacto.
✔ Ideal para decisões rápidas.
✔ Evite muitos ternários aninhados.


SWITCH

✔ Excelente para múltiplas opções.
✔ Cada case representa uma possibilidade.
✔ break evita executar os próximos cases.
✔ default funciona como o else.
✔ Utiliza comparação estrita (===).


REGRA GERAL

Poucas decisões:
→ Operador Ternário

Comparações complexas:
→ if / else if

Muitas opções fixas:
→ switch

*/