/*
===========================================================
                EVENTOS NO JAVASCRIPT
===========================================================

Eventos são ações que acontecem no navegador e que o
JavaScript pode detectar e responder.

Exemplos de eventos:

- Clique do mouse
- Movimento do mouse
- Tecla pressionada
- Campo recebendo foco
- Campo perdendo foco
- Envio de formulário
- Alteração de um campo
- Carregamento da página

A principal ferramenta para trabalhar com eventos é:

    addEventListener()

Sintaxe:

    elemento.addEventListener("evento", função);

Exemplo:

    botao.addEventListener("click", function () {
        console.log("Botão clicado!");
    });

===========================================================
*/


/*
===========================================================
1. SELECIONANDO ELEMENTOS
===========================================================

Antes de trabalhar com eventos, normalmente precisamos
selecionar o elemento HTML que receberá o evento.

Exemplo de HTML:

<button id="btnMensagem">Clique aqui</button>

Podemos selecioná-lo usando querySelector().
*/

const botao = document.querySelector("#btnMensagem");


/*
===========================================================
2. EVENTO DE CLIQUE - click
===========================================================

O evento "click" acontece quando o usuário clica em um
elemento.

É um dos eventos mais utilizados no desenvolvimento web.

Exemplo:

<button id="btnMensagem">Clique aqui</button>
*/

if (botao) {

    botao.addEventListener("click", function () {

        console.log("O botão foi clicado!");

    });

}


/*
-----------------------------------------------------------
ARROW FUNCTION
-----------------------------------------------------------

Também podemos escrever o mesmo evento utilizando
uma arrow function.

Forma tradicional:

elemento.addEventListener("click", function () {
    console.log("Clique!");
});

Arrow function:

elemento.addEventListener("click", () => {
    console.log("Clique!");
});

As duas formas funcionam.
*/


if (botao) {

    botao.addEventListener("click", () => {

        console.log("Clique utilizando arrow function!");

    });

}


/*
===========================================================
3. EVENTO dblclick
===========================================================

"dblclick" acontece quando o usuário realiza dois cliques
rapidamente sobre um elemento.

É chamado de "double click".

Exemplo:

elemento.addEventListener("dblclick", () => {
    console.log("Duplo clique!");
});
*/

if (botao) {

    botao.addEventListener("dblclick", () => {

        console.log("O usuário realizou um duplo clique!");

    });

}


/*
===========================================================
4. EVENTOS DE MOUSE
===========================================================

Existem diversos eventos relacionados ao mouse.

Principais:

click       -> clique
dblclick    -> duplo clique
mousedown   -> botão do mouse pressionado
mouseup     -> botão do mouse solto
mousemove   -> mouse se movimentando
mouseenter  -> mouse entrou no elemento
mouseleave  -> mouse saiu do elemento

-----------------------------------------------------------
mouseenter
-----------------------------------------------------------

Executado quando o mouse entra na área do elemento.
*/

const area = document.querySelector("#area");

if (area) {

    area.addEventListener("mouseenter", () => {

        console.log("Mouse entrou na área!");

    });

}


/*
-----------------------------------------------------------
mouseleave
-----------------------------------------------------------

Executado quando o mouse sai da área do elemento.
*/

if (area) {

    area.addEventListener("mouseleave", () => {

        console.log("Mouse saiu da área!");

    });

}


/*
-----------------------------------------------------------
mousedown
-----------------------------------------------------------

Executado no momento em que o botão do mouse é pressionado.
*/

if (area) {

    area.addEventListener("mousedown", () => {

        console.log("Botão do mouse pressionado!");

    });

}


/*
-----------------------------------------------------------
mouseup
-----------------------------------------------------------

Executado quando o botão do mouse deixa de ser pressionado.
*/

if (area) {

    area.addEventListener("mouseup", () => {

        console.log("Botão do mouse solto!");

    });

}


