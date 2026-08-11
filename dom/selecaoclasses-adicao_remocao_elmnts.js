/*
===========================================================
SELEÇÃO DE CLASSES, ATRIBUTOS E ADIÇÃO/REMOÇÃO DE ELEMENTOS
===========================================================

Este arquivo apresenta recursos importantes da API DOM para:

1. Selecionar elementos por classe
2. Trabalhar com classList
3. Criar novos elementos
4. Adicionar elementos ao DOM
5. Remover elementos do DOM
6. Trabalhar com atributos personalizados (data-*)
7. Usar dataset
8. Alterar atributos
9. Verificar a existência de classes e atributos

-----------------------------------------------------------
IMPORTANTE
-----------------------------------------------------------

DOM significa Document Object Model.

Quando o navegador carrega um HTML, ele transforma sua
estrutura em uma árvore de objetos que o JavaScript consegue
acessar e modificar.

Exemplo:

HTML:
<div class="card">Produto</div>

JavaScript:
const card = document.querySelector(".card");

A variável "card" passa a representar aquele elemento HTML.
*/


// =========================================================
// 1. SELECIONANDO UM ELEMENTO POR CLASSE
// =========================================================

/*
querySelector() permite selecionar um elemento utilizando
um seletor CSS.

Para selecionar uma classe, utilizamos "." antes do nome.

HTML:

<div class="card">
    Produto
</div>

JavaScript:
*/

const card = document.querySelector(".card");

console.log(card);

/*
O querySelector() retorna APENAS O PRIMEIRO elemento
que encontrar com aquela classe.

Se tivermos:

<div class="card">Produto 1</div>
<div class="card">Produto 2</div>
<div class="card">Produto 3</div>

querySelector(".card") retornará somente o primeiro.
*/


// =========================================================
// 2. SELECIONANDO VÁRIOS ELEMENTOS POR CLASSE
// =========================================================

/*
Quando queremos selecionar TODOS os elementos que possuem
determinada classe, podemos utilizar:

querySelectorAll()

Exemplo:

HTML:

<div class="card">Produto 1</div>
<div class="card">Produto 2</div>
<div class="card">Produto 3</div>
*/

const cards = document.querySelectorAll(".card");

console.log(cards);

/*
O resultado será uma NodeList contendo todos os elementos
encontrados.

Podemos percorrer esses elementos utilizando forEach().
*/

cards.forEach((card) => {
    console.log(card);
});

/*
Isso é muito útil quando queremos aplicar alguma operação
em vários elementos ao mesmo tempo.

Por exemplo:

cards.forEach((card) => {
    card.classList.add("ativo");
});

Cada elemento encontrado receberia a classe "ativo".
*/


// =========================================================
// 3. getElementsByClassName()
// =========================================================

/*
Outra forma de selecionar elementos por classe é:

getElementsByClassName()

Exemplo:
*/

const elementos = document.getElementsByClassName("card");

console.log(elementos);

/*
Diferentemente de querySelectorAll(), esse método retorna
uma HTMLCollection.

Na prática, querySelectorAll() costuma ser mais conveniente
porque trabalha com seletores CSS e retorna uma NodeList.

Por exemplo:

document.querySelectorAll(".card");

Também permite utilizar seletores mais complexos:

document.querySelectorAll(".card.produto");
*/


// =========================================================
// 4. TRABALHANDO COM classList
// =========================================================

/*
classList fornece métodos para manipular as classes
de um elemento.

É uma das ferramentas mais utilizadas quando trabalhamos
com interatividade no DOM.
*/


// ---------------------------------------------------------
// classList.add()
// ---------------------------------------------------------

/*
Adiciona uma classe ao elemento.

HTML:

<div class="card">
    Produto
</div>
*/

card.classList.add("ativo");

/*
Agora o HTML ficará aproximadamente assim:

<div class="card ativo">
    Produto
</div>
*/


// ---------------------------------------------------------
// classList.remove()
// ---------------------------------------------------------

/*
Remove uma classe do elemento.
*/

card.classList.remove("ativo");

/*
Agora a classe "ativo" foi removida.
*/


// ---------------------------------------------------------
// classList.toggle()
// ---------------------------------------------------------

/*
toggle() alterna uma classe.

Se a classe NÃO existir:
    → adiciona

Se a classe JÁ existir:
    → remove

Exemplo:
*/

card.classList.toggle("ativo");

/*
Esse recurso é muito utilizado para:

- abrir/fechar menus
- ativar/desativar botões
- mostrar/esconder elementos
- criar temas
- controlar estados visuais
*/


