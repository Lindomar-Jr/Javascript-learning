/*

# NAVEGAÇÃO DE ELEMENTOS - DOM

Este arquivo apresenta formas de navegar entre elementos
do DOM (Document Object Model).

A navegação pelo DOM permite acessar elementos relacionados
a um elemento que já foi selecionado.

Principais relações estudadas:

* parentElement      -> elemento pai
* children           -> elementos filhos
* firstElementChild  -> primeiro filho
* lastElementChild   -> último filho
* nextElementSibling -> próximo irmão
* previousElementSibling -> irmão anterior

Também veremos propriedades úteis como:

* childNodes
* parentNode
* firstChild
* lastChild
* closest()
* matches()
* contains()

---

## IMPORTANTE

Para executar os exemplos deste arquivo, imagine uma
estrutura HTML semelhante a esta:

<div id="container">
    <h2>Título</h2>

```
<ul id="lista">
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
</ul>

<button>Enviar</button>
```

</div>

===========================================================
*/

// =========================================================
// 1. ELEMENTO PAI - parentElement
// =========================================================

/*
parentElement retorna o elemento HTML que contém
diretamente o elemento selecionado.

Exemplo:

<div id="container">
    <p id="texto">Olá!</p>
</div>

O <p> possui o <div> como elemento pai.
*/

const texto = document.querySelector("#texto");

console.log(texto.parentElement);

// Resultado:
// <div id="container">...</div>

// ---------------------------------------------------------
// Por que isso é útil?
// ---------------------------------------------------------

/*
É muito útil quando você encontrou um elemento e precisa
subir um nível na estrutura HTML.

Por exemplo:

* encontrar o card que contém um botão;
* encontrar o formulário que contém um input;
* encontrar o container de determinado elemento.
  */

console.log(texto.parentElement.id);

// Resultado:
// "container"

// =========================================================
// 2. ELEMENTO PAI - parentNode
// =========================================================

/*
parentNode também retorna o nó pai.

Na maioria das situações envolvendo elementos HTML,
parentElement é mais apropriado porque deixa explícito
que estamos procurando um ELEMENTO HTML.

parentNode pode retornar outros tipos de nós, como
Document ou DocumentFragment.

Exemplo:
*/

console.log(texto.parentNode);

// ---------------------------------------------------------
// parentElement x parentNode
// ---------------------------------------------------------

/*
parentElement
-> procura especificamente o elemento pai.

parentNode
-> procura o nó pai.

Para manipulação comum de HTML:

```
parentElement
```

é geralmente a opção mais clara.
*/

// =========================================================
// 3. ELEMENTOS FILHOS - children
// =========================================================

/*
children retorna uma coleção contendo somente os
ELEMENTOS HTML filhos diretos.

Exemplo:

<div id="container">
    <h2>Título</h2>
    <p>Texto</p>
    <button>Enviar</button>
</div>
*/

const container = document.querySelector("#container");

console.log(container.children);

// Resultado semelhante a:
// HTMLCollection(3)
// [h2, p, button]

// ---------------------------------------------------------
// Acessando um filho específico
// ---------------------------------------------------------

/*
Como children possui os elementos em ordem, podemos
acessar um elemento pelo índice.

O índice começa em ZERO.

0 -> primeiro elemento
1 -> segundo elemento
2 -> terceiro elemento
*/

console.log(container.children[0]);

// <h2>Título</h2>

console.log(container.children[1]);

// <p>Texto</p>

// ---------------------------------------------------------
// Quantidade de elementos filhos
// ---------------------------------------------------------

console.log(container.children.length);

// Exemplo:
// 3

// =========================================================
// 4. PRIMEIRO ELEMENTO FILHO - firstElementChild
// =========================================================

/*
Retorna o primeiro elemento HTML filho.

Exemplo:

<div id="container">
    <h2>Título</h2>
    <p>Texto</p>
    <button>Enviar</button>
</div>
*/

