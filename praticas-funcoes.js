
/*
Conteúdo:

1. Objetos Literais
2. Objetos Constantes
3. Tratamento de Erros (try / catch / throw / finally)
4. Funções Construtoras
5. Funções Construtoras com Encapsulamento
6. Factory Functions
7. Protótipos
8. Comparação entre Constructor e Factory
9. Boas Práticas

===============================================================================
*/


//=============================================================================
// 1. OBJETOS LITERAIS
//=============================================================================

/*
Objeto literal é a forma mais simples de criar objetos.

Ele é criado utilizando chaves {}.

Cada informação dentro do objeto é chamada de propriedade.

Também podemos criar funções dentro do objeto, chamadas de métodos.
*/

const pessoa = {
    nome: "João",
    idade: 25,
    profissao: "Programador",

    apresentar() {
        console.log(`Olá! Meu nome é ${this.nome}.`);
    }
};

console.log(pessoa.nome);
console.log(pessoa.idade);

pessoa.apresentar();


/*
this

Dentro de um método, "this" representa o próprio objeto.

Sem ele, o método não saberia de qual objeto deve buscar os dados.
*/


//=============================================================================
// ADICIONANDO NOVAS PROPRIEDADES
//=============================================================================

pessoa.altura = 1.80;

console.log(pessoa);


//=============================================================================
// REMOVENDO PROPRIEDADES
//=============================================================================

delete pessoa.profissao;

console.log(pessoa);


//=============================================================================
// ACESSANDO PROPRIEDADES
//=============================================================================

console.log(pessoa.nome);

console.log(pessoa["idade"]);

/*
Notação ponto

obj.nome

Mais utilizada.

Notação colchetes

obj["nome"]

Muito útil quando o nome da propriedade vem de uma variável.
*/


//=============================================================================
// 2. OBJETOS CONSTANTES
//=============================================================================

/*
Muitos iniciantes acreditam que um objeto declarado com const
não pode ser alterado.

Isso NÃO é verdade.

const impede apenas que a variável receba outro objeto.

As propriedades continuam podendo ser modificadas.
*/

const carro = {
    marca: "Honda",
    modelo: "Civic"
};

carro.modelo = "HR-V";

console.log(carro);

/*
Isto gera erro:

carro = {}

Porque estamos tentando trocar a referência do objeto.
*/


//=============================================================================
// CONGELANDO UM OBJETO
//=============================================================================

/*
Object.freeze()

Impede qualquer alteração.
*/

const usuario = {
    nome: "Carlos",
    idade: 30
};

Object.freeze(usuario);

// Não funciona
usuario.nome = "Pedro";

console.log(usuario);


//=============================================================================
// SELANDO UM OBJETO
//=============================================================================

/*
Object.seal()

Permite alterar valores existentes.

Não permite adicionar nem remover propriedades.
*/

const produto = {
    nome: "Notebook",
    preco: 5000
};

Object.seal(produto);

produto.preco = 4500;

produto.estoque = 20;

delete produto.nome;

console.log(produto);


//=============================================================================
// 3. TRATAMENTO DE ERROS
//=============================================================================

/*
Programas reais precisam lidar com erros.

Para isso usamos:

try
catch
finally
throw
*/


//=============================================================================
// TRY + CATCH
//=============================================================================

try {

    const numero = 10;

    console.log(numero.toUpperCase());

} catch (erro) {

    console.log("Ocorreu um erro.");

    console.log(erro.message);

}

/*
O programa não para.

O erro é capturado e tratado.
*/


//=============================================================================
// THROW
//=============================================================================

/*
throw significa:

"Lance um erro."

É muito utilizado para validar dados.
*/

function dividir(a, b) {

    if (b === 0) {
        throw new Error("Não é possível dividir por zero.");
    }

    return a / b;
}

try {

    console.log(dividir(20, 2));

    console.log(dividir(20, 0));

} catch (erro) {

    console.log(erro.message);

}


//=============================================================================
// FINALLY
//=============================================================================

/*
finally sempre será executado.

Mesmo que ocorra erro.
*/

try {

    console.log("Abrindo conexão...");

} finally {

    console.log("Fechando conexão...");

}


//=============================================================================
// 4. FUNÇÕES CONSTRUTORAS
//=============================================================================

/*
São funções utilizadas para fabricar objetos.

Por convenção começam com letra maiúscula.

São chamadas utilizando "new".
*/

function Pessoa(nome, idade) {

    this.nome = nome;
    this.idade = idade;

    this.apresentar = function () {
        console.log(`Olá! Meu nome é ${this.nome}`);
    };

}

const pessoa1 = new Pessoa("Maria", 28);

const pessoa2 = new Pessoa("Lucas", 22);

console.log(pessoa1);

console.log(pessoa2);

pessoa1.apresentar();


//=============================================================================
// O QUE O NEW FAZ?
//=============================================================================

/*
Quando usamos:

new Pessoa()

O JavaScript faz internamente:

1 Cria um objeto vazio

2 Liga esse objeto ao prototype

3 this aponta para esse objeto

4 Retorna o objeto automaticamente
*/


//=============================================================================
// 5. FUNÇÕES CONSTRUTORAS COM ENCAPSULAMENTO
//=============================================================================

/*
Encapsular significa esconder informações internas.

Para isso utilizamos variáveis locais.

Essas variáveis não podem ser acessadas de fora.
*/

