
/*
 * ============================================================
 * SELEÇÃO DE ELEMENTOS COM DOM
 * ============================================================
 *
 * DOM = Document Object Model
 *
 * O DOM representa o HTML da página como uma estrutura de
 * objetos que o JavaScript consegue acessar e manipular.
 *
 * Neste arquivo veremos:
 *
 * 1. Seleção de elementos individuais
 * 2. Seleção de múltiplos elementos
 * 3. Seleção de elementos de formulário
 * 4. Diferenças entre os principais métodos
 *
 * IMPORTANTE:
 * Os exemplos abaixo pressupõem que os elementos existam
 * no HTML da página.
 * ============================================================
 */


/*
 * ============================================================
 * 1. SELECIONANDO UM ELEMENTO PELO ID
 * ============================================================
 *
 * HTML:
 *
 * <h1 id="titulo">Olá, mundo!</h1>
 *
 * O método getElementById() procura um elemento que possua
 * exatamente o ID informado.
 *
 * Como IDs devem ser únicos dentro da página, esse método
 * retorna apenas UM elemento.
 */

const titulo = document.getElementById("titulo");

console.log(titulo);


/*
 * Podemos acessar propriedades do elemento depois de
 * selecioná-lo.
 *
 * textContent permite acessar ou alterar o texto do elemento.
 */

console.log(titulo.textContent);

// Alterando o texto:
// titulo.textContent = "Novo título";


/*
 * ============================================================
 * 2. SELECIONANDO UM ELEMENTO COM querySelector()
 * ============================================================
 *
 * querySelector() permite utilizar seletores CSS para
 * encontrar um elemento.
 *
 * Ele sempre retorna APENAS O PRIMEIRO elemento encontrado.
 *
 * Exemplos de seletores CSS:
 *
 * "#titulo"      -> ID
 * ".produto"     -> Classe
 * "p"            -> Tag
 * "input"        -> Elemento input
 */

const tituloQuery = document.querySelector("#titulo");

console.log(tituloQuery);


/*
 * Selecionando uma classe:
 */

const primeiroProduto = document.querySelector(".produto");

console.log(primeiroProduto);


/*
 * Selecionando uma tag:
 *
 * Caso existam vários <p>, apenas o primeiro será retornado.
 */

const primeiroParagrafo = document.querySelector("p");

console.log(primeiroParagrafo);


/*
 * ============================================================
 * 3. SELETORES CSS MAIS ESPECÍFICOS
 * ============================================================
 *
 * Como querySelector() aceita seletores CSS, podemos fazer
 * seleções mais específicas.
 *
 * HTML:
 *
 * <div class="produto">
 *     <h2>Notebook</h2>
 * </div>
 *
 * Podemos procurar um h2 que esteja dentro de .produto.
 */

const nomeProduto = document.querySelector(".produto h2");

console.log(nomeProduto);


/*
 * Também podemos selecionar elementos através de atributos.
 *
 * HTML:
 *
 * <input type="text">
 *
 * Selecionamos assim:
 */

const campoTexto = document.querySelector('input[type="text"]');

console.log(campoTexto);


/*
 * ============================================================
 * 4. SELECIONANDO MÚLTIPLOS ELEMENTOS
 * ============================================================
 *
 * Quando precisamos trabalhar com vários elementos, podemos
 * utilizar:
 *
 * - querySelectorAll()
 * - getElementsByClassName()
 * - getElementsByTagName()
 */


/*
 * ------------------------------------------------------------
 * 4.1 querySelectorAll()
 * ------------------------------------------------------------
 *
 * Retorna TODOS os elementos que correspondem ao seletor.
 *
 * HTML:
 *
 * <p class="mensagem">Mensagem 1</p>
 * <p class="mensagem">Mensagem 2</p>
 * <p class="mensagem">Mensagem 3</p>
 */

const mensagens = document.querySelectorAll(".mensagem");

console.log(mensagens);


/*
 * O retorno é uma NodeList.
 *
 * Podemos percorrer os elementos utilizando forEach().
 */

