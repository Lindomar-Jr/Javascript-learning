"use strict";

/*
===========================================================
GUIA DE ESTUDOS — FUNÇÕES NATIVAS DO JAVASCRIPT
===========================================================

Objetivo:
Aprender a utilizar funções nativas do JavaScript e entender
como elas podem ser combinadas com funções criadas pelo
desenvolvedor.

Neste arquivo veremos:

1. Parâmetros e retorno de funções
2. Funções Callback
3. Manipulação de textos (String)
4. Funções matemáticas (Math)
5. Datas (Date)
6. Combinando funções nativas com funções próprias

IMPORTANTE:
Funções nativas são funcionalidades que já fazem parte da
linguagem JavaScript.

Exemplos:

    console.log()
    Number()
    String()
    parseInt()
    parseFloat()
    Math.random()
    Math.floor()
    Date()
    String.toUpperCase()
    String.includes()

Você não precisa criar essas funções.
Elas já são fornecidas pelo JavaScript.
===========================================================
*/


/*
===========================================================
1. PARÂMETROS E RETORNO DE FUNÇÕES
===========================================================

Uma função pode receber informações através de parâmetros.

Parâmetro:
É uma variável definida na declaração da função.

Argumento:
É o valor que enviamos quando chamamos a função.

Exemplo:

function somar(numero1, numero2) {
    return numero1 + numero2;
}

numero1 e numero2 → parâmetros

somar(10, 20)

10 e 20 → argumentos
===========================================================
*/


function somar(numero1, numero2) {

    return numero1 + numero2;
}

const resultado = somar(10, 20);

console.log(resultado); // 30


/*
-----------------------------------------------------------
RETURN
-----------------------------------------------------------

O return define o valor que a função devolve.

Isso permite armazenar o resultado em uma variável ou
utilizá-lo em outra operação.
*/

function calcularDobro(numero) {

    return numero * 2;
}

const dobro = calcularDobro(10);

console.log(dobro); // 20


/*
-----------------------------------------------------------
IMPORTANTE SOBRE RETURN
-----------------------------------------------------------

Quando o JavaScript encontra um return, a execução da
função é encerrada naquele ponto.
*/

function verificarIdade(idade) {

    if (idade >= 18) {
        return "Maior de idade";
    }

    return "Menor de idade";
}

console.log(verificarIdade(20));
console.log(verificarIdade(15));


/*
-----------------------------------------------------------
FUNÇÃO COM MAIS DE UM PARÂMETRO
-----------------------------------------------------------
*/

function apresentarPessoa(nome, idade, profissao) {

    return `Meu nome é ${nome}, tenho ${idade} anos e sou ${profissao}.`;
}

console.log(
    apresentarPessoa("Carlos", 25, "desenvolvedor")
);


/*
===========================================================
2. VALORES PADRÃO NOS PARÂMETROS
===========================================================

Podemos definir um valor padrão para um parâmetro.

Isso é útil quando a função pode ser chamada sem receber
determinado argumento.
===========================================================
*/

function cumprimentar(nome = "Visitante") {

    return `Olá, ${nome}!`;
}

console.log(cumprimentar("Lindomar"));
console.log(cumprimentar());


/*
===========================================================
3. FUNÇÕES CALLBACK
===========================================================

Callback é uma função passada como argumento para outra função.

Isso é extremamente importante em JavaScript.

Exemplo conceitual:

function executar(funcao) {
    funcao();
}

A função recebida como argumento será executada posteriormente.

Uma callback pode ser:

- uma função tradicional
- uma função anônima
- uma arrow function
===========================================================
*/


function executarOperacao(numero1, numero2, operacao) {

    return operacao(numero1, numero2);
}


function somarNumeros(a, b) {

    return a + b;
}


function multiplicarNumeros(a, b) {

    return a * b;
}


const resultadoSoma = executarOperacao(
    10,
    5,
    somarNumeros
);

const resultadoMultiplicacao = executarOperacao(
    10,
    5,
    multiplicarNumeros
);

console.log(resultadoSoma);         // 15
console.log(resultadoMultiplicacao); // 50


