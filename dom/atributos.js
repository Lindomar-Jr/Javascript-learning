/*
===========================================================
ATRIBUTOS COM DOM - JAVASCRIPT
===========================================================

Este arquivo apresenta como trabalhar com atributos de
elementos HTML utilizando JavaScript e o DOM.

Conteúdos abordados:
1. Seleção de elementos
2. getAttribute()
3. setAttribute()
4. hasAttribute()
5. removeAttribute()
6. Acesso direto a atributos
7. Atributos personalizados (data-*)
8. dataset
9. Alteração de atributos personalizados
10. Boas práticas

IMPORTANTE:
Os exemplos abaixo pressupõem que os elementos HTML
existem na página onde este JavaScript está sendo executado.
===========================================================
*/


// =========================================================
// 1. SELECIONANDO UM ELEMENTO
// =========================================================

// Podemos selecionar um elemento pelo seu ID.
const link = document.querySelector("#meuLink");

// Também podemos selecionar outros elementos usando
// classes, tags ou qualquer seletor CSS válido.
const imagem = document.querySelector(".imagem");


// =========================================================
// 2. LENDO UM ATRIBUTO COM getAttribute()
// =========================================================

// getAttribute() permite obter o valor de um atributo.

// Exemplo:
// <a id="meuLink" href="https://google.com">Google</a>

const endereco = link.getAttribute("href");

console.log(endereco);
// Resultado:
// "https://google.com"


// Podemos utilizar o mesmo método para outros atributos.

const id = link.getAttribute("id");

console.log(id);
// Resultado:
// "meuLink"


// Se o atributo não existir, getAttribute() retorna null.

const atributoInexistente = link.getAttribute("title");

console.log(atributoInexistente);
// Resultado:
// null


// =========================================================
// 3. ALTERANDO UM ATRIBUTO COM setAttribute()
// =========================================================

// setAttribute() permite criar ou alterar um atributo.

// Sintaxe:
//
// elemento.setAttribute("nomeDoAtributo", "valor");

link.setAttribute("href", "https://developer.mozilla.org");

// Agora o href do link foi alterado.

console.log(link.getAttribute("href"));
// Resultado:
// "https://developer.mozilla.org"


// Se o atributo não existir, setAttribute() cria o atributo.

// Antes:
// <a id="meuLink">Google</a>

link.setAttribute("target", "_blank");

// Depois:
// <a id="meuLink" target="_blank">Google</a>


// =========================================================
// 4. VERIFICANDO SE UM ATRIBUTO EXISTE
// =========================================================

// hasAttribute() verifica se um elemento possui
// determinado atributo.

// O retorno será:
// true  -> atributo existe
// false -> atributo não existe

const possuiHref = link.hasAttribute("href");

console.log(possuiHref);
// true


const possuiTitle = link.hasAttribute("title");

console.log(possuiTitle);
// false


// Isso é útil quando precisamos tomar decisões
// dependendo da existência de determinado atributo.

if (link.hasAttribute("target")) {
    console.log("O link será aberto em outra aba.");
} else {
    console.log("O link não possui target.");
}


// =========================================================
// 5. REMOVENDO UM ATRIBUTO
// =========================================================

// removeAttribute() remove completamente um atributo
// do elemento.

// Exemplo:
// <a target="_blank">...</a>

link.removeAttribute("target");

// Agora o atributo target não existe mais.

console.log(link.hasAttribute("target"));
// false


// =========================================================
// 6. ACESSANDO ATRIBUTOS DIRETAMENTE
// =========================================================

// Alguns atributos HTML possuem propriedades
// correspondentes no próprio elemento.

// Por exemplo:

// <input type="text" id="nome">

const campoNome = document.querySelector("#nome");


// Podemos acessar o id diretamente:

console.log(campoNome.id);


// E também podemos alterar:

campoNome.id = "nomeUsuario";


// Em muitos casos, essa abordagem é mais simples.

// Outro exemplo:

// <img src="foto.jpg" alt="Foto">

const foto = document.querySelector("img");

console.log(foto.src);
console.log(foto.alt);


// Podemos alterar diretamente:

foto.alt = "Foto de perfil";


// =========================================================
// 7. getAttribute() X ACESSO DIRETO
// =========================================================