function ContaBancaria(titular, saldoInicial) {

    this.titular = titular;

    // Variável privada
    let saldo = saldoInicial;

    this.depositar = function(valor) {

        if (valor > 0) {
            saldo += valor;
        }

    };

    this.sacar = function(valor) {

        if (valor <= saldo) {
            saldo -= valor;
        }

    };

    this.verSaldo = function() {
        return saldo;
    };

}

const conta = new ContaBancaria("João", 1000);

conta.depositar(500);

conta.sacar(300);

console.log(conta.verSaldo());


// Isto NÃO funciona.

console.log(conta.saldo);

/*
Resultado:

undefined

Porque saldo está protegido.

Isso é encapsulamento.
*/


//=============================================================================
// 6. FACTORY FUNCTIONS
//=============================================================================

/*
Factory Function significa:

Função fábrica.

Ela cria objetos sem usar new.
*/

function criarPessoa(nome, idade) {

    return {

        nome,
        idade,

        apresentar() {
            console.log(`Olá! Meu nome é ${this.nome}`);
        }

    };

}

const usuario1 = criarPessoa("Ana", 18);

const usuario2 = criarPessoa("Pedro", 40);

usuario1.apresentar();

console.log(usuario2);


//=============================================================================
// FACTORY COM GETTERS
//=============================================================================

function criarProduto(nome, preco) {

    return {

        nome,

        preco,

        get precoFormatado() {
            return `R$ ${this.preco.toFixed(2)}`;
        }

    };

}

const teclado = criarProduto("Teclado", 180);

console.log(teclado.precoFormatado);


//=============================================================================
// 7. PROTÓTIPOS
//=============================================================================

/*
Imagine que você cria 10.000 pessoas.

Se cada objeto possuir sua própria função apresentar()

Teremos 10.000 cópias dessa função.

Isso desperdiça memória.

Os protótipos resolvem exatamente esse problema.
*/

function Aluno(nome) {

    this.nome = nome;

}

Aluno.prototype.estudar = function() {

    console.log(`${this.nome} está estudando.`);

};

const aluno1 = new Aluno("Carlos");

const aluno2 = new Aluno("Fernanda");

aluno1.estudar();

aluno2.estudar();


//=============================================================================
// COMO O PROTOTYPE FUNCIONA
//=============================================================================

/*

Objeto

↓

Procura propriedade

↓

Não encontrou?

↓

Procura no Prototype

↓

Encontrou?

↓

Executa

*/


//=============================================================================
// VERIFICANDO O PROTOTYPE
//=============================================================================

console.log(aluno1.__proto__);

console.log(Aluno.prototype);

console.log(aluno1.__proto__ === Aluno.prototype);


//=============================================================================
// ADICIONANDO NOVOS MÉTODOS AO PROTOTYPE
//=============================================================================

Aluno.prototype.apresentar = function () {

    console.log(`Meu nome é ${this.nome}`);

};

aluno1.apresentar();


//=============================================================================
// 8. CONSTRUCTOR VS FACTORY
//=============================================================================

/*

Constructor

✔ Usa new

✔ Usa this

✔ Prototype

✔ Muito usado em POO clássica


Factory

✔ Não usa new

✔ Código mais simples

✔ Muito usada atualmente

✔ Fácil de testar


Não existe melhor.

Cada projeto escolhe a abordagem mais adequada.

*/


//=============================================================================
// 9. BOAS PRÁTICAS
//=============================================================================

/*

✔ Use const sempre que possível.

✔ Use let apenas quando precisar reatribuir valores.

✔ Prefira Factory Functions quando não precisar de herança baseada em protótipos.

✔ Utilize Prototype quando milhares de objetos compartilham métodos.

✔ Nunca deixe erros sem tratamento.

✔ Sempre valide parâmetros utilizando throw.

✔ Evite duplicar funções em cada objeto.

✔ Utilize encapsulamento para proteger dados importantes.

✔ Dê nomes claros para objetos, funções e métodos.

✔ Comente apenas quando realmente ajudar na compreensão.

*/


//=============================================================================
// EXERCÍCIOS PARA TREINAR
//=============================================================================

/*

1) Crie um objeto literal chamado livro.

Propriedades:
- titulo
- autor
- paginas

Método:
- abrir()

----------------------------------------------------

2) Crie uma função construtora chamada Animal.

Propriedades:
- nome
- espécie

Método:
- emitirSom()

----------------------------------------------------

3) Crie uma Factory Function para fabricar carros.

----------------------------------------------------

4) Crie uma Conta Bancária encapsulada.

Implemente:

depositar()

sacar()

verSaldo()

----------------------------------------------------

5) Utilize throw para impedir idade negativa.

----------------------------------------------------

6) Coloque um método falar() no prototype de Pessoa.

Crie três objetos.

Verifique que todos compartilham o mesmo método.

----------------------------------------------------

7) Congele um objeto usando Object.freeze().

Teste alterar uma propriedade.

----------------------------------------------------

8) Utilize Object.seal() e observe a diferença para freeze().

*/


//=============================================================================
// RESUMO
//=============================================================================

/*

OBJETO LITERAL

{}

↓

FACTORY

Retorna objeto

↓

CONSTRUCTOR

new

↓

PROTOTYPE

Compartilha métodos

↓

ENCAPSULAMENTO

Protege dados

↓

TRY/CATCH

Trata erros

↓

THROW

Cria erros personalizados

↓

OBJECT.FREEZE()

Objeto imutável

↓

OBJECT.SEAL()

Permite alterar apenas valores existentes

*/