/*
-----------------------------------------------------------
CALLBACK COM ARROW FUNCTION
-----------------------------------------------------------

Também podemos passar uma função diretamente.
*/

const resultadoSubtracao = executarOperacao(
    10,
    5,
    (a, b) => a - b
);

console.log(resultadoSubtracao); // 5


/*
===========================================================
4. FUNÇÕES NATIVAS PARA MANIPULAÇÃO DE TEXTOS
===========================================================

Strings possuem diversos métodos nativos.

Exemplo:

const nome = "JavaScript";

nome.toUpperCase();

O método toUpperCase() transforma o texto para letras
maiúsculas.

Alguns métodos importantes:

toUpperCase()
toLowerCase()
trim()
includes()
startsWith()
endsWith()
replace()
slice()
substring()
split()
charAt()
length
===========================================================
*/


/*
-----------------------------------------------------------
TOUPPERCASE()
-----------------------------------------------------------
*/

const linguagem = "javascript";

console.log(linguagem.toUpperCase());

// JAVASCRIPT


/*
-----------------------------------------------------------
TOLOWERCASE()
-----------------------------------------------------------
*/

const linguagemMaiuscula = "JAVASCRIPT";

console.log(linguagemMaiuscula.toLowerCase());

// javascript


/*
-----------------------------------------------------------
TRIM()
-----------------------------------------------------------

Remove espaços desnecessários no início e no final da string.

Muito útil para tratar informações digitadas pelo usuário
em formulários.
*/

const nomeUsuario = "   Lindomar   ";

console.log(nomeUsuario.trim());

// "Lindomar"


/*
-----------------------------------------------------------
INCLUDES()
-----------------------------------------------------------

Verifica se determinado texto existe dentro da string.

Retorna:

true  → encontrou
false → não encontrou
*/

const frase = "Estou estudando JavaScript";

console.log(frase.includes("JavaScript")); // true
console.log(frase.includes("Python"));     // false


/*
-----------------------------------------------------------
STARTSWITH()
-----------------------------------------------------------

Verifica se a string começa com determinado texto.
*/

const url = "https://www.exemplo.com";

console.log(url.startsWith("https")); // true


/*
-----------------------------------------------------------
ENDSWITH()
-----------------------------------------------------------

Verifica se a string termina com determinado texto.
*/

const arquivo = "documento.pdf";

console.log(arquivo.endsWith(".pdf")); // true


/*
-----------------------------------------------------------
REPLACE()
-----------------------------------------------------------

Substitui uma parte do texto por outra.
*/

const mensagem = "Eu gosto de Python";

const novaMensagem = mensagem.replace(
    "Python",
    "JavaScript"
);

console.log(novaMensagem);

// Eu gosto de JavaScript


/*
-----------------------------------------------------------
SLICE()
-----------------------------------------------------------

Extrai uma parte da string.

O primeiro parâmetro indica onde começar.

O segundo indica onde terminar.

A posição final NÃO é incluída.
*/

const palavra = "JavaScript";

console.log(palavra.slice(0, 4));

// Java


/*
-----------------------------------------------------------
SPLIT()
-----------------------------------------------------------

Divide uma string e transforma o resultado em um Array.

Esse método é muito utilizado no tratamento de dados.
*/

const tecnologias = "HTML,CSS,JavaScript,Python";

const listaTecnologias = tecnologias.split(",");

console.log(listaTecnologias);

/*
Resultado:

[
    "HTML",
    "CSS",
    "JavaScript",
    "Python"
]
*/


/*
-----------------------------------------------------------
LENGTH
-----------------------------------------------------------

length informa a quantidade de caracteres de uma string.
*/

const senha = "abc123";

console.log(senha.length); // 6


/*
===========================================================
5. CONVERSÃO DE TIPOS
===========================================================

Algumas funções nativas são utilizadas para converter
valores entre tipos diferentes.

Number()
String()
Boolean()
parseInt()
parseFloat()
===========================================================
*/


/*
-----------------------------------------------------------
NUMBER()
-----------------------------------------------------------
*/

