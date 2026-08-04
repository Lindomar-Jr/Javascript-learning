/*

=========================================================
1. O QUE É UMA VARIÁVEL?
=========================================================

Variáveis são espaços na memória usados para armazenar
informações durante a execução do programa.

Exemplo:
*/

let nome = "João";
let idade = 25;

console.log(nome);
console.log(idade);

/*
Podemos alterar seus valores durante o programa.
*/

idade = 26;

console.log(idade);

/*
=========================================================
2. O QUE É VAR?
=========================================================

Antes do ES6 (ECMAScript 2015), praticamente todas as
variáveis eram declaradas usando var.

Exemplo:
*/

var cidade = "Rio de Janeiro";

console.log(cidade);

/*
Apesar de funcionar normalmente, o uso de var pode causar
comportamentos inesperados devido ao seu escopo e ao
hoisting.

Hoje em dia, seu uso não é recomendado para novos projetos.
*/

/*
=========================================================
3. O QUE É LET?
=========================================================

O let surgiu no ES6 para corrigir problemas do var.

Ele possui escopo de bloco, tornando o código mais seguro
e previsível.

Exemplo:
*/

let linguagem = "JavaScript";

console.log(linguagem);

/*
Na maioria dos casos, use let quando o valor poderá mudar.
*/

/*
=========================================================
4. ESCOPO (SCOPE)
=========================================================

Escopo define onde uma variável pode ser acessada.

Existem dois principais tipos:

- Escopo Global
- Escopo de Bloco

=========================================================
4.1 Escopo do VAR
=========================================================

O var possui escopo de função.

Isso significa que ele ignora blocos como:

if
for
while
switch

Exemplo:
*/

if (true) {
    var mensagem = "Olá!";
}

console.log(mensagem);

/*
Saída:

Olá!

Mesmo estando dentro do if, a variável continua existindo.

Isso pode gerar erros difíceis de encontrar.
*/

/*
=========================================================
4.2 Escopo do LET
=========================================================

O let possui escopo de bloco.

Exemplo:
*/

if (true) {
    let usuario = "Carlos";

    console.log(usuario);
}

/*
Ao tentar acessar fora do bloco:

console.log(usuario);

Resultado:

ReferenceError

A variável só existe dentro das chaves.
*/

/*
Isso deixa o código mais organizado e evita conflitos.
*/

/*
=========================================================
5. HOISTING
=========================================================

Hoisting significa "elevação".

O JavaScript move as declarações para o topo do código
durante a execução.

Porém, existe uma diferença importante entre var e let.

=========================================================
5.1 Hoisting com VAR
=========================================================
*/

console.log(produto);

var produto = "Notebook";

/*
Resultado:

undefined

O JavaScript interpreta assim:

var produto;

console.log(produto);

produto = "Notebook";

Ou seja:

A declaração sobe.
O valor NÃO.
*/

/*
=========================================================
5.2 Hoisting com LET
=========================================================

*/

console.log(cliente);

let cliente = "Maria";

/*
Resultado:

ReferenceError

Embora o let também seja elevado internamente,
ele entra na chamada:

Temporal Dead Zone (TDZ)

Enquanto não chegar à linha da declaração,
a variável não pode ser utilizada.

Isso evita vários bugs.
*/

/*
=========================================================
6. REDECLARAÇÃO
=========================================================

=========================================================
6.1 VAR permite redeclarar
=========================================================
*/

var numero = 10;
var numero = 20;

console.log(numero);

/*
Resultado:

20

Isso pode gerar problemas quando o projeto cresce.
*/

/*
=========================================================
6.2 LET não permite redeclarar
=========================================================
*/

let idadeAluno = 18;

// let idadeAluno = 19;

/*
Resultado:

SyntaxError

Mas podemos alterar o valor normalmente.
*/

idadeAluno = 19;

console.log(idadeAluno);

/*
=========================================================
7. REATRIBUIÇÃO
=========================================================

Tanto var quanto let permitem alterar valores.

=========================================================
VAR
=========================================================
*/

var cor = "Azul";

cor = "Verde";

console.log(cor);

/*
=========================================================
LET
=========================================================
*/

let linguagemFavorita = "JavaScript";

linguagemFavorita = "TypeScript";

console.log(linguagemFavorita);

/*
=========================================================
8. EXEMPLOS PRÁTICOS
=========================================================

Exemplo usando var
*/

for (var i = 0; i < 3; i++) {

}

console.log(i);

/*
Resultado:

3

A variável continua existindo fora do for.
*/

/*
Agora com let
*/

for (let j = 0; j < 3; j++) {

}

// console.log(j);

/*
Resultado:

ReferenceError

A variável só existe dentro do laço.
*/

/*
Esse comportamento evita muitos erros.
*/

/*
=========================================================
9. COMPARAÇÃO ENTRE VAR E LET
=========================================================

                VAR                     LET

Escopo      Função                 Bloco

Hoisting    Sim                    Sim (TDZ)

Redeclaração Sim                   Não

Reatribuição Sim                   Sim

Uso Atual   Evitar                 Recomendado

Segurança   Menor                  Maior

=========================================================
10. BOAS PRÁTICAS
=========================================================

✔ Prefira let na maioria das situações.

✔ Use const quando o valor não deve mudar.

✔ Evite var em projetos modernos.

✔ Declare variáveis o mais próximo possível de onde serão utilizadas.

✔ Escolha nomes claros para suas variáveis.

Exemplo ruim:

let x = "Carlos";

Exemplo bom:

let nomeCliente = "Carlos";

Isso melhora muito a leitura do código.

=========================================================
EXEMPLO FINAL
=========================================================
*/

let saldo = 1000;

if (saldo > 500) {

    let mensagem = "Saldo suficiente.";

    console.log(mensagem);
}

saldo += 500;

console.log("Saldo atual:", saldo);

/*
=========================================================
RESUMO
=========================================================

VAR

✔ Escopo de função
✔ Pode ser redeclarado
✔ Sofre hoisting
✔ Pode causar comportamentos inesperados

LET

✔ Escopo de bloco
✔ Não permite redeclaração
✔ Permite reatribuição
✔ Mais seguro
✔ É o mais utilizado atualmente

=========================================================
DICA DE DESENVOLVEDOR SÊNIOR
=========================================================

Ao escrever código moderno em JavaScript, siga uma regra simples:

- Use "const" por padrão.
- Se precisar alterar o valor da variável, use "let".
- Evite "var", exceto quando estiver dando manutenção em códigos legados (projetos antigos).

Essa prática torna seu código mais previsível, reduz bugs relacionados ao escopo e segue os padrões adotados pela comunidade JavaScript atualmente.
=========================================================