/*
-----------------------------------------------------------
mousemove
-----------------------------------------------------------

Executado enquanto o mouse estiver se movimentando dentro
do elemento.

ATENÇÃO:

Esse evento pode ser disparado muitas vezes por segundo.

Por isso, evite colocar operações muito pesadas dentro dele.
*/

if (area) {

    area.addEventListener("mousemove", () => {

        console.log("Mouse se movimentando...");

    });

}


/*
===========================================================
5. OBJETO EVENT
===========================================================

Quando um evento acontece, o navegador fornece para a
função um objeto chamado "event" ou simplesmente "e".

Esse objeto contém informações sobre o evento.

Exemplo:

elemento.addEventListener("click", (event) => {

    console.log(event);

});

Podemos descobrir, por exemplo, qual elemento disparou
o evento através de:

event.target
*/

if (botao) {

    botao.addEventListener("click", (event) => {

        console.log("Elemento que recebeu o clique:");
        console.log(event.target);

    });

}


/*
-----------------------------------------------------------
event.target
-----------------------------------------------------------

Representa o elemento que originou o evento.

Exemplo:

<button id="meuBotao">Clique</button>

Ao clicar no botão:

event.target

será o próprio botão.
*/


/*
===========================================================
6. EVENTOS DE TECLADO
===========================================================

O JavaScript também consegue detectar ações realizadas
no teclado.

Principais eventos:

keydown -> tecla foi pressionada
keyup   -> tecla foi liberada

Existe também o "keypress", porém ele é considerado
obsoleto e não deve ser utilizado em novos projetos.

-----------------------------------------------------------
keydown
-----------------------------------------------------------
*/

document.addEventListener("keydown", (event) => {

    console.log("Tecla pressionada:", event.key);

});


/*
-----------------------------------------------------------
keyup
-----------------------------------------------------------

Executado quando o usuário solta a tecla.
*/

document.addEventListener("keyup", (event) => {

    console.log("Tecla liberada:", event.key);

});


/*
===========================================================
7. IDENTIFICANDO UMA TECLA ESPECÍFICA
===========================================================

A propriedade:

event.key

informa qual tecla foi pressionada.

Exemplo:

Se o usuário pressionar "Enter":

event.key === "Enter"

Se pressionar "Escape":

event.key === "Escape"

Podemos utilizar isso para criar atalhos de teclado.
*/

document.addEventListener("keydown", (event) => {

    if (event.key === "Enter") {

        console.log("A tecla Enter foi pressionada!");

    }

});


/*
-----------------------------------------------------------
ATALHO COM ESC
-----------------------------------------------------------
*/

document.addEventListener("keydown", (event) => {

    if (event.key === "Escape") {

        console.log("A tecla Escape foi pressionada!");

    }

});


/*
===========================================================
8. ctrlKey, shiftKey e altKey
===========================================================

O objeto event também informa se teclas modificadoras
estavam pressionadas.

event.ctrlKey  -> Ctrl
event.shiftKey -> Shift
event.altKey   -> Alt

Exemplo:

Ctrl + S
*/

document.addEventListener("keydown", (event) => {

    if (event.ctrlKey && event.key === "s") {

        console.log("Ctrl + S detectado!");

    }

});


/*
===========================================================
9. PREVENINDO O COMPORTAMENTO PADRÃO
===========================================================

Alguns eventos possuem comportamentos automáticos
do navegador.

Por exemplo, Ctrl + S normalmente abre a opção de salvar
a página.

Podemos impedir esse comportamento utilizando:

event.preventDefault();

IMPORTANTE:

Não devemos utilizar preventDefault() sem entender
o comportamento que estamos bloqueando.
*/

document.addEventListener("keydown", (event) => {

    if (event.ctrlKey && event.key === "s") {

        event.preventDefault();

        console.log("Comportamento padrão bloqueado.");

    }

});