const valorTexto = "100";

const valorNumero = Number(valorTexto);

console.log(valorNumero);
console.log(typeof valorNumero);

// 100
// number


/*
-----------------------------------------------------------
PARSEINT()
-----------------------------------------------------------

Converte uma string para número inteiro.
*/

const numeroInteiro = parseInt("25");

console.log(numeroInteiro); // 25


/*
Se existir uma parte decimal, ela será ignorada.
*/

console.log(parseInt("25.90")); // 25


/*
-----------------------------------------------------------
PARSEFLOAT()
-----------------------------------------------------------

Converte uma string para número decimal.
*/

const numeroDecimal = parseFloat("25.90");

console.log(numeroDecimal); // 25.9


/*
===========================================================
6. FUNÇÕES NATIVAS DE MATEMÁTICA — MATH
===========================================================

O objeto Math fornece diversas operações matemáticas.

Algumas das mais importantes:

Math.round()
Math.floor()
Math.ceil()
Math.trunc()
Math.abs()
Math.max()
Math.min()
Math.pow()
Math.sqrt()
Math.random()
===========================================================
*/


/*
-----------------------------------------------------------
MATH.ROUND()
-----------------------------------------------------------

Arredonda para o número inteiro mais próximo.
*/

console.log(Math.round(4.4)); // 4
console.log(Math.round(4.6)); // 5


/*
-----------------------------------------------------------
MATH.FLOOR()
-----------------------------------------------------------

Arredonda sempre para baixo.
*/

console.log(Math.floor(4.9)); // 4
console.log(Math.floor(4.1)); // 4


/*
-----------------------------------------------------------
MATH.CEIL()
-----------------------------------------------------------

Arredonda sempre para cima.
*/

console.log(Math.ceil(4.1)); // 5
console.log(Math.ceil(4.9)); // 5


/*
-----------------------------------------------------------
MATH.TRUNC()
-----------------------------------------------------------

Remove a parte decimal sem fazer arredondamento.
*/

console.log(Math.trunc(10.99)); // 10
console.log(Math.trunc(10.01)); // 10


/*
-----------------------------------------------------------
MATH.ABS()
-----------------------------------------------------------

Retorna o valor absoluto.

Ou seja, transforma um número negativo em positivo.
*/

console.log(Math.abs(-50)); // 50


/*
-----------------------------------------------------------
MATH.MAX()
-----------------------------------------------------------

Retorna o maior valor.
*/

console.log(Math.max(10, 50, 30, 80));

// 80


/*
-----------------------------------------------------------
MATH.MIN()
-----------------------------------------------------------

Retorna o menor valor.
*/

console.log(Math.min(10, 50, 30, 80));

// 10


/*
-----------------------------------------------------------
MATH.POW()
-----------------------------------------------------------

Calcula uma potência.

Math.pow(base, expoente)
*/

console.log(Math.pow(2, 3));

// 8


/*
Uma alternativa moderna é utilizar o operador **.
*/

console.log(2 ** 3);

// 8


/*
-----------------------------------------------------------
MATH.SQRT()
-----------------------------------------------------------

Calcula a raiz quadrada.
*/

console.log(Math.sqrt(25));

// 5


/*
-----------------------------------------------------------
MATH.RANDOM()
-----------------------------------------------------------

Gera um número aleatório entre:

0 (inclusivo)

e

1 (exclusivo)

Exemplo:

0.1245
0.7891
0.4567
etc.
*/

console.log(Math.random());


/*
-----------------------------------------------------------
GERANDO NÚMEROS ALEATÓRIOS INTEIROS
-----------------------------------------------------------

Para gerar um número entre 1 e 10:

Math.floor(Math.random() * 10) + 1

Entenda a lógica:

Math.random()
→ gera número entre 0 e 0.999...

* 10
→ transforma em intervalo de 0 até 9.999...

Math.floor()
→ transforma em 0 até 9

+ 1
→ transforma em 1 até 10
*/

const numeroAleatorio = Math.floor(
    Math.random() * 10
) + 1;