mensagens.forEach(function (mensagem) {
    console.log(mensagem.textContent);
});


/*
 * Também podemos utilizar uma arrow function:
 */

mensagens.forEach((mensagem) => {
    console.log(mensagem.textContent);
});


/*
 * ------------------------------------------------------------
 * 4.2 getElementsByClassName()
 * ------------------------------------------------------------
 *
 * Procura elementos através do nome da classe.
 *
 * Diferentemente do querySelector(), aqui informamos apenas
 * o nome da classe, sem o ponto ".".
 *
 * ERRADO:
 *
 * getElementsByClassName(".produto")
 *
 * CORRETO:
 *
 * getElementsByClassName("produto")
 */

const produtos = document.getElementsByClassName("produto");

console.log(produtos);


/*
 * O retorno é uma HTMLCollection.
 *
 * Podemos acessar um elemento através do índice.
 *
 * O índice começa em 0.
 */

console.log(produtos[0]);
console.log(produtos[1]);


/*
 * Também podemos percorrer uma HTMLCollection utilizando
 * um loop tradicional.
 */

for (let i = 0; i < produtos.length; i++) {
    console.log(produtos[i]);
}


/*
 * ------------------------------------------------------------
 * 4.3 getElementsByTagName()
 * ------------------------------------------------------------
 *
 * Seleciona todos os elementos de determinada tag HTML.
 *
 * Exemplo: todos os parágrafos <p>.
 */

const paragrafos = document.getElementsByTagName("p");

console.log(paragrafos);


/*
 * Percorrendo os parágrafos:
 */

for (let i = 0; i < paragrafos.length; i++) {
    console.log(paragrafos[i].textContent);
}


/*
 * ============================================================
 * 5. DIFERENÇA ENTRE querySelector() E querySelectorAll()
 * ============================================================
 *
 * querySelector():
 *
 * - Retorna o PRIMEIRO elemento encontrado.
 *
 * querySelectorAll():
 *
 * - Retorna TODOS os elementos encontrados.
 */


/*
 * Primeiro elemento com a classe produto:
 */

const primeiro = document.querySelector(".produto");

console.log(primeiro);


/*
 * Todos os elementos com a classe produto:
 */

const todos = document.querySelectorAll(".produto");

console.log(todos);


/*
 * ============================================================
 * 6. SELECIONANDO ELEMENTOS DENTRO DE OUTRO ELEMENTO
 * ============================================================
 *
 * Não precisamos necessariamente procurar um elemento em
 * todo o documento.
 *
 * Podemos selecionar um elemento dentro de outro elemento.
 *
 * HTML:
 *
 * <div id="produto">
 *     <h2>Notebook</h2>
 *     <p>Descrição</p>
 * </div>
 */


/*
 * Primeiro selecionamos o elemento pai:
 */

const produto = document.querySelector("#produto");


/*
 * Depois procuramos o h2 dentro dele:
 */

const tituloProduto = produto.querySelector("h2");

console.log(tituloProduto);


/*
 * Isso é bastante útil quando temos componentes ou estruturas
 * repetidas na página.
 */


/*
 * ============================================================
 * 7. SELECIONANDO ELEMENTOS DE FORMULÁRIO
 * ============================================================
 *
 * O JavaScript pode acessar facilmente campos de formulários
 * através do DOM.
 *
 * Exemplos:
 *
 * <form id="formulario">
 *
 *     <input id="nome" type="text">
 *
 *     <input id="email" type="email">
 *
 *     <button type="submit">Enviar</button>
 *
 * </form>
 */


/*
 * Selecionando o formulário:
 */

const formulario = document.querySelector("#formulario");

console.log(formulario);


/*
 * Selecionando um campo específico:
 */

const campoNome = document.querySelector("#nome");

console.log(campoNome);


/*
 * ============================================================
 * 8. OBTENDO O VALOR DE UM INPUT
 * ============================================================
 *
 * Para campos de formulário, uma propriedade muito importante
 * é "value".
 *
 * value representa o conteúdo atual digitado no campo.
 */

const nome = campoNome.value;

console.log(nome);