/*
===========================================================
10. EVENTOS DE INTERFACE DO USUÁRIO
===========================================================

Além do mouse e teclado, o navegador possui eventos
relacionados à interface.

Alguns exemplos:

load
resize
scroll
change
input

-----------------------------------------------------------
load
-----------------------------------------------------------

O evento "load" pode ser utilizado quando o conteúdo
da página terminou de carregar.

Uma alternativa bastante utilizada para iniciar scripts
é:

DOMContentLoaded

Exemplo:
*/

document.addEventListener("DOMContentLoaded", () => {

    console.log("HTML carregado e DOM disponível.");

});


/*
-----------------------------------------------------------
resize
-----------------------------------------------------------

Executado quando o tamanho da janela do navegador muda.

Pode ser utilizado para adaptar comportamentos
dependendo do tamanho da tela.
*/

window.addEventListener("resize", () => {

    console.log("Largura da janela:", window.innerWidth);
    console.log("Altura da janela:", window.innerHeight);

});


/*
-----------------------------------------------------------
scroll
-----------------------------------------------------------

Executado quando o usuário movimenta a página.

Pode ser utilizado para:

- Mostrar botão "voltar ao topo"
- Criar animações
- Alterar menus
- Criar efeitos durante a rolagem

ATENÇÃO:

Assim como mousemove, scroll pode ser disparado muitas
vezes. Evite operações pesadas.
*/

window.addEventListener("scroll", () => {

    console.log("Página sendo rolada.");

});


/*
===========================================================
11. FOCUS
===========================================================

O evento "focus" acontece quando um elemento recebe foco.

É muito comum em:

- inputs
- textarea
- select
- elementos que podem receber interação

Exemplo:

<input id="nome" type="text">
*/

const campoNome = document.querySelector("#nome");

if (campoNome) {

    campoNome.addEventListener("focus", () => {

        console.log("Campo recebeu foco.");

    });

}


/*
-----------------------------------------------------------
Uma aplicação prática:

Podemos adicionar uma classe visual ao campo quando
o usuário começar a utilizá-lo.
*/

if (campoNome) {

    campoNome.addEventListener("focus", () => {

        campoNome.classList.add("campo-focado");

    });

}


/*
===========================================================
12. BLUR
===========================================================

"blur" é o contrário de "focus".

Ele acontece quando o elemento perde o foco.

Exemplo:

Usuário entra no campo:

focus

Usuário sai do campo:

blur
*/

if (campoNome) {

    campoNome.addEventListener("blur", () => {

        console.log("Campo perdeu o foco.");

    });

}


/*
-----------------------------------------------------------
Podemos remover a classe adicionada durante o focus.
*/

if (campoNome) {

    campoNome.addEventListener("blur", () => {

        campoNome.classList.remove("campo-focado");

    });

}


/*
===========================================================
13. INPUT
===========================================================

O evento "input" acontece sempre que o valor de um campo
é alterado pelo usuário.

É muito útil para:

- Validação em tempo real
- Contadores de caracteres
- Filtros
- Pesquisa
- Atualização de informações na tela
*/

if (campoNome) {

    campoNome.addEventListener("input", () => {

        console.log("Valor atual:", campoNome.value);

    });

}


/*
===========================================================
14. CHANGE
===========================================================

O evento "change" acontece quando o valor de um elemento
é alterado e a alteração é confirmada.

É bastante utilizado em:

- select
- checkbox
- radio
- inputs

Exemplo:

<select id="cidade">
    <option value="friburgo">Nova Friburgo</option>
    <option value="rio">Rio de Janeiro</option>
</select>
*/

const cidade = document.querySelector("#cidade");

if (cidade) {

    cidade.addEventListener("change", () => {

        console.log("Cidade selecionada:", cidade.value);

    });

}


/*
===========================================================
15. EVENTOS EM FORMULÁRIOS
===========================================================

Formulários possuem eventos próprios.

O principal é:

submit

Ele acontece quando o formulário é enviado.
*/

const formulario = document.querySelector("#formulario");

if (formulario) {

    formulario.addEventListener("submit", (event) => {

        console.log("Formulário enviado!");

    });

}


