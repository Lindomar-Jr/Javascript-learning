"use strict";

/*
1. Criação e acesso a Arrays
2. Propriedade length
3. Métodos úteis
4. forEach()
5. map()
6. filter()
7. reduce()
8. find()
9. some()
10. every()
11. Encadeamento de métodos
12. Diferenças entre os principais métodos

===========================================================
*/

// =========================================================
// 1. CRIANDO UM ARRAY
// =========================================================

/*
Um Array pode armazenar vários valores.

Os valores ficam organizados por índices.

IMPORTANTE:
O primeiro índice de um Array é 0.
*/

const frutas = ["Maçã", "Banana", "Laranja"];

console.log(frutas);

// =========================================================
// 2. ACESSANDO ELEMENTOS
// =========================================================

/*
Podemos acessar um elemento utilizando seu índice.

Índices:

0 -> Maçã
1 -> Banana
2 -> Laranja
*/

console.log(frutas[0]); // Maçã
console.log(frutas[1]); // Banana
console.log(frutas[2]); // Laranja

// =========================================================
// 3. ALTERANDO ELEMENTOS
// =========================================================

/*
Podemos alterar um elemento informando seu índice.
*/

frutas[1] = "Morango";

console.log(frutas);

// ["Maçã", "Morango", "Laranja"]

// =========================================================
// 4. LENGTH
// =========================================================

/*
A propriedade length informa a quantidade de elementos
existentes no Array.
*/

const nomes = ["João", "Maria", "Carlos"];

console.log(nomes.length); // 3

/*
Também podemos utilizar length para acessar o último
elemento do Array.

Como os índices começam em 0, usamos:

length - 1
*/

console.log(nomes[nomes.length - 1]);

// Carlos

// =========================================================
// 5. PUSH()
// =========================================================

/*
push() adiciona um novo elemento no FINAL do Array.
*/

const animais = ["Cachorro", "Gato"];

animais.push("Cavalo");

console.log(animais);

// ["Cachorro", "Gato", "Cavalo"]

// =========================================================
// 6. UNSHIFT()
// =========================================================

/*
unshift() adiciona um novo elemento no INÍCIO do Array.
*/

animais.unshift("Coelho");

console.log(animais);

// ["Coelho", "Cachorro", "Gato", "Cavalo"]

// =========================================================
// 7. POP()
// =========================================================

/*
pop() remove o ÚLTIMO elemento do Array.
*/

const numeros = [10, 20, 30, 40];

numeros.pop();

console.log(numeros);

// [10, 20, 30]

// =========================================================
// 8. SHIFT()
// =========================================================

/*
shift() remove o PRIMEIRO elemento do Array.
*/

numeros.shift();

console.log(numeros);

// [20, 30]

// =========================================================
// 9. INCLUDES()
// =========================================================

/*
includes() verifica se determinado valor existe no Array.

Retorna:

true  -> encontrou
false -> não encontrou
*/

const tecnologias = ["JavaScript", "Python", "SQL"];

console.log(tecnologias.includes("JavaScript"));
// true

console.log(tecnologias.includes("Java"));
// false

// =========================================================
// 10. INDEXOF()
// =========================================================

/*
indexOf() retorna o índice onde determinado elemento
foi encontrado.

Se o elemento não existir, retorna -1.
*/

console.log(tecnologias.indexOf("Python"));
// 1

console.log(tecnologias.indexOf("Java"));
// -1

// =========================================================
// 11. JOIN()
// =========================================================

/*
join() transforma os elementos do Array em uma String.

Podemos informar qual separador será utilizado.
*/

const palavras = ["JavaScript", "é", "uma", "linguagem"];

const frase = palavras.join(" ");

console.log(frase);

// "JavaScript é uma linguagem"

// =========================================================
// 12. SLICE()
// =========================================================

/*
slice() cria uma cópia de uma parte do Array.

IMPORTANTE:
slice() NÃO modifica o Array original.
*/

const linguagens = [
  "JavaScript",
  "Python",
  "Java",
  "C#",
  "PHP",
];

const algumasLinguagens = linguagens.slice(0, 3);

console.log(algumasLinguagens);

// ["JavaScript", "Python", "Java"]

console.log(linguagens);

// O Array original continua intacto.

// =========================================================
// 13. SPLICE()
// =========================================================

/*
splice() permite remover, adicionar ou substituir
elementos.

Sintaxe:

array.splice(inicio, quantidade);

IMPORTANTE:
splice() MODIFICA o Array original.
*/