/*
 * Podemos também alterar o valor:
 *
 * campoNome.value = "Lindomar";
 *
 * Isso faria o input passar a exibir "Lindomar".
 */


/*
 * ============================================================
 * 9. SELECIONANDO INPUTS PELO TYPE
 * ============================================================
 *
 * Podemos utilizar seletores CSS para encontrar tipos
 * específicos de inputs.
 */


/*
 * Input de texto:
 */

const inputTexto = document.querySelector('input[type="text"]');

console.log(inputTexto);


/*
 * Input de email:
 */

const inputEmail = document.querySelector('input[type="email"]');

console.log(inputEmail);


/*
 * Input de senha:
 */

const inputSenha = document.querySelector('input[type="password"]');

console.log(inputSenha);


/*
 * Input checkbox:
 */

const checkbox = document.querySelector('input[type="checkbox"]');

console.log(checkbox);


/*
 * ============================================================
 * 10. VERIFICANDO CHECKBOX
 * ============================================================
 *
 * Para checkbox e radio buttons, a propriedade "checked"
 * informa se o elemento está selecionado.
 *
 * true  -> selecionado
 * false -> não selecionado
 */

if (checkbox.checked) {
    console.log("Checkbox selecionado.");
} else {
    console.log("Checkbox não selecionado.");
}


/*
 * ============================================================
 * 11. SELECIONANDO RADIO BUTTONS
 * ============================================================
 *
 * HTML:
 *
 * <input type="radio" name="genero" value="masculino">
 * <input type="radio" name="genero" value="feminino">
 *
 * Podemos selecionar todos os radio buttons através do
 * atributo "name".
 */

const radios = document.querySelectorAll(
    'input[name="genero"]'
);

console.log(radios);


/*
 * Podemos percorrer os radio buttons para descobrir qual
 * está selecionado.
 */

radios.forEach((radio) => {

    if (radio.checked) {
        console.log("Selecionado:", radio.value);
    }

});


/*
 * ============================================================
 * 12. SELECT / OPTION
 * ============================================================
 *
 * HTML:
 *
 * <select id="cidade">
 *     <option value="rio">Rio de Janeiro</option>
 *     <option value="niteroi">Niterói</option>
 *     <option value="nova-friburgo">Nova Friburgo</option>
 * </select>
 */


/*
 * Selecionando o elemento <select>:
 */

const cidade = document.querySelector("#cidade");

console.log(cidade);


/*
 * A propriedade value retorna o value da opção selecionada.
 */

console.log(cidade.value);


/*
 * ============================================================
 * 13. TEXTAREA
 * ============================================================
 *
 * HTML:
 *
 * <textarea id="mensagem"></textarea>
 *
 * Podemos selecionar normalmente com querySelector().
 */

const campoMensagem = document.querySelector("#mensagem");

console.log(campoMensagem);


/*
 * E podemos acessar seu conteúdo através de value.
 */

console.log(campoMensagem.value);


/*
 * ============================================================
 * 14. FORMULÁRIOS E ELEMENTOS INTERNOS
 * ============================================================
 *
 * Depois de selecionar um formulário, podemos acessar seus
 * elementos através da propriedade "elements".
 */

console.log(formulario.elements);


/*
 * Também podemos acessar um campo através do seu atributo
 * name.
 *
 * HTML:
 *
 * <input type="text" name="nome">
 */

const nomeFormulario = formulario.elements.nome;

console.log(nomeFormulario);


/*
 * Podemos então acessar o valor:
 */

console.log(nomeFormulario.value);


/*
 * ============================================================
 * 15. SELECIONANDO TODOS OS INPUTS DE UM FORMULÁRIO
 * ============================================================
 *
 * Podemos procurar elementos dentro do formulário usando
 * querySelectorAll().
 */

const inputs = formulario.querySelectorAll("input");

console.log(inputs);


/*
 * Percorrendo todos os inputs:
 */

inputs.forEach((input) => {
    console.log(input);
});