// As duas abordagens podem parecer semelhantes,
// mas existe uma diferença importante.

// Com getAttribute():

const valorAtributo = foto.getAttribute("src");

console.log(valorAtributo);


// A propriedade src:

const valorPropriedade = foto.src;

console.log(valorPropriedade);


// Dependendo do atributo, a propriedade pode retornar
// um valor já processado pelo navegador.

// Por exemplo, uma URL relativa como:
//
// src="imagens/foto.jpg"
//
// pode aparecer como uma URL absoluta quando acessada
// através de:
//
// foto.src


// Portanto:
//
// getAttribute()
// -> trabalha diretamente com o atributo HTML.
//
// propriedade
// -> trabalha com a propriedade correspondente do objeto DOM.


// =========================================================
// 8. ATRIBUTOS PERSONALIZADOS
// =========================================================

// HTML permite criar atributos personalizados seguindo
// uma regra específica:
//
// data-nome-do-atributo
//
// Esses atributos são chamados de "data attributes".


// Exemplo HTML:
//
// <button
//     id="btnProduto"
//     data-id="123"
//     data-categoria="eletronicos"
// >
//     Comprar
// </button>


const botaoProduto = document.querySelector("#btnProduto");


// Podemos ler esses atributos normalmente:

const produtoId = botaoProduto.getAttribute("data-id");

console.log(produtoId);
// "123"


const categoria = botaoProduto.getAttribute("data-categoria");

console.log(categoria);
// "eletronicos"


// =========================================================
// 9. ACESSANDO data-* COM dataset
// =========================================================

// O JavaScript possui uma maneira mais prática de
// trabalhar com atributos data-*:
//
// dataset


// HTML:
//
// <button data-id="123" data-categoria="eletronicos">

console.log(botaoProduto.dataset.id);
// "123"

console.log(botaoProduto.dataset.categoria);
// "eletronicos"


// Observe a transformação:
//
// HTML:
// data-id
//
// JavaScript:
// dataset.id


// Outro exemplo:
//
// HTML:
// data-nome-produto
//
// JavaScript:
// dataset.nomeProduto
//
// O hífen é convertido para camelCase.


// =========================================================
// 10. ALTERANDO data-* COM dataset
// =========================================================

// Também podemos alterar atributos personalizados
// utilizando dataset.

botaoProduto.dataset.id = "456";

console.log(botaoProduto.dataset.id);
// "456"


// Isso altera o HTML para:
//
// data-id="456"


// Podemos criar um novo data attribute:

botaoProduto.dataset.preco = "99.90";


// O HTML passa a ter:
//
// data-preco="99.90"


// =========================================================
// 11. REMOVENDO data-* COM delete
// =========================================================

// Podemos remover um atributo personalizado usando
// delete.

delete botaoProduto.dataset.preco;


// O atributo data-preco deixa de existir.


// =========================================================
// 12. USANDO data-* PARA GUARDAR INFORMAÇÕES
// =========================================================

// Uma aplicação muito comum dos data attributes é
// armazenar informações que serão utilizadas pelo JavaScript.

// Exemplo:
//
// <button
//     class="btn-produto"
//     data-id="10"
//     data-nome="Teclado"
// >
//     Comprar
// </button>


const botao = document.querySelector(".btn-produto");


// Recuperando as informações:

const idProduto = botao.dataset.id;
const nomeProduto = botao.dataset.nome;

console.log(idProduto);
console.log(nomeProduto);


// Podemos utilizar essas informações em uma lógica:

if (idProduto === "10") {
    console.log(`Produto selecionado: ${nomeProduto}`);
}


// =========================================================
// 13. DIFERENÇA ENTRE ATRIBUTO E PROPRIEDADE
// =========================================================

// É importante entender essa diferença:
//
// ATRIBUTO
// -> Está presente no HTML.
//
// PROPRIEDADE
// -> Faz parte do objeto DOM representado pelo navegador.
//
// Exemplo:
//
// <input type="text" value="Lindomar">


const input = document.querySelector("input");


// "value" pode ser acessado como propriedade:

console.log(input.value);


// Também podemos acessar o atributo HTML:

console.log(input.getAttribute("value"));


// Essa diferença fica especialmente importante em
// elementos de formulário, porque a propriedade "value"
// pode mudar enquanto o usuário interage com o campo,
// enquanto o atributo HTML original pode permanecer igual.