// ---------------------------------------------------------
// classList.contains()
// ---------------------------------------------------------

/*
Verifica se o elemento possui determinada classe.

Retorna:

true  → possui a classe
false → não possui a classe
*/

const possuiClasse = card.classList.contains("ativo");

console.log(possuiClasse);


// ---------------------------------------------------------
// classList.replace()
// ---------------------------------------------------------

/*
Substitui uma classe por outra.

Sintaxe:

elemento.classList.replace("classe-antiga", "classe-nova");
*/

card.classList.replace("card", "produto");

/*
Agora:

class="card"

passaria a ser:

class="produto"
*/


// =========================================================
// 5. CRIANDO UM NOVO ELEMENTO
// =========================================================

/*
Para criar um novo elemento HTML utilizando JavaScript,
utilizamos:

document.createElement()

Exemplo:
*/

const novoParagrafo = document.createElement("p");

console.log(novoParagrafo);

/*
Neste momento o elemento foi criado na memória.

IMPORTANTE:

createElement() NÃO adiciona automaticamente o elemento
à página.

Ele apenas cria o elemento.

Precisamos posteriormente adicioná-lo ao DOM.
*/


// =========================================================
// 6. ADICIONANDO TEXTO AO ELEMENTO
// =========================================================

/*
Podemos utilizar textContent para definir o texto.
*/

novoParagrafo.textContent = "Este parágrafo foi criado com JavaScript.";

console.log(novoParagrafo);

/*
Agora temos:

<p>Este parágrafo foi criado com JavaScript.</p>

Porém, ele ainda não está na página.
*/


// =========================================================
// 7. ADICIONANDO UMA CLASSE AO NOVO ELEMENTO
// =========================================================

/*
Podemos utilizar classList.add() normalmente em um
elemento que acabou de ser criado.
*/

novoParagrafo.classList.add("mensagem");


// =========================================================
// 8. ADICIONANDO UM ELEMENTO COM append()
// =========================================================

/*
Para colocar o elemento dentro de outro elemento,
podemos utilizar append().

Primeiro precisamos selecionar o elemento que receberá
o novo conteúdo.

Exemplo:

HTML:

<div class="container"></div>
*/

const container = document.querySelector(".container");

container.append(novoParagrafo);

/*
Agora o HTML ficará:

<div class="container">
    <p class="mensagem">
        Este parágrafo foi criado com JavaScript.
    </p>
</div>
*/


// =========================================================
// 9. append() TAMBÉM PODE ADICIONAR TEXTO
// =========================================================

/*
append() aceita elementos HTML e também strings.
*/

container.append("Texto adicionado diretamente.");

/*
Isso é diferente de appendChild(), que aceita apenas
nós (nodes) do DOM.
*/


// =========================================================
// 10. appendChild()
// =========================================================

/*
Outra maneira de adicionar um elemento é:

appendChild()

Exemplo:
*/

const outroParagrafo = document.createElement("p");

outroParagrafo.textContent = "Outro parágrafo.";

container.appendChild(outroParagrafo);

/*
appendChild() adiciona o elemento como último filho
do elemento selecionado.
*/


// =========================================================
// 11. prepend()
// =========================================================

/*
prepend() adiciona o elemento como PRIMEIRO filho.

Exemplo:
*/

const titulo = document.createElement("h2");

titulo.textContent = "Título criado com JavaScript";

container.prepend(titulo);

/*
Antes:

<div class="container">
    <p>...</p>
</div>

Depois:

<div class="container">
    <h2>Título criado com JavaScript</h2>
    <p>...</p>
</div>
*/


// =========================================================
// 12. CRIANDO ELEMENTOS COM ATRIBUTOS
// =========================================================

/*
Podemos criar um elemento e adicionar atributos nele.

Exemplo:
*/

const imagem = document.createElement("img");

imagem.setAttribute("src", "imagem.jpg");
imagem.setAttribute("alt", "Imagem de exemplo");

container.append(imagem);

/*
Resultado:

<img src="imagem.jpg" alt="Imagem de exemplo">
*/


// =========================================================
// 13. setAttribute()
// =========================================================

/*
setAttribute() permite adicionar ou alterar atributos.

Sintaxe:

elemento.setAttribute("nome-do-atributo", "valor");
*/

imagem.setAttribute("width", "300");

/*
Também podemos alterar atributos existentes.

Por exemplo:
*/

imagem.setAttribute("alt", "Imagem atualizada");


// =========================================================
// 14. getAttribute()
// =========================================================

