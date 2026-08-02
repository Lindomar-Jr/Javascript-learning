/*
=========================================================
GUIA DE ESTUDOS - ARRAYS EM JAVASCRIPT
=========================================================

O que é um Array?

Um Array é uma estrutura de dados utilizada para armazenar
vários valores em uma única variável.

Imagine uma estante com várias prateleiras.
Cada prateleira possui uma posição (índice).

Exemplo:

Índice:    0        1        2
          -----------------------
Array:   "Ana"   "Pedro"  "Lucas"

O primeiro elemento sempre começa na posição ZERO.

=========================================================
*/

//=========================================================
// CRIANDO ARRAYS
//=========================================================

const frutas = ["Maçã", "Banana", "Uva"];

console.log(frutas);

// Também é possível criar um array vazio

const numeros = [];

console.log(numeros);

//=========================================================
// ACESSANDO ELEMENTOS
//=========================================================

const carros = ["Gol", "Civic", "Corolla"];

console.log(carros[0]); // Gol
console.log(carros[1]); // Civic
console.log(carros[2]); // Corolla

/*
Sempre utilize o índice para acessar um elemento.

Lembre-se:

0 = primeiro
1 = segundo
2 = terceiro
*/

//=========================================================
// ALTERANDO VALORES
//=========================================================

const cores = ["Azul", "Verde", "Vermelho"];

cores[1] = "Amarelo";

console.log(cores);

/*
Resultado:

["Azul", "Amarelo", "Vermelho"]
*/

//=========================================================
// DESCOBRINDO O TAMANHO DO ARRAY
//=========================================================

const estados = ["RJ", "SP", "MG", "ES"];

console.log(estados.length);

/*
length retorna a quantidade de elementos.

Resultado:

4
*/

//=========================================================
// ADICIONANDO ELEMENTOS
//=========================================================

const animais = ["Cachorro", "Gato"];

// Adiciona no final

animais.push("Coelho");

console.log(animais);

/*
push()

Adiciona um ou mais elementos no final do array.
*/

//---------------------------------------------------------

// Adiciona no início

animais.unshift("Papagaio");

console.log(animais);

/*
unshift()

Adiciona elementos no começo do array.
*/

//=========================================================
// REMOVENDO ELEMENTOS
//=========================================================

const letras = ["A", "B", "C", "D"];

// Remove o último

letras.pop();

console.log(letras);

/*
pop()

Remove o último elemento.
*/

//---------------------------------------------------------

// Remove o primeiro

letras.shift();

console.log(letras);

/*
shift()

Remove o primeiro elemento.
*/

//=========================================================
// LOCALIZANDO UM ELEMENTO
//=========================================================

const linguagens = [
    "HTML",
    "CSS",
    "JavaScript",
    "Python"
];

console.log(linguagens.indexOf("JavaScript"));

/*
indexOf()

Retorna o índice onde o elemento está.

Caso não exista:

retorna -1
*/

console.log(linguagens.indexOf("Java"));


//=========================================================
// VERIFICANDO SE UM ELEMENTO EXISTE
//=========================================================

console.log(linguagens.includes("Python"));
console.log(linguagens.includes("Java"));

/*
includes()

Retorna:

true
ou

false
*/

//=========================================================
// PERCORRENDO ARRAYS
//=========================================================

const nomes = [
    "Ana",
    "Pedro",
    "Carlos"
];

//----------------------------
// FOR tradicional
//----------------------------

for (let i = 0; i < nomes.length; i++) {

    console.log(nomes[i]);

}

/*
Muito utilizado quando precisamos do índice.
*/

//----------------------------
// FOR...OF
//----------------------------

for (const nome of nomes) {

    console.log(nome);

}

/*
Percorre apenas os valores.
Mais simples para leitura.
*/

//----------------------------
// forEach()
//----------------------------

nomes.forEach(function(nome, indice){

    console.log(indice, nome);

});

/*
forEach()

Executa uma função para cada elemento.
*/

//=========================================================
// CONCATENANDO ARRAYS
//=========================================================

const frontend = [
    "HTML",
    "CSS"
];

const backend = [
    "Node.js",
    "MySQL"
];

const tecnologias = frontend.concat(backend);

console.log(tecnologias);

/*
concat()

Une dois ou mais arrays.
*/

//=========================================================
// SPREAD OPERATOR (...)
//=========================================================

const numeros1 = [1,2,3];
const numeros2 = [4,5,6];

const todos = [...numeros1, ...numeros2];

console.log(todos);

/*
Hoje é a forma mais utilizada para unir arrays.
*/

//=========================================================
// SLICE()
//=========================================================

const meses = [
    "Jan",
    "Fev",
    "Mar",
    "Abr",
    "Mai"
];

