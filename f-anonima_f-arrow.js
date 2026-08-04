
/*
---------------------------------------------------------
SUMÁRIO

1. O que é uma função anônima
2. Criando funções anônimas
3. Função anônima em variáveis
4. Função anônima como parâmetro (Callback)
5. O que é Arrow Function
6. Sintaxe da Arrow Function
7. Retorno implícito
8. Arrow com múltiplos parâmetros
9. Arrow retornando objeto
10. Diferenças entre Arrow e Function
11. O comportamento do this
12. Quando utilizar cada uma
13. Boas práticas
=========================================================
*/


//========================================================
// 1. O QUE É UMA FUNÇÃO ANÔNIMA
//========================================================

/*
Uma função anônima é uma função que NÃO possui nome.

Exemplo tradicional:

function (){
    ...
}

Ela normalmente é armazenada em uma variável
ou passada como argumento para outra função.
*/


//========================================================
// 2. CRIANDO UMA FUNÇÃO ANÔNIMA
//========================================================

const saudacao = function () {
    console.log("Olá!");
};

saudacao();


// Também podemos receber parâmetros

const soma = function (a, b) {
    return a + b;
};

console.log(soma(5, 3));




//========================================================
// 3. FUNÇÃO ANÔNIMA ATRIBUÍDA A UMA VARIÁVEL
//========================================================

/*
Apesar da função não possuir nome,
a variável passa a ser sua referência.
*/

const multiplicar = function (numero1, numero2) {
    return numero1 * numero2;
};

console.log(multiplicar(5, 8));




//========================================================
// 4. FUNÇÃO ANÔNIMA COMO CALLBACK
//========================================================

/*
Callback significa:

"Uma função passada para outra função."

É extremamente comum em JavaScript.
*/

const numeros = [1, 2, 3, 4, 5];

numeros.forEach(function (numero) {
    console.log(numero);
});




//========================================================
// 5. O QUE É UMA ARROW FUNCTION
//========================================================

/*
Arrow Function surgiu no ES6 (ECMAScript 2015).

Ela possui uma sintaxe menor e mais moderna.

Sintaxe:

(parametros) => {
    código
}
*/




//========================================================
// 6. PRIMEIRA ARROW FUNCTION
//========================================================

const mensagem = () => {
    console.log("Olá com Arrow Function!");
};

mensagem();




//========================================================
// 7. ARROW COM PARÂMETROS
//========================================================

const subtrair = (a, b) => {
    return a - b;
};

console.log(subtrair(10, 3));




//========================================================
// 8. RETORNO IMPLÍCITO
//========================================================

/*
Se houver apenas UMA expressão,
podemos remover:

- chaves {}
- return

O retorno será automático.
*/

const dividir = (a, b) => a / b;

console.log(dividir(20, 5));




//========================================================
// 9. APENAS UM PARÂMETRO
//========================================================

/*
Quando existe apenas um parâmetro,
os parênteses são opcionais.
*/

const dobro = numero => numero * 2;

console.log(dobro(10));




//========================================================
// 10. SEM PARÂMETROS
//========================================================

/*
Sem parâmetros,
os parênteses continuam obrigatórios.
*/

const boasVindas = () => "Bem-vindo!";

console.log(boasVindas());




//========================================================
// 11. ARROW COM MÚLTIPLAS LINHAS
//========================================================

/*
Quando houver várias instruções,
utilizamos chaves normalmente.
*/

const calcularMedia = (n1, n2) => {

    const media = (n1 + n2) / 2;

    return media;

};

console.log(calcularMedia(8, 6));




//========================================================
// 12. RETORNANDO OBJETOS
//========================================================

/*
Para retornar um objeto diretamente,
devemos colocar o objeto entre parênteses.

Caso contrário,
o JavaScript entenderá que as chaves fazem
parte do bloco da função.
*/

const criarUsuario = () => ({
    nome: "Lindomar",
    idade: 24
});

console.log(criarUsuario());




//========================================================
// 13. EXEMPLO COM MAP()
//========================================================

const valores = [1, 2, 3, 4, 5];

const quadrados = valores.map(numero => numero ** 2);

console.log(quadrados);




//========================================================
// 14. EXEMPLO COM FILTER()
//========================================================

const idades = [15, 18, 20, 12, 30];

const maiores = idades.filter(idade => idade >= 18);

console.log(maiores);




//========================================================
// 15. EXEMPLO COM REDUCE()
//========================================================

const lista = [10, 20, 30];

const total = lista.reduce((acumulador, numero) => {
    return acumulador + numero;
}, 0);

console.log(total);




//========================================================
// 16. DIFERENÇAS ENTRE FUNCTION E ARROW
//========================================================

/*

FUNÇÃO TRADICIONAL

function somar(a, b){
    return a + b;
}

--------------------------------------------

ARROW

const somar = (a, b) => a + b;

--------------------------------------------

A Arrow é menor e mais elegante,
mas existem diferenças importantes.
*/




//========================================================
// 17. A DIFERENÇA MAIS IMPORTANTE: THIS
//========================================================

/*
Function tradicional possui seu próprio "this".

Arrow Function NÃO cria um novo this.

Ela utiliza o this do ambiente onde foi criada.

Essa é a maior diferença entre elas.
*/




//========================================================
// 18. EXEMPLO COM FUNCTION
//========================================================

const pessoa1 = {

    nome: "Carlos",

    falar: function () {
        console.log(this.nome);
    }

};

pessoa1.falar();




//========================================================
// 19. EXEMPLO COM ARROW
//========================================================

/*
Observe que o comportamento do this
é diferente.

Por isso NÃO é recomendado usar Arrow
como método de objetos.
*/

const pessoa2 = {

    nome: "Ana",

    falar: () => {
        console.log(this.nome);
    }

};

pessoa2.falar();

// Em muitos ambientes retornará undefined.







//========================================================
// 20. QUANDO USAR ARROW
//========================================================

/*

Excelente para:

✔ callbacks

✔ map()

✔ filter()

✔ reduce()

✔ funções pequenas

✔ funções utilitárias

✔ código funcional

*/




//========================================================
// 21. QUANDO USAR FUNCTION
//========================================================

/*

Prefira function quando:

✔ criar métodos de objetos

✔ precisar do próprio this

✔ trabalhar com prototypes

✔ utilizar constructor

*/




//========================================================
// 22. BOAS PRÁTICAS
//========================================================

/*

✔ Use Arrow para callbacks.

✔ Não utilize Arrow em métodos de objetos.

✔ Prefira retorno implícito quando a função
for simples.

✔ Dê nomes significativos às variáveis que
recebem funções.

✔ Evite criar Arrow Functions enormes.

✔ Utilize const para armazenar funções.

*/




//========================================================
// 23. RESUMO FINAL
//========================================================

/*

FUNÇÃO ANÔNIMA

const soma = function(a, b){
    return a + b;
};

----------------------------

ARROW

const soma = (a, b) => {
    return a + b;
};

----------------------------

ARROW COM RETORNO IMPLÍCITO

const soma = (a, b) => a + b;

----------------------------

ARROW COM UM PARÂMETRO

const dobro = numero => numero * 2;

----------------------------

ARROW SEM PARÂMETROS

const ola = () => "Olá";

----------------------------

RETORNANDO OBJETO

const pessoa = () => ({
    nome: "João"
});

--------------------------------------------------

Regra prática:

• Callback → Arrow 

• map/filter/reduce → Arrow 

• Método de objeto → Function 

• Constructor → Function 

• Quando precisar de this → Function 

*/