// =========================================================
// 14. ALTERANDO ATRIBUTOS DE FORMA DINÂMICA
// =========================================================

// Podemos utilizar JavaScript para modificar atributos
// dependendo de alguma condição.

// Exemplo:
//
// <button id="botao">Enviar</button>

const botaoEnviar = document.querySelector("#botao");


// Alterando o atributo disabled:

botaoEnviar.setAttribute("disabled", "");

// O botão ficará desabilitado.


// Para remover:

botaoEnviar.removeAttribute("disabled");


// Agora o botão volta a ficar habilitado.


// =========================================================
// 15. ATRIBUTOS BOOLEANOS
// =========================================================

// Alguns atributos HTML são booleanos.
//
// Exemplos:
//
// disabled
// checked
// required
// readonly
//
// A simples presença do atributo já significa "ativado".


// Exemplo:
//
// <input type="checkbox" id="aceite" checked>

const checkbox = document.querySelector("#aceite");


// Verificando se o atributo existe:

if (checkbox.hasAttribute("checked")) {
    console.log("O atributo checked existe.");
}


// Para propriedades booleanas, normalmente é mais
// adequado trabalhar diretamente com a propriedade:

console.log(checkbox.checked);


// Podemos alterar:

checkbox.checked = false;


// Ou:

checkbox.checked = true;


// Para propriedades booleanas, essa abordagem costuma
// ser mais apropriada do que manipular o atributo
// diretamente.


// =========================================================
// 16. CONSULTANDO TODOS OS ATRIBUTOS
// =========================================================

// O elemento possui uma coleção chamada attributes.

// Podemos percorrer essa coleção:

const elemento = document.querySelector("#meuLink");

for (const atributo of elemento.attributes) {

    console.log(
        `Nome: ${atributo.name} | Valor: ${atributo.value}`
    );
}


// Isso permite descobrir quais atributos existem
// naquele elemento.


// =========================================================
// 17. EXEMPLO PRÁTICO
// =========================================================

// Imagine o seguinte HTML:
//
// <button
//     class="produto"
//     data-id="25"
//     data-preco="149.90"
// >
//     Comprar
// </button>


const produto = document.querySelector(".produto");


// Pegando os dados:

const produtoIdAtual = produto.dataset.id;
const produtoPreco = produto.dataset.preco;


// Convertendo o preço para número:

const preco = Number(produtoPreco);


console.log("ID:", produtoIdAtual);
console.log("Preço:", preco);


// Agora podemos utilizar esses dados em uma operação:

if (preco > 100) {

    console.log("Produto acima de R$ 100.");

}


// =========================================================
// 18. RESUMO DOS PRINCIPAIS MÉTODOS
// =========================================================

/*

getAttribute()
-----------------------------------------------------------
Lê o valor de um atributo.

Exemplo:
elemento.getAttribute("href");


setAttribute()
-----------------------------------------------------------
Cria ou altera um atributo.

Exemplo:
elemento.setAttribute("title", "Clique aqui");


hasAttribute()
-----------------------------------------------------------
Verifica se um atributo existe.

Exemplo:
elemento.hasAttribute("disabled");


removeAttribute()
-----------------------------------------------------------
Remove um atributo.

Exemplo:
elemento.removeAttribute("disabled");


dataset
-----------------------------------------------------------
Permite acessar atributos personalizados data-*.

Exemplo:
elemento.dataset.id;


delete dataset
-----------------------------------------------------------
Remove um atributo data-*.

Exemplo:
delete elemento.dataset.id;

*/


// =========================================================
// 19. BOA PRÁTICA
// =========================================================

/*

Use getAttribute/setAttribute quando estiver trabalhando
diretamente com atributos HTML.

Use propriedades quando existir uma propriedade DOM
apropriada para aquele comportamento.

Exemplo:

// Atributo comum
elemento.setAttribute("title", "Informação");


// Propriedade DOM
input.value = "Novo valor";


// Atributo personalizado
elemento.dataset.id = "123";


E lembre-se:

data-* é especialmente útil para armazenar informações
que precisam ser utilizadas pelo JavaScript sem misturar
esses dados com classes ou IDs.

*/


// =========================================================
// FIM DO GUIA
// =========================================================