/*
===========================================================
16. PREVENINDO O ENVIO DO FORMULÁRIO
===========================================================

Por padrão, quando um formulário é enviado, o navegador
pode recarregar a página ou navegar para outro endereço.

Quando queremos tratar o formulário utilizando JavaScript,
normalmente impedimos esse comportamento com:

event.preventDefault();

Exemplo:
*/

if (formulario) {

    formulario.addEventListener("submit", (event) => {

        event.preventDefault();

        console.log("Envio padrão do formulário bloqueado.");

    });

}


/*
===========================================================
17. CAPTURANDO VALORES DO FORMULÁRIO
===========================================================

Podemos acessar o valor de um input através de:

input.value

Exemplo:

const nome = document.querySelector("#nome");

console.log(nome.value);

Isso permite pegar aquilo que o usuário digitou.
*/

if (formulario && campoNome) {

    formulario.addEventListener("submit", (event) => {

        event.preventDefault();

        const nome = campoNome.value;

        console.log("Nome informado:", nome);

    });

}


/*
===========================================================
18. VALIDAÇÃO SIMPLES DE FORMULÁRIO
===========================================================

Podemos verificar se o usuário realmente informou
algum valor.

Exemplo:

if (campo.value.trim() === "") {
    console.log("Campo obrigatório!");
}

trim() remove espaços no começo e no final da string.

Isso evita que uma entrada como:

"     "

seja considerada um valor válido.
*/

if (formulario && campoNome) {

    formulario.addEventListener("submit", (event) => {

        event.preventDefault();

        const nome = campoNome.value.trim();

        if (nome === "") {

            console.log("O nome é obrigatório!");

            return;

        }

        console.log("Formulário válido!");

    });

}


/*
===========================================================
19. CHECKBOX
===========================================================

Checkbox possui a propriedade:

checked

Ela informa se o checkbox está marcado.

Exemplo:

<input type="checkbox" id="termos">

Podemos verificar:
*/

const termos = document.querySelector("#termos");

if (termos) {

    termos.addEventListener("change", () => {

        if (termos.checked) {

            console.log("Termos aceitos.");

        } else {

            console.log("Termos não aceitos.");

        }

    });

}


/*
===========================================================
20. EVENTO EM RADIO BUTTON
===========================================================

Radio buttons também podem utilizar o evento "change".

Exemplo:

<input type="radio" name="sexo" value="masculino">
<input type="radio" name="sexo" value="feminino">

O JavaScript pode descobrir qual opção foi selecionada.
*/

const radios = document.querySelectorAll(
    'input[name="sexo"]'
);

radios.forEach((radio) => {

    radio.addEventListener("change", () => {

        console.log("Opção selecionada:", radio.value);

    });

});


/*
===========================================================
21. REMOVENDO UM EVENT LISTENER
===========================================================

Para remover um evento, precisamos passar a mesma função
que foi utilizada para adicioná-lo.

Exemplo:

function mostrarMensagem() {
    console.log("Olá!");
}

elemento.addEventListener("click", mostrarMensagem);

Depois:

elemento.removeEventListener("click", mostrarMensagem);

IMPORTANTE:

Isso NÃO funciona:

elemento.addEventListener("click", () => {
    console.log("Olá!");
});

elemento.removeEventListener("click", () => {
    console.log("Olá!");
});

As duas arrow functions são funções diferentes.

Por isso, quando precisamos remover um evento, é importante
manter uma referência para a função.
*/

function mostrarMensagem() {

    console.log("Mensagem exibida!");

}

if (botao) {

    botao.addEventListener("click", mostrarMensagem);

    // Para remover posteriormente:
    // botao.removeEventListener("click", mostrarMensagem);

}


/*
===========================================================
22. EVENT DELEGATION
===========================================================

Event Delegation é uma técnica muito importante.

Em vez de adicionar um evento individualmente em vários
elementos, podemos adicionar um único evento no elemento
pai e descobrir qual elemento filho foi clicado.

Exemplo de HTML:

<ul id="lista">
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
</ul>
*/