console.log(numeroAleatorio);


/*
===========================================================
7. FUNÇÕES NATIVAS E DATAS — DATE
===========================================================

O objeto Date permite trabalhar com:

- data atual
- hora atual
- dia
- mês
- ano
- comparação de datas
- criação de datas específicas

IMPORTANTE:

No JavaScript, os meses começam em 0.

Janeiro → 0
Fevereiro → 1
Março → 2
...
Dezembro → 11
===========================================================
*/


/*
-----------------------------------------------------------
DATA E HORA ATUAIS
-----------------------------------------------------------
*/

const agora = new Date();

console.log(agora);


/*
-----------------------------------------------------------
GETFULLYEAR()
-----------------------------------------------------------

Retorna o ano.
*/

console.log(agora.getFullYear());


/*
-----------------------------------------------------------
GETMONTH()
-----------------------------------------------------------

Retorna o mês.

ATENÇÃO:

Janeiro = 0
Dezembro = 11
*/

console.log(agora.getMonth());


/*
-----------------------------------------------------------
GETDATE()
-----------------------------------------------------------

Retorna o dia do mês.
*/

console.log(agora.getDate());


/*
-----------------------------------------------------------
GETDAY()
-----------------------------------------------------------

Retorna o dia da semana.

Domingo = 0
Segunda = 1
Terça = 2
Quarta = 3
Quinta = 4
Sexta = 5
Sábado = 6
*/

console.log(agora.getDay());


/*
-----------------------------------------------------------
GETHOURS()
GETMINUTES()
GETSECONDS()
-----------------------------------------------------------
*/

console.log(agora.getHours());
console.log(agora.getMinutes());
console.log(agora.getSeconds());


/*
===========================================================
8. CRIANDO UMA DATA ESPECÍFICA
===========================================================
*/

const nascimento = new Date(2001, 9, 20);

console.log(nascimento);

/*
Lembre-se:

new Date(ano, mês, dia)

Como outubro é o mês 10 para nós humanos,
no JavaScript utilizamos 9.

2001 → ano
9    → outubro
20   → dia
*/


/*
===========================================================
9. FORMATANDO UMA DATA
===========================================================

Podemos utilizar métodos de Date para montar uma string
no formato desejado.
===========================================================
*/

function formatarData(data) {

    const dia = String(data.getDate()).padStart(2, "0");

    const mes = String(
        data.getMonth() + 1
    ).padStart(2, "0");

    const ano = data.getFullYear();

    return `${dia}/${mes}/${ano}`;
}


console.log(
    formatarData(new Date())
);


/*
-----------------------------------------------------------
PADSTART()
-----------------------------------------------------------

padStart() adiciona caracteres no início de uma string
até atingir determinado tamanho.

Exemplo:

"5".padStart(2, "0")

Resultado:

"05"
*/


/*
===========================================================
10. COMPARANDO DATAS
===========================================================

Datas podem ser comparadas utilizando seus valores
numéricos através de getTime().

getTime() retorna a quantidade de milissegundos desde
01/01/1970 (Unix Epoch).
===========================================================
*/

const data1 = new Date(2026, 7, 1);
const data2 = new Date(2026, 7, 10);

if (data1.getTime() < data2.getTime()) {

    console.log("A primeira data é anterior.");

}


/*
===========================================================
11. CALCULANDO DIFERENÇA ENTRE DATAS
===========================================================
*/

const inicio = new Date(2026, 7, 1);
const fim = new Date(2026, 7, 10);

const diferencaMilissegundos =
    fim.getTime() - inicio.getTime();


const diferencaDias =
    diferencaMilissegundos /
    (1000 * 60 * 60 * 24);


console.log(`Diferença: ${diferencaDias} dias`);


/*
===========================================================
12. COMBINANDO FUNÇÕES NATIVAS COM FUNÇÕES PRÓPRIAS
===========================================================

É aqui que você começa a perceber a força do JavaScript.

Podemos criar funções que utilizam diversas funcionalidades
nativas da linguagem.
===========================================================
*/