/*
getAttribute() permite obter o valor de um atributo.

Exemplo:
*/

const caminhoImagem = imagem.getAttribute("src");

console.log(caminhoImagem);

/*
Resultado:

imagem.jpg
*/


// =========================================================
// 15. hasAttribute()
// =========================================================

/*
Verifica se um elemento possui determinado atributo.

Retorna:

true  → atributo existe
false → atributo não existe
*/

const possuiAlt = imagem.hasAttribute("alt");

console.log(possuiAlt);


// =========================================================
// 16. removeAttribute()
// =========================================================

/*
Remove um atributo do elemento.
*/

imagem.removeAttribute("width");

/*
O atributo width foi removido.

Isso é diferente de remover o elemento.

Aqui removemos somente o atributo.
*/


// =========================================================
// 17. ATRIBUTOS PERSONALIZADOS data-*
// =========================================================

/*
HTML permite criar atributos personalizados utilizando
o prefixo:

data-

Exemplo:

<button
    class="produto"
    data-id="101"
    data-categoria="eletronicos"
>
    Comprar
</button>

Esses atributos são muito úteis para armazenar pequenas
informações relacionadas ao elemento.
*/


// =========================================================
// 18. SELECIONANDO ELEMENTOS PELO ATRIBUTO data-*
// =========================================================

/*
Podemos utilizar querySelector() para procurar um elemento
pelo seu atributo personalizado.

Exemplo:

HTML:

<button data-id="101">Comprar</button>
*/

const produto = document.querySelector('[data-id="101"]');

console.log(produto);

/*
Observe que utilizamos um seletor CSS de atributo:

[data-id="101"]

Isso significa:

"selecione um elemento que possua o atributo data-id
com o valor 101".
*/


// =========================================================
// 19. ACESSANDO data-* COM dataset
// =========================================================

/*
Existe uma maneira muito prática de acessar atributos
data-* através da propriedade:

dataset

HTML:

<div
    class="produto"
    data-id="101"
    data-categoria="eletronicos"
>
    Produto
</div>
*/

const produtoData = document.querySelector(".produto");

console.log(produtoData.dataset.id);

console.log(produtoData.dataset.categoria);

/*
Resultado:

101
eletronicos

O navegador transforma:

data-id

em:

dataset.id

E:

data-categoria

em:

dataset.categoria
*/


// =========================================================
// 20. ALTERANDO data-* COM dataset
// =========================================================

/*
Também podemos alterar ou criar atributos data- utilizando
dataset.

Exemplo:
*/

produtoData.dataset.id = "200";

/*
Isso altera:

data-id="101"

para:

data-id="200"
*/


// =========================================================
// 21. CRIANDO UM NOVO ATRIBUTO data-*
// =========================================================

/*
Também podemos criar um novo atributo personalizado.
*/

produtoData.dataset.preco = "99.90";

/*
O HTML passará a ter:

data-preco="99.90"
*/


// =========================================================
// 22. REMOVENDO data-* COM delete
// =========================================================

/*
Podemos remover uma propriedade do dataset utilizando
delete.
*/

delete produtoData.dataset.preco;

/*
O atributo:

data-preco

será removido do elemento.
*/


// =========================================================
// 23. REMOVENDO ELEMENTOS DO DOM
// =========================================================

/*
Para remover um elemento, podemos utilizar:

remove()

Exemplo:
*/

outroParagrafo.remove();

/*
O elemento será retirado do DOM.
*/


// =========================================================
// 24. REMOVENDO UM ELEMENTO COM removeChild()
// =========================================================

/*
Outra maneira é utilizar removeChild() através do
elemento pai.

Sintaxe:

pai.removeChild(filho);
*/

const elementoParaRemover = document.querySelector(".mensagem");

if (elementoParaRemover) {
    elementoParaRemover.parentElement.removeChild(elementoParaRemover);
}

/*
Aqui estamos fazendo:

1. Selecionando o elemento.
2. Encontrando seu elemento pai.
3. Pedindo ao pai para remover o filho.

Hoje, remove() costuma ser uma opção mais simples:

elementoParaRemover.remove();
*/


// =========================================================
// 25. INSERINDO ELEMENTOS ANTES DE OUTRO
// =========================================================

/*
insertBefore() permite inserir um elemento antes de outro.

Sintaxe:

pai.insertBefore(novoElemento, elementoReferencia);
*/

const novoItem = document.createElement("li");

novoItem.textContent = "Novo item";

const lista = document.querySelector("ul");
const primeiroItem = lista?.querySelector("li");