const frutas2 = ["Maçã", "Banana", "Laranja"];

frutas2.splice(1, 1);

console.log(frutas2);

// ["Maçã", "Laranja"]

// =========================================================
// 14. FOREACH()
// =========================================================

/*
forEach() é utilizado para percorrer um Array.

Ele executa uma função para cada elemento.

Exemplo:
*/

const alunos = ["João", "Maria", "Carlos"];

alunos.forEach(function (aluno) {
  console.log(aluno);
});

/*
Também podemos utilizar uma Arrow Function.
*/

alunos.forEach((aluno) => {
  console.log(`Aluno: ${aluno}`);
});

/*
A função callback também pode receber o índice.

Primeiro parâmetro:
-> elemento atual

Segundo parâmetro:
-> índice do elemento
*/

alunos.forEach((aluno, indice) => {
  console.log(`${indice}: ${aluno}`);
});

/*
IMPORTANTE:

forEach() é utilizado quando queremos EXECUTAR UMA AÇÃO
para cada elemento.

Ele não é utilizado para criar um novo Array.
*/

// =========================================================
// 15. MAP()
// =========================================================

/*
map() também percorre o Array.

A diferença é que map() cria e retorna um NOVO ARRAY.

Exemplo:

Queremos dobrar todos os números.
*/

const numeros2 = [1, 2, 3, 4, 5];

const numerosDobrados = numeros2.map((numero) => {
  return numero * 2;
});

console.log(numerosDobrados);

// [2, 4, 6, 8, 10]

/*
O Array original continua igual.
*/

console.log(numeros2);

// [1, 2, 3, 4, 5]

/*
Podemos pensar:

forEach()
-> "Faça alguma coisa para cada elemento."

map()
-> "Transforme cada elemento e me devolva um novo Array."
*/

// =========================================================
// 16. MAP() COM STRINGS
// =========================================================

const nomes2 = ["ana", "carlos", "pedro"];

const nomesMaiusculos = nomes2.map((nome) => {
  return nome.toUpperCase();
});

console.log(nomesMaiusculos);

// ["ANA", "CARLOS", "PEDRO"]

// =========================================================
// 17. MAP() COM OBJETOS
// =========================================================

/*
É muito comum encontrarmos Arrays contendo objetos.
*/

const produtos = [
  { nome: "Notebook", preco: 3500 },
  { nome: "Mouse", preco: 100 },
  { nome: "Teclado", preco: 200 },
];

/*
Podemos utilizar map() para criar um Array contendo
somente os nomes dos produtos.
*/

const nomesProdutos = produtos.map((produto) => {
  return produto.nome;
});

console.log(nomesProdutos);

// ["Notebook", "Mouse", "Teclado"]

// =========================================================
// 18. FILTER()
// =========================================================

/*
filter() é utilizado para FILTRAR elementos.

Ele cria um NOVO ARRAY contendo somente os elementos
que atendem determinada condição.

A callback precisa retornar:

true
-> elemento será incluído.

false
-> elemento será ignorado.
*/

const idades = [12, 18, 25, 15, 30, 10];

const maioresDeIdade = idades.filter((idade) => {
  return idade >= 18;
});

console.log(maioresDeIdade);

// [18, 25, 30]

/*
Podemos pensar:

filter()
-> "Quais elementos atendem a essa condição?"
*/

// =========================================================
// 19. FILTER() COM OBJETOS
// =========================================================

const funcionarios = [
  { nome: "João", salario: 3000 },
  { nome: "Maria", salario: 5000 },
  { nome: "Carlos", salario: 2500 },
];

/*
Queremos encontrar funcionários que ganham
mais de R$ 3.000.
*/

const funcionariosComSalarioAlto = funcionarios.filter((funcionario) => {
  return funcionario.salario > 3000;
});

console.log(funcionariosComSalarioAlto);

/*
Resultado:

[
  {
    nome: "Maria",
    salario: 5000,
  },
]
*/

// =========================================================
// 20. REDUCE()
// =========================================================

/*
reduce() é utilizado quando queremos REDUZIR vários
elementos a um único resultado.

É muito utilizado para:

- somar valores;
- calcular totais;
- calcular médias;
- contar elementos;
- acumular informações;
- transformar dados.

A estrutura básica é:

array.reduce((acumulador, elementoAtual) => {
  return novoValor;
}, valorInicial);
*/

// =========================================================
// 21. REDUCE() - SOMANDO VALORES
// =========================================================