console.log(meses.slice(1,4));

/*
slice(início, fim)

O elemento do fim NÃO é incluído.

Resultado:

["Fev","Mar","Abr"]
*/

//=========================================================
// SPLICE()
//=========================================================

const frutas2 = [
    "Maçã",
    "Banana",
    "Uva",
    "Pera"
];

// Remove um elemento

frutas2.splice(1,1);

console.log(frutas2);

/*
splice(início, quantidade)

Remove elementos do array original.
*/

//---------------------------------------------------------

const frutas3 = [
    "Maçã",
    "Banana",
    "Uva"
];

// Remove e adiciona

frutas3.splice(1,1,"Melancia");

console.log(frutas3);

/*
Resultado:

["Maçã","Melancia","Uva"]
*/

//=========================================================
// REVERSE()
//=========================================================

const lista = [1,2,3,4];

lista.reverse();

console.log(lista);

/*
Inverte a ordem do array.
*/

//=========================================================
// SORT()
//=========================================================

const nomes2 = [
    "Lucas",
    "Ana",
    "Pedro"
];

nomes2.sort();

console.log(nomes2);

/*
Ordena alfabeticamente.
*/

//---------------------------------------------------------

const valores = [10,2,100,25];

// Forma correta para números

valores.sort((a,b) => a - b);

console.log(valores);

/*
Resultado:

2
10
25
100
*/

//=========================================================
// MAP()
//=========================================================

const precos = [10,20,30];

const dobro = precos.map(function(valor){

    return valor * 2;

});

console.log(dobro);

/*
map()

Cria um NOVO array.

Não altera o original.
*/

//=========================================================
// FILTER()
//=========================================================

const idades = [12,18,20,15,30];

const maiores = idades.filter(function(idade){

    return idade >= 18;

});

console.log(maiores);

/*
filter()

Retorna apenas os elementos
que atendem uma condição.
*/

//=========================================================
// FIND()
//=========================================================

const pessoas = [
    "Ana",
    "Carlos",
    "João"
];

const resultado = pessoas.find(function(nome){

    return nome === "Carlos";

});

console.log(resultado);

/*
find()

Retorna o PRIMEIRO elemento encontrado.
*/

//=========================================================
// SOME()
//=========================================================

const notas = [5,6,9];

const aprovado = notas.some(function(nota){

    return nota >= 7;

});

console.log(aprovado);

/*
some()

Retorna true se PELO MENOS UM
elemento atender a condição.
*/

//=========================================================
// EVERY()
//=========================================================

const numerosPositivos = [2,4,6,8];

const todosPositivos = numerosPositivos.every(function(numero){

    return numero > 0;

});

console.log(todosPositivos);

/*
every()

Retorna true apenas se TODOS
atenderem a condição.
*/

//=========================================================
// REDUCE()
//=========================================================

const vendas = [100,200,300];

const total = vendas.reduce(function(acumulador, valor){

    return acumulador + valor;

},0);

console.log(total);

/*
reduce()

Reduz um array para um único valor.

Muito utilizado para:

- Somatórios
- Médias
- Estatísticas
- Agrupamentos
*/

//=========================================================
// ARRAY DE OBJETOS
//=========================================================

const usuarios = [

    {
        nome: "Ana",
        idade: 22
    },

    {
        nome: "Pedro",
        idade: 30
    },

    {
        nome: "Carlos",
        idade: 27
    }

];

console.log(usuarios[0].nome);
console.log(usuarios[1].idade);

/*
Muito comum em APIs e bancos de dados.
*/

//=========================================================
// BOAS PRÁTICAS
//=========================================================

/*

✔ Dê nomes claros aos arrays.

✔ Utilize const quando não for reatribuir
o array.

✔ Prefira métodos como:

map()
filter()
find()
reduce()

em vez de loops complexos.

✔ Evite alterar o array original sem necessidade.

✔ Use includes() para verificar existência.

✔ Use for...of quando precisar apenas dos valores.

✔ Use for tradicional quando precisar do índice.

*/

//=========================================================
// RESUMO DOS PRINCIPAIS MÉTODOS
//=========================================================

/*

push()       -> adiciona no final

pop()        -> remove do final

unshift()    -> adiciona no início

shift()      -> remove do início

length       -> quantidade de elementos

indexOf()    -> encontra o índice

includes()   -> verifica existência

concat()     -> une arrays

slice()      -> copia parte do array

splice()     -> remove/adiciona elementos

sort()       -> ordena

reverse()    -> inverte

map()        -> transforma

filter()     -> filtra

find()       -> encontra um elemento

some()       -> verifica se algum atende

every()      -> verifica se todos atendem

reduce()     -> reduz para um único valor

forEach()    -> percorre o array

for...of     -> percorre os valores

*/