/*
 * ============================================================
 * 16. RESUMO DOS PRINCIPAIS MÉTODOS
 * ============================================================
 *
 * ------------------------------------------------------------
 * getElementById()
 * ------------------------------------------------------------
 *
 * Busca um elemento pelo ID.
 *
 * Retorna:
 *     Um único elemento.
 *
 * Exemplo:
 *
 * document.getElementById("titulo");
 *
 *
 * ------------------------------------------------------------
 * querySelector()
 * ------------------------------------------------------------
 *
 * Utiliza seletores CSS.
 *
 * Retorna:
 *     O primeiro elemento encontrado.
 *
 * Exemplos:
 *
 * document.querySelector("#titulo");
 * document.querySelector(".produto");
 * document.querySelector("p");
 *
 *
 * ------------------------------------------------------------
 * querySelectorAll()
 * ------------------------------------------------------------
 *
 * Utiliza seletores CSS.
 *
 * Retorna:
 *     Todos os elementos encontrados.
 *
 * Exemplo:
 *
 * document.querySelectorAll(".produto");
 *
 *
 * ------------------------------------------------------------
 * getElementsByClassName()
 * ------------------------------------------------------------
 *
 * Busca pela classe.
 *
 * Retorna:
 *     HTMLCollection.
 *
 * Exemplo:
 *
 * document.getElementsByClassName("produto");
 *
 *
 * ------------------------------------------------------------
 * getElementsByTagName()
 * ------------------------------------------------------------
 *
 * Busca pela tag HTML.
 *
 * Retorna:
 *     HTMLCollection.
 *
 * Exemplo:
 *
 * document.getElementsByTagName("p");
 */


/*
 * ============================================================
 * 17. QUAL MÉTODO DEVO USAR?
 * ============================================================
 *
 * Na prática, querySelector() e querySelectorAll() são muito
 * utilizados porque permitem trabalhar com qualquer seletor
 * CSS.
 *
 * Exemplos:
 *
 * UM elemento:
 *
 * const botao = document.querySelector("#botao");
 *
 *
 * VÁRIOS elementos:
 *
 * const botoes = document.querySelectorAll(".botao");
 *
 *
 * Quando você precisa buscar especificamente um ID:
 *
 * const titulo = document.getElementById("titulo");
 *
 *
 * Não existe um método "melhor" para absolutamente todos
 * os casos. O importante é entender o que cada um retorna
 * e escolher o mais adequado para a situação.
 */


/*
 * ============================================================
 * 18. ATENÇÃO: ELEMENTO NÃO ENCONTRADO
 * ============================================================
 *
 * Se o JavaScript tentar selecionar um elemento que não existe,
 * alguns métodos podem retornar null.
 *
 * Exemplo:
 */

const elementoInexistente = document.querySelector("#naoExiste");

console.log(elementoInexistente);


/*
 * Resultado:
 *
 * null
 *
 * Isso é importante porque tentar acessar propriedades de
 * null causará um erro.
 *
 * Exemplo que causaria erro:
 *
 * elementoInexistente.textContent;
 */


/*
 * Podemos verificar se o elemento foi encontrado:
 */

if (elementoInexistente) {
    console.log(elementoInexistente.textContent);
} else {
    console.log("Elemento não encontrado.");
}


/*
 * ============================================================
 * CONCLUSÃO
 * ============================================================
 *
 * A seleção de elementos é uma das bases para trabalhar com
 * JavaScript no navegador.
 *
 * O fluxo geralmente será:
 *
 * 1. Selecionar um elemento do HTML
 * 2. Armazenar a referência em uma variável
 * 3. Ler ou alterar informações
 * 4. Adicionar comportamentos
 *
 * Exemplo conceitual:
 *
 * const botao = document.querySelector("#botao");
 *
 * Depois de obter o botão, podemos futuramente estudar:
 *
 * - Eventos
 * - Alteração de texto
 * - Alteração de classes
 * - Alteração de estilos
 * - Criação de elementos
 * - Remoção de elementos
 * - Manipulação de formulários
 *
 * DOM é justamente a ponte entre o JavaScript e o HTML
 * apresentado no navegador.
 * ============================================================
 */