console.log(container.firstElementChild);

// Resultado:
// <h2>Título</h2>

// ---------------------------------------------------------
// Quando usar?
// ---------------------------------------------------------

/*
É útil quando você não sabe ou não quer trabalhar
diretamente com índices.

Em vez de:

container.children[0]

podemos utilizar:

container.firstElementChild

Isso deixa a intenção do código mais clara.
*/

// =========================================================
// 5. ÚLTIMO ELEMENTO FILHO - lastElementChild
// =========================================================

/*
Retorna o último elemento HTML filho.

*/

console.log(container.lastElementChild);

// Resultado:
// <button>Enviar</button>

// ---------------------------------------------------------
// Exemplo prático
// ---------------------------------------------------------

/*
Imagine que você deseja encontrar o último item
de uma lista:

<ul id="lista">
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
</ul>
*/

const lista = document.querySelector("#lista");

console.log(lista.lastElementChild);

// <li>Item 3</li>

// =========================================================
// 6. PRÓXIMO IRMÃO - nextElementSibling
// =========================================================

/*
Elementos que possuem o mesmo elemento pai são chamados
de elementos irmãos (siblings).

Exemplo:

<div>
    <p id="primeiro">Primeiro</p>
    <p id="segundo">Segundo</p>
    <p id="terceiro">Terceiro</p>
</div>

O primeiro <p> possui o segundo <p> como próximo irmão.
*/

const primeiro = document.querySelector("#primeiro");

console.log(primeiro.nextElementSibling);

// Resultado:
// <p id="segundo">Segundo</p>

// ---------------------------------------------------------
// Avançando novamente
// ---------------------------------------------------------

const segundo = primeiro.nextElementSibling;

console.log(segundo.nextElementSibling);

// Resultado:
// <p id="terceiro">Terceiro</p>

// ---------------------------------------------------------
// IMPORTANTE
// ---------------------------------------------------------

/*
nextElementSibling ignora nós que não são elementos HTML.

Isso é diferente de nextSibling.

Para navegar entre elementos HTML, normalmente:

```
nextElementSibling
```

é a opção mais segura e intuitiva.
*/

// =========================================================
// 7. IRMÃO ANTERIOR - previousElementSibling
// =========================================================

/*
Faz o caminho contrário de nextElementSibling.

Ele retorna o elemento HTML imediatamente anterior.

*/

const terceiro = document.querySelector("#terceiro");

console.log(terceiro.previousElementSibling);

// Resultado:
// <p id="segundo">Segundo</p>

// Podemos continuar voltando:

const elementoAnterior = terceiro.previousElementSibling;

console.log(elementoAnterior.previousElementSibling);

// Resultado:
// <p id="primeiro">Primeiro</p>

/*

# RESUMO DA NAVEGAÇÃO

```
                PAI
                 ↑
                 |
          parentElement
                 |
                 |
  irmão anterior ← ELEMENTO → próximo irmão
  previousElementSibling       nextElementSibling
                 |
                 |
      firstElementChild
                 ↓
              FILHOS
                 |
      lastElementChild
```

Principais propriedades:

parentElement
-> sobe para o elemento pai.

children
-> retorna os elementos filhos.

firstElementChild
-> primeiro elemento filho.

lastElementChild
-> último elemento filho.

nextElementSibling
-> próximo elemento irmão.

previousElementSibling
-> elemento irmão anterior.
===========================

*/

// =========================================================
// 8. childNodes
// =========================================================

/*
childNodes também permite acessar os nós filhos.

Porém, existe uma diferença importante:

children
-> retorna apenas ELEMENTOS HTML.

childNodes
-> retorna TODOS os tipos de nós.

Isso pode incluir:

* elementos HTML;
* textos;
* comentários.

Exemplo:

<div>
    <p>Olá</p>
</div>

O espaço e a quebra de linha podem ser interpretados
como nós de texto.

Por isso, childNodes pode apresentar resultados que
surpreendem quem está começando.
*/