function gerarMensagem(nome) {

    const nomeFormatado = nome
        .trim()
        .toUpperCase();

    return `Olá, ${nomeFormatado}! Seja bem-vindo.`;
}


console.log(
    gerarMensagem("   Lindomar   ")
);


/*
===========================================================
13. EXEMPLO PRÁTICO — GERADOR DE FRASE ALEATÓRIA
===========================================================

Este exemplo combina:

- Array
- Math.random()
- Math.floor()
- length
- função
- return
===========================================================
*/

const frases = [
    "Continue praticando.",
    "Todo desenvolvedor começou como iniciante.",
    "Errar faz parte do aprendizado.",
    "Consistência é mais importante que velocidade.",
    "Pratique um pouco todos os dias."
];


function gerarFraseAleatoria() {

    const indice = Math.floor(
        Math.random() * frases.length
    );

    return frases[indice];
}


console.log(
    gerarFraseAleatoria()
);


/*
===========================================================
14. EXEMPLO PRÁTICO — VALIDAÇÃO DE NOME
===========================================================

Aqui combinamos:

- parâmetros
- return
- trim()
- length
- toUpperCase()
===========================================================
*/

function validarNome(nome) {

    const nomeTratado = nome.trim();

    if (nomeTratado.length < 3) {

        return "Nome inválido.";

    }

    return `Nome válido: ${nomeTratado.toUpperCase()}`;
}


console.log(validarNome("Jo"));
console.log(validarNome("Lindomar"));


/*
===========================================================
15. EXEMPLO PRÁTICO — CALCULADORA
===========================================================

Vamos utilizar callback para permitir que a função
execute diferentes operações.
===========================================================
*/

function calcular(numero1, numero2, operacao) {

    return operacao(numero1, numero2);
}


const soma = calcular(
    20,
    10,
    (a, b) => a + b
);

const subtracao = calcular(
    20,
    10,
    (a, b) => a - b
);

const multiplicacao = calcular(
    20,
    10,
    (a, b) => a * b
);

const divisao = calcular(
    20,
    10,
    (a, b) => a / b
);


console.log(soma);          // 30
console.log(subtracao);     // 10
console.log(multiplicacao); // 200
console.log(divisao);       // 2


/*
===========================================================
16. RESUMO
===========================================================

PARÂMETROS
→ Dados que uma função recebe.

ARGUMENTOS
→ Valores enviados para os parâmetros.

RETURN
→ Valor devolvido pela função.

CALLBACK
→ Função passada como argumento para outra função.

STRING
→ Tipo utilizado para trabalhar com textos.

Métodos importantes:

toUpperCase()
toLowerCase()
trim()
includes()
startsWith()
endsWith()
replace()
slice()
split()

MATH
→ Objeto com funcionalidades matemáticas.

Métodos importantes:

Math.round()
Math.floor()
Math.ceil()
Math.trunc()
Math.abs()
Math.max()
Math.min()
Math.pow()
Math.sqrt()
Math.random()

DATE
→ Objeto utilizado para trabalhar com datas e horários.

Métodos importantes:

new Date()
getFullYear()
getMonth()
getDate()
getDay()
getHours()
getMinutes()
getSeconds()
getTime()

===========================================================
17. CONCEITO MAIS IMPORTANTE DESTE GUIA
===========================================================

Não memorize simplesmente os métodos.

O mais importante é entender:

    "Qual problema estou tentando resolver?"

Por exemplo:

Preciso transformar um texto em maiúsculo?
→ toUpperCase()

Preciso remover espaços?
→ trim()

Preciso verificar se um texto existe?
→ includes()

Preciso gerar um número aleatório?
→ Math.random()

Preciso arredondar para baixo?
→ Math.floor()

Preciso descobrir a data atual?
→ new Date()

Preciso devolver um resultado de uma função?
→ return

Preciso permitir que outra função seja executada
dentro da minha função?
→ callback

Como desenvolvedor, o objetivo não é decorar tudo.

É saber que essas ferramentas existem e entender
quando utilizá-las.
===========================================================
*/