if (lista && primeiroItem) {
    lista.insertBefore(novoItem, primeiroItem);
}

/*
Se tivermos:

<ul>
    <li>Item 1</li>
    <li>Item 2</li>
</ul>

Depois:

<ul>
    <li>Novo item</li>
    <li>Item 1</li>
    <li>Item 2</li>
</ul>
*/


// =========================================================
// 26. CLONANDO ELEMENTOS
// =========================================================

/*
cloneNode() permite criar uma cópia de um elemento.

true significa:

"copie também os elementos filhos".

*/

const copia = card.cloneNode(true);

container.append(copia);

/*
Se utilizarmos:

cloneNode(false)

somente o elemento principal será copiado,
sem seus elementos filhos.
*/


// =========================================================
// 27. EXEMPLO PRÁTICO
// =========================================================

/*
Vamos imaginar uma lista de produtos:

HTML:

<div class="lista-produtos"></div>

Queremos criar os produtos dinamicamente usando JavaScript.
*/

const listaProdutos = document.querySelector(".lista-produtos");

if (listaProdutos) {

    // Criando o elemento principal do produto.
    const produtoNovo = document.createElement("div");

    // Adicionando uma classe.
    produtoNovo.classList.add("produto");

    // Criando um atributo personalizado.
    produtoNovo.dataset.id = "501";

    // Criando o título.
    const nomeProduto = document.createElement("h3");

    nomeProduto.textContent = "Teclado Mecânico";

    // Criando o preço.
    const precoProduto = document.createElement("p");

    precoProduto.textContent = "R$ 299,90";

    // Adicionando os elementos dentro do produto.
    produtoNovo.append(nomeProduto, precoProduto);

    // Finalmente adicionando o produto à página.
    listaProdutos.append(produtoNovo);
}


/*
===========================================================
RESUMO DOS PRINCIPAIS MÉTODOS
===========================================================

SELEÇÃO
-----------------------------------------------------------

document.querySelector(".classe")
→ Seleciona o primeiro elemento encontrado.

document.querySelectorAll(".classe")
→ Seleciona todos os elementos encontrados.

document.getElementsByClassName("classe")
→ Seleciona elementos pela classe.


CLASSES
-----------------------------------------------------------

elemento.classList.add("classe")
→ Adiciona uma classe.

elemento.classList.remove("classe")
→ Remove uma classe.

elemento.classList.toggle("classe")
→ Adiciona ou remove uma classe.

elemento.classList.contains("classe")
→ Verifica se uma classe existe.

elemento.classList.replace("antiga", "nova")
→ Substitui uma classe.


CRIAÇÃO
-----------------------------------------------------------

document.createElement("div")
→ Cria um novo elemento.


ADIÇÃO
-----------------------------------------------------------

pai.append(elemento)
→ Adiciona no final.

pai.prepend(elemento)
→ Adiciona no início.

pai.appendChild(elemento)
→ Adiciona um filho no final.

pai.insertBefore(novo, referencia)
→ Insere antes de outro elemento.


REMOÇÃO
-----------------------------------------------------------

elemento.remove()
→ Remove o próprio elemento.

pai.removeChild(filho)
→ O pai remove um de seus filhos.


ATRIBUTOS
-----------------------------------------------------------

elemento.setAttribute("nome", "valor")
→ Cria ou altera um atributo.

elemento.getAttribute("nome")
→ Obtém o valor de um atributo.

elemento.hasAttribute("nome")
→ Verifica se um atributo existe.

elemento.removeAttribute("nome")
→ Remove um atributo.


ATRIBUTOS PERSONALIZADOS
-----------------------------------------------------------

HTML:

data-id="123"

JavaScript:

elemento.dataset.id

→ Lê o atributo.

elemento.dataset.id = "456"

→ Altera o atributo.

delete elemento.dataset.id

→ Remove o atributo.


===========================================================
DICA DE DESENVOLVEDOR
===========================================================

Uma boa forma de pensar sobre o DOM é:

1. SELECIONAR
   ↓
2. CRIAR ou ENCONTRAR
   ↓
3. MODIFICAR
   ↓
4. ADICIONAR ou REMOVER

Exemplo:

const botao = document.querySelector(".botao");

botao.classList.add("ativo");

const novoElemento = document.createElement("p");

novoElemento.textContent = "Novo conteúdo";

container.append(novoElemento);

novoElemento.remove();


Essa sequência aparece constantemente em aplicações
JavaScript que possuem interação com o usuário.
*/