console.log(container.childNodes);

/*
Para manipulação comum de elementos HTML, prefira:

```
children
```

quando você realmente quer trabalhar apenas com
elementos HTML.
*/

// =========================================================
// 9. firstChild e lastChild
// =========================================================

/*
firstChild retorna o primeiro NÓ filho.

lastChild retorna o último NÓ filho.

Diferentemente de:

firstElementChild
lastElementChild

eles podem retornar nós de texto.

Exemplo:

*/

console.log(container.firstChild);
console.log(container.lastChild);

/*
Por causa dos espaços e quebras de linha do HTML,
o resultado pode não ser o elemento que você esperava.

Para trabalhar especificamente com elementos:

```
firstElementChild
lastElementChild
```

são geralmente mais apropriados.
*/

// =========================================================
// 10. closest()
// =========================================================

/*
closest() é extremamente importante na manipulação do DOM.

Ele procura o elemento mais próximo que corresponde
ao seletor CSS informado.

A busca começa no próprio elemento e depois sobe
pela hierarquia dos pais.

Exemplo:

<div class="card">
    <button id="botao">Excluir</button>
</div>
*/

const botao = document.querySelector("#botao");

const card = botao.closest(".card");

console.log(card);

// Resultado:
// <div class="card">...</div>

// ---------------------------------------------------------
// Por que closest() é útil?
// ---------------------------------------------------------

/*
Imagine uma lista com vários cards:

<div class="card">
    <h2>Produto</h2>
    <button>Excluir</button>
</div>

Quando o usuário clicar no botão, podemos descobrir
qual card contém aquele botão usando:

botao.closest(".card");

Isso é muito utilizado em eventos e delegação de eventos.
*/

// =========================================================
// 11. matches()
// =========================================================

/*
matches() verifica se um elemento corresponde a um
seletor CSS.

Retorna:

true
ou
false
*/

const elemento = document.querySelector("#container");

console.log(elemento.matches("#container"));

// true

console.log(elemento.matches(".card"));

// false

// ---------------------------------------------------------
// Exemplo
// ---------------------------------------------------------

/*
Podemos usar matches() para verificar características
de um elemento antes de executar alguma ação.
*/

if (elemento.matches("#container")) {
console.log("Este é o container principal.");
}

/*

12. contains()
    ===========================================================

contains() verifica se um elemento contém outro elemento
dentro da sua estrutura.

Retorna:

true
ou
false.

Exemplo:

<div id="container">
    <p id="texto">Olá!</p>
</div>
*/

console.log(container.contains(texto));

// true

/*
Também podemos verificar o contrário:

*/

console.log(texto.contains(container));

// false

/*
Isso é útil quando precisamos saber se determinado
elemento pertence a uma determinada área do DOM.
*/

// =========================================================
// 13. NAVEGAÇÃO COMBINADA
// =========================================================

/*
Uma das grandes vantagens da navegação DOM é combinar
várias propriedades.

Imagine:

<div id="container">

```
<h2>Título</h2>

<ul>
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
</ul>
```

</div>

Podemos encontrar o <ul> navegando a partir do container.
*/

const ul = container.querySelector("ul");

console.log(ul);

// Podemos encontrar o primeiro item:

const primeiroItem = ul.firstElementChild;

console.log(primeiroItem);

// E depois navegar para o próximo:

const segundoItem = primeiroItem.nextElementSibling;

console.log(segundoItem);

// E novamente:

const terceiroItem = segundoItem.nextElementSibling;

console.log(terceiroItem);

 /*

14. EXEMPLO PRÁTICO

Imagine que temos:

<div class="card">
    <h2>Produto</h2>
    <button>Excluir</button>
</div>

<!-- Podemos selecionar o botão e navegar até o card. -->

*/

const botaoExcluir = document.querySelector(".card button");

const cardProduto = botaoExcluir.closest(".card");

console.log(cardProduto);