const valores = [10, 20, 30, 40];

const soma = valores.reduce((acumulador, valorAtual) => {
  return acumulador + valorAtual;
}, 0);

console.log(soma);

// 100

/*
Vamos entender o que aconteceu:

Valor inicial do acumulador:
0

Primeira execução:
0 + 10 = 10

Segunda execução:
10 + 20 = 30

Terceira execução:
30 + 30 = 60

Quarta execução:
60 + 40 = 100

Resultado final:
100
*/

// =========================================================
// 22. REDUCE() - CALCULANDO MÉDIA
// =========================================================

const notas = [8, 7, 10, 9];

const totalNotas = notas.reduce((acumulador, nota) => {
  return acumulador + nota;
}, 0);

const media = totalNotas / notas.length;

console.log(media);

// 8.5

// =========================================================
// 23. REDUCE() COM OBJETOS
// =========================================================

const vendas = [
  { produto: "Notebook", valor: 3500 },
  { produto: "Mouse", valor: 100 },
  { produto: "Teclado", valor: 200 },
];

/*
Queremos descobrir o valor total das vendas.

O acumulador começa em 0.

A cada execução adicionamos o valor da venda.
*/

const totalVendas = vendas.reduce((total, venda) => {
  return total + venda.valor;
}, 0);

console.log(totalVendas);

// 3800

// =========================================================
// 24. FIND()
// =========================================================

/*
find() procura o PRIMEIRO elemento que atende
determinada condição.
*/

const usuarios = [
  { id: 1, nome: "João" },
  { id: 2, nome: "Maria" },
  { id: 3, nome: "Carlos" },
];

const usuarioEncontrado = usuarios.find((usuario) => {
  return usuario.id === 2;
});

console.log(usuarioEncontrado);

// { id: 2, nome: "Maria" }

// =========================================================
// 25. FINDINDEX()
// =========================================================

/*
findIndex() retorna o índice do primeiro elemento
que atende determinada condição.
*/

const indiceUsuario = usuarios.findIndex((usuario) => {
  return usuario.id === 3;
});

console.log(indiceUsuario);

// 2

// =========================================================
// 26. SOME()
// =========================================================

/*
some() verifica se PELO MENOS UM elemento atende
determinada condição.

Retorna true ou false.
*/

const idades2 = [12, 15, 20, 14];

const existeMaiorDeIdade = idades2.some((idade) => {
  return idade >= 18;
});

console.log(existeMaiorDeIdade);

// true

// =========================================================
// 27. EVERY()
// =========================================================

/*
every() verifica se TODOS os elementos atendem
determinada condição.

Retorna true ou false.
*/

const idades3 = [20, 25, 30];

const todosSaoMaiores = idades3.every((idade) => {
  return idade >= 18;
});

console.log(todosSaoMaiores);

// true

// =========================================================
// 28. SORT()
// =========================================================

/*
sort() organiza os elementos de um Array.

Para números, precisamos informar uma função
de comparação.

ORDEM CRESCENTE:
*/

const numeros3 = [30, 5, 100, 20];

numeros3.sort((a, b) => {
  return a - b;
});

console.log(numeros3);

// [5, 20, 30, 100]

/*
ORDEM DECRESCENTE:
*/

numeros3.sort((a, b) => {
  return b - a;
});

console.log(numeros3);

// [100, 30, 20, 5]

// =========================================================
// 29. ENCADEANDO MÉTODOS
// =========================================================

/*
Uma das características mais poderosas dos métodos
de Array é a possibilidade de encadear operações.

Exemplo:

Queremos:

1. Encontrar produtos acima de R$ 1.000.
2. Pegar somente seus nomes.

Podemos fazer:

filter()
    ↓
map()
*/

const produtos2 = [
  { nome: "Notebook", preco: 3500 },
  { nome: "Mouse", preco: 100 },
  { nome: "Teclado", preco: 200 },
  { nome: "Monitor", preco: 1500 },
];

const produtosCaros = produtos2
  .filter((produto) => {
    return produto.preco > 1000;
  })
  .map((produto) => {
    return produto.nome;
  });

console.log(produtosCaros);

// ["Notebook", "Monitor"]

// =========================================================
// 30. FILTER + MAP + REDUCE
// =========================================================

/*
Agora vamos combinar três métodos.

Problema:

Queremos:

1. Encontrar produtos acima de R$ 1.000.
2. Pegar somente seus preços.
3. Somar os preços.
*/