const lista = document.querySelector("#lista");

if (lista) {

    lista.addEventListener("click", (event) => {

        if (event.target.tagName === "LI") {

            console.log("Item clicado:", event.target.textContent);

        }

    });

}


/*
===========================================================
23. DIFERENÇA ENTRE target E currentTarget
===========================================================

Essa diferença é muito importante.

event.target
    -> elemento que realmente originou o evento.

event.currentTarget
    -> elemento onde o listener está registrado.

Exemplo:

lista.addEventListener("click", (event) => {

    console.log(event.target);
    console.log(event.currentTarget);

});

Se clicarmos em um <li>:

target
    -> <li>

currentTarget
    -> <ul>

Isso é muito utilizado em Event Delegation.
*/


/*
===========================================================
24. EVENTOS MAIS IMPORTANTES PARA CONSULTA
===========================================================

MOUSE:

click
dblclick
mousedown
mouseup
mousemove
mouseenter
mouseleave


TECLADO:

keydown
keyup


FOCUS:

focus
blur


FORMULÁRIOS:

submit
input
change


INTERFACE:

DOMContentLoaded
load
resize
scroll


OUTROS:

event.preventDefault()
event.target
event.currentTarget
event.key
event.ctrlKey
event.shiftKey
event.altKey

===========================================================
*/


/*
===========================================================
25. EXEMPLO PRÁTICO COMPLETO
===========================================================

Imagine este HTML:

<form id="formulario">
    <input id="nome" type="text">

    <button type="submit">
        Enviar
    </button>
</form>

Podemos combinar vários eventos para criar uma
pequena interação.
*/

const form = document.querySelector("#formulario");
const input = document.querySelector("#nome");

if (form && input) {

    // Executado quando o usuário entra no campo.
    input.addEventListener("focus", () => {

        console.log("Usuário começou a preencher o campo.");

    });


    // Executado quando o usuário digita.
    input.addEventListener("input", () => {

        console.log("Usuário digitou:", input.value);

    });


    // Executado quando o usuário sai do campo.
    input.addEventListener("blur", () => {

        console.log("Usuário saiu do campo.");

    });


    // Executado quando o formulário é enviado.
    form.addEventListener("submit", (event) => {

        // Impede o comportamento padrão do formulário.
        event.preventDefault();

        const nome = input.value.trim();

        if (nome === "") {

            console.log("Digite seu nome.");

            return;

        }

        console.log(`Olá, ${nome}!`);

    });

}


/*
===========================================================
26. BOAS PRÁTICAS
===========================================================

1. Prefira addEventListener()

É mais flexível do que:

elemento.onclick = ...

Exemplo recomendado:

botao.addEventListener("click", minhaFuncao);


2. Dê nomes claros às funções.

Evite:

function f() {}

Prefira:

function validarFormulario() {}


3. Não coloque lógica demais dentro do evento.

Em projetos maiores, é melhor separar responsabilidades.

Exemplo:

botao.addEventListener("click", salvarUsuario);

function salvarUsuario() {
    // lógica
}


4. Utilize preventDefault() somente quando necessário.

Ele impede o comportamento padrão do navegador.


5. Tome cuidado com eventos que disparam muitas vezes.

Exemplos:

mousemove
scroll
resize
input

Esses eventos podem ser executados muitas vezes
durante uma interação.


6. Use Event Delegation quando fizer sentido.

Principalmente quando temos muitos elementos semelhantes
ou elementos criados dinamicamente.


===========================================================
                RESUMO FINAL
===========================================================

Eventos permitem que o JavaScript responda às ações
do usuário e do navegador.

O padrão mais importante para memorizar é:

elemento.addEventListener("evento", função);

Exemplo:

botao.addEventListener("click", () => {
    console.log("Clique!");
});

A partir disso, podemos criar interfaces interativas,
validar formulários, responder ao teclado, controlar
mouse, trabalhar com foco e criar aplicações muito mais
dinâmicas.

===========================================================
*/