/*
Esse tipo de navegação é muito comum em aplicações reais.

Por exemplo:

1. O usuário clica em um botão.
2. JavaScript identifica o botão.
3. O código encontra o elemento pai relacionado.
4. O JavaScript altera ou remove aquele elemento.
   */

// =========================================================
// 15. EXEMPLO PRÁTICO COM LISTA
// =========================================================

/*
HTML:

<ul id="lista-produtos">
    <li>Notebook</li>
    <li>Mouse</li>
    <li>Teclado</li>
</ul>
*/

const listaProdutos = document.querySelector("#lista-produtos");

// Primeiro elemento:

const primeiroProduto = listaProdutos.firstElementChild;

console.log(primeiroProduto);

// Último elemento:

const ultimoProduto = listaProdutos.lastElementChild;

console.log(ultimoProduto);

// Próximo elemento:

console.log(primeiroProduto.nextElementSibling);

// Elemento anterior:

console.log(ultimoProduto.previousElementSibling);

 /*

16. NAVEGAÇÃO x SELEÇÃO
    ===========================================================

É importante entender a diferença entre essas duas ideias.

## SELEÇÃO

Você procura um elemento diretamente no documento.

Exemplos:

document.querySelector()
document.querySelectorAll()
document.getElementById()

## NAVEGAÇÃO

Você já possui um elemento e caminha pela estrutura
do DOM a partir dele.

Exemplos:

elemento.parentElement
elemento.children
elemento.nextElementSibling
elemento.previousElementSibling
elemento.closest()

Pense assim:

SELEÇÃO:

```
"Quero encontrar este elemento."
```

NAVEGAÇÃO:

```
"Já encontrei este elemento.
 Agora quero chegar a outro elemento relacionado a ele."
```

===========================================================
*/

// =========================================================
// 17. ARMADILHA COMUM: CONFUNDIR children E childNodes
// =========================================================

/*
Para quem está começando, esta é uma das diferenças
mais importantes.

children:

```
retorna somente elementos HTML.
```

childNodes:

```
retorna todos os tipos de nós.
```

Exemplo:

<div>
    <p>Olá</p>
</div>

children pode retornar:

```
[p]
```

Enquanto childNodes pode incluir:

```
[text, p, text]
```

Por isso, quando seu objetivo é navegar por elementos
HTML, prefira as propriedades que possuem "Element"
no nome.
*/

// =========================================================
// 18. BOA PRÁTICA
// =========================================================

/*
Prefira propriedades que expressem claramente sua intenção.

Exemplo:

// Mais específico:
elemento.parentElement

// Menos específico:
elemento.parentNode

Outro exemplo:

// Primeiro ELEMENTO:
elemento.firstElementChild

// Primeiro NÓ:
elemento.firstChild

A clareza é importante principalmente quando outra pessoa
precisar ler ou manter seu código no futuro.
*/

// =========================================================
// RESUMO FINAL
// =========================================================

/*

## SELEÇÃO

document.querySelector()
-> seleciona um único elemento.

document.querySelectorAll()
-> seleciona vários elementos.

## NAVEGAÇÃO

parentElement
-> elemento pai.

parentNode
-> nó pai.

children
-> elementos filhos.

childNodes
-> todos os nós filhos.

firstElementChild
-> primeiro elemento filho.

lastElementChild
-> último elemento filho.

firstChild
-> primeiro nó filho.

lastChild
-> último nó filho.

nextElementSibling
-> próximo elemento irmão.

previousElementSibling
-> elemento irmão anterior.

closest()
-> procura o ancestral mais próximo que corresponde
ao seletor informado.

matches()
-> verifica se o elemento corresponde a um seletor.

contains()
-> verifica se um elemento contém outro.

---

## REGRA MENTAL PARA MEMORIZAR

parent
↑
|
previous ← ELEMENTO → next
|
↓
children

parent     = sobe
children   = desce
previous   = volta
next       = avança

===========================================================
*/