const produtos3 = [
  { nome: "Notebook", preco: 3500 },
  { nome: "Mouse", preco: 100 },
  { nome: "Monitor", preco: 1500 },
  { nome: "Teclado", preco: 200 },
];

const totalProdutosCaros = produtos3
  // Primeiro: selecionamos os produtos
  .filter((produto) => {
    return produto.preco > 1000;
  })
  // Segundo: pegamos somente os preços
  .map((produto) => {
    return produto.preco;
  })
  // Terceiro: somamos os preços
  .reduce((total, preco) => {
    return total + preco;
  }, 0);

console.log(totalProdutosCaros);

// 5000

/*
Fluxo:

produtos3
    ↓
filter()
    ↓
produtos acima de R$ 1.000
    ↓
map()
    ↓
somente os preços
    ↓
reduce()
    ↓
soma dos preços
    ↓
5000
*/

// =========================================================
// 31. DIFERENÇA ENTRE OS PRINCIPAIS MÉTODOS
// =========================================================

/*
-----------------------------------------------------------
FOREACH()
-----------------------------------------------------------

Utilizado para percorrer o Array e executar uma ação.

Retorno:
undefined


-----------------------------------------------------------
MAP()
-----------------------------------------------------------

Utilizado para transformar os elementos.

Retorno:
Novo Array.


-----------------------------------------------------------
FILTER()
-----------------------------------------------------------

Utilizado para selecionar elementos que atendem
determinada condição.

Retorno:
Novo Array.


-----------------------------------------------------------
REDUCE()
-----------------------------------------------------------

Utilizado para acumular valores e gerar um resultado.

Retorno:
Um único resultado, que pode ser:

- número;
- string;
- objeto;
- Array;
- etc.


-----------------------------------------------------------

*/

// =========================================================
// 32. COMO ESCOLHER O MÉTODO?
// =========================================================

/*
Faça estas perguntas:

-----------------------------------------------------------

"Quero apenas percorrer o Array e executar alguma ação?"

-> forEach()


-----------------------------------------------------------

"Quero transformar cada elemento?"

-> map()


-----------------------------------------------------------

"Quero selecionar alguns elementos?"

-> filter()


-----------------------------------------------------------

"Quero transformar vários elementos em um resultado?"

-> reduce()


-----------------------------------------------------------

"Quero encontrar um elemento?"

-> find()


-----------------------------------------------------------

"Quero saber se pelo menos um elemento atende
uma condição?"

-> some()


-----------------------------------------------------------

"Quero saber se todos os elementos atendem
uma condição?"

-> every()


-----------------------------------------------------------
*/

// =========================================================
// 33. DESAFIOS PARA PRATICAR
// =========================================================

/*
Agora é hora de praticar.

Tente resolver os desafios abaixo sem olhar uma solução.

*/

const vendasDesafio = [
  { produto: "Notebook", valor: 3500, quantidade: 2 },
  { produto: "Mouse", valor: 100, quantidade: 5 },
  { produto: "Monitor", valor: 1500, quantidade: 3 },
  { produto: "Teclado", valor: 200, quantidade: 4 },
];

/*
DESAFIO 1
-----------------------------------------------------------

Utilize map() para criar um Array contendo somente
os nomes dos produtos.

Resultado esperado:

[
  "Notebook",
  "Mouse",
  "Monitor",
  "Teclado"
]
*/

/*
DESAFIO 2
-----------------------------------------------------------

Utilize filter() para encontrar produtos cujo valor
seja maior que R$ 1.000.
*/

/*
DESAFIO 3
-----------------------------------------------------------

Utilize reduce() para calcular o valor total das vendas.

Lembre-se:

valor * quantidade
*/

/*
DESAFIO 4
-----------------------------------------------------------

Utilize filter() + map() para criar um Array contendo
somente os nomes dos produtos com valor acima de R$ 500.
*/

/*
DESAFIO 5
-----------------------------------------------------------

Utilize reduce() para descobrir a quantidade total
de produtos vendidos.
*/

/*
===========================================================
RESUMO
===========================================================

forEach()
-> percorre e executa uma ação.

map()
-> transforma os elementos.

filter()
-> seleciona elementos.

reduce()
-> acumula valores.

find()
-> encontra um elemento.

some()
-> verifica se algum elemento atende uma condição.

every()
-> verifica se todos os elementos atendem uma condição.


MEMORIZAÇÃO:

forEach = FAÇA
map     = TRANSFORME
filter  = ESCOLHA
reduce  = ACUMULE

===========================================================
*/
