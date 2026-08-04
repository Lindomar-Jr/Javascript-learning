"use strict";
/*
Conteúdo:
1. O que é POO
2. Objetos
3. Classes
4. Constructor
5. Propriedades
6. Métodos
7. Instâncias
8. Encapsulamento
9. Getters e Setters
10. Herança
11. Polimorfismo
12. Classes Estáticas
13. Resumo
=========================================================
*/

/*
=========================================================
1. O QUE É PROGRAMAÇÃO ORIENTADA A OBJETOS?
=========================================================

Programação Orientada a Objetos (POO) é um paradigma de
programação baseado em OBJETOS.

Ao invés de criar diversas variáveis soltas, agrupamos
informações e comportamentos dentro de um objeto.

Exemplo:

Um carro possui:

Dados:
- marca
- modelo
- cor
- velocidade

Ações:
- acelerar()
- frear()
- ligar()

Perceba que faz sentido manter tudo junto.

Na POO chamamos isso de OBJETO.
*/


/*
=========================================================
2. OBJETOS
=========================================================

Um objeto é um conjunto de propriedades e métodos.
*/

const pessoa = {
    nome: "Carlos",
    idade: 28,

    falar() {
        console.log("Olá!");
    }
};

console.log(pessoa.nome);
console.log(pessoa.idade);

pessoa.falar();


/*
Resultado:

Carlos
28
Olá!

Observe:

nome e idade → propriedades

falar() → método
*/


/*
=========================================================
3. CLASSES
=========================================================

Uma classe funciona como uma FÁBRICA.

Ela define como os objetos serão criados.

Imagine uma fábrica de carros.

A fábrica possui um molde.

Cada carro produzido segue aquele molde.

Classe = molde
Objeto = carro produzido
*/

class Pessoa {

}

/*
Ainda não temos nenhuma informação.

Criamos apenas a estrutura.
*/


/*
=========================================================
4. CONSTRUCTOR
=========================================================

O constructor é executado automaticamente quando criamos
um novo objeto.

Ele serve para inicializar propriedades.
*/

class Usuario {

    constructor(nome, idade) {

        this.nome = nome;
        this.idade = idade;

    }

}

/*
this representa o objeto atual.

this.nome significa:

"O nome deste objeto."
*/


/*
=========================================================
5. INSTÂNCIAS
=========================================================

Criamos objetos usando a palavra NEW.
*/

const usuario1 = new Usuario("Ana", 22);
const usuario2 = new Usuario("Lucas", 30);

console.log(usuario1);
console.log(usuario2);

/*
Resultado:

Usuario { nome: "Ana", idade:22 }

Usuario { nome: "Lucas", idade:30 }

Cada objeto possui seus próprios valores.
*/


/*
=========================================================
6. MÉTODOS
=========================================================

Além de armazenar dados, uma classe pode possuir ações.
*/

class Cachorro {

    constructor(nome) {

        this.nome = nome;

    }

    latir() {

        console.log(`${this.nome} está latindo!`);

    }

}

const dog = new Cachorro("Thor");

dog.latir();

/*
Resultado:

Thor está latindo!
*/


/*
=========================================================
7. EXEMPLO MAIS COMPLETO
=========================================================
*/

class ContaBancaria {

    constructor(titular, saldo) {

        this.titular = titular;
        this.saldo = saldo;

    }

    depositar(valor) {

        this.saldo += valor;

        console.log(`Depósito de R$${valor}`);

    }

    sacar(valor) {

        this.saldo -= valor;

        console.log(`Saque de R$${valor}`);

    }

    mostrarSaldo() {

        console.log(`Saldo: R$${this.saldo}`);

    }

}

const conta = new ContaBancaria("Carlos", 1000);

conta.depositar(500);

conta.sacar(200);

conta.mostrarSaldo();


/*
Saída:

Depósito de R$500
Saque de R$200
Saldo: R$1300
*/


/*
=========================================================
8. ENCAPSULAMENTO
=========================================================

Encapsular significa proteger informações.

JavaScript possui atributos privados usando #.
*/

class Cofre {

    #senha;

    constructor(senha) {

        this.#senha = senha;

    }

    mostrarSenha() {

        console.log(this.#senha);

    }

}

const cofre = new Cofre("1234");

cofre.mostrarSenha();

/*
Tentativa:

console.log(cofre.#senha);

Erro!

A senha está protegida.
*/


/*
=========================================================
9. GETTERS E SETTERS
=========================================================

Servem para controlar leitura e alteração de valores.
*/

class Produto {

    constructor(nome) {

        this._nome = nome;

    }

    get nome() {

        return this._nome;

    }

    set nome(valor) {

        this._nome = valor;

    }

}

const produto = new Produto("Notebook");

console.log(produto.nome);

produto.nome = "Mouse";

console.log(produto.nome);

/*
Resultado:

Notebook

Mouse
*/


/*
=========================================================
10. HERANÇA
=========================================================

Herança permite criar uma nova classe baseada em outra.

Classe Pai

↓

Classe Filho

A classe filha herda tudo da classe pai.
*/

class Animal {

    constructor(nome) {

        this.nome = nome;

    }

    dormir() {

        console.log(`${this.nome} está dormindo.`);

    }

}

class Gato extends Animal {

    miar() {

        console.log(`${this.nome} está miando.`);

    }

}

const gato = new Gato("Mingau");

gato.dormir();

gato.miar();

/*
Resultado:

Mingau está dormindo.
Mingau está miando.
*/


/*
=========================================================
11. SUPER()
=========================================================

Quando uma classe herda outra, usamos super() para
executar o constructor da classe pai.
*/

class Veiculo {

    constructor(marca) {

        this.marca = marca;

    }

}

class Carro extends Veiculo {

    constructor(marca, modelo) {

        super(marca);

        this.modelo = modelo;

    }

}

const carro = new Carro("Toyota", "Corolla");

console.log(carro);

/*
Resultado:

{
    marca: Toyota,
    modelo: Corolla
}
*/


/*
=========================================================
12. POLIMORFISMO
=========================================================

Polimorfismo significa:

"O mesmo método pode ter comportamentos diferentes."

Exemplo:
*/

class Ave {

    emitirSom() {

        console.log("Som genérico");

    }

}

class Papagaio extends Ave {

    emitirSom() {

        console.log("Loro quer biscoito!");

    }

}

class Galinha extends Ave {

    emitirSom() {

        console.log("Cócóricó!");

    }

}

const papagaio = new Papagaio();
const galinha = new Galinha();

papagaio.emitirSom();

galinha.emitirSom();

/*
Mesmo método:

emitirSom()

Resultados diferentes.
*/


/*
=========================================================
13. MÉTODOS ESTÁTICOS
=========================================================

Métodos estáticos pertencem à classe e não ao objeto.

Não precisam de new.
*/

class Matematica {

    static somar(a, b) {

        return a + b;

    }

}

console.log(Matematica.somar(10, 20));

/*
Resultado:

30

Observe:

Não fizemos:

new Matematica()
*/


/*
=========================================================
14. EXEMPLO REAL
=========================================================

Imagine um sistema escolar.
*/

class Aluno {

    constructor(nome, nota) {

        this.nome = nome;
        this.nota = nota;

    }

    verificarSituacao() {

        if (this.nota >= 7) {

            console.log(`${this.nome} foi aprovado.`);

        } else {

            console.log(`${this.nome} foi reprovado.`);

        }

    }

}

const aluno1 = new Aluno("Pedro", 9);

const aluno2 = new Aluno("João", 5);

aluno1.verificarSituacao();

aluno2.verificarSituacao();


/*
=========================================================
15. PILARES DA POO
=========================================================

1) Encapsulamento

Protege informações.

Exemplo:

#senha


--------------------------------------

2) Herança

Uma classe herda características de outra.

Animal

↓

Cachorro

--------------------------------------

3) Polimorfismo

Mesmo método.

Comportamentos diferentes.

emitirSom()

↓

Papagaio → fala

Galinha → cacareja

--------------------------------------

4) Abstração

Consiste em mostrar apenas o que realmente importa para
quem utiliza a classe, escondendo os detalhes internos da
implementação.

Exemplo:

Você chama:

conta.depositar(100);

Não precisa saber como o saldo é atualizado internamente.
Basta usar o método.
*/


/*
=========================================================
16. RESUMO
=========================================================

Objeto
→ Possui dados e ações.

Classe
→ Modelo para criar objetos.

Constructor
→ Inicializa o objeto.

this
→ Representa o objeto atual.

new
→ Cria uma instância da classe.

Métodos
→ Funções da classe.

Herança
→ Uma classe aproveita outra.

super()
→ Chama o constructor da classe pai.

Encapsulamento
→ Protege atributos.

Getter
→ Lê um valor de forma controlada.

Setter
→ Altera um valor de forma controlada.

Polimorfismo
→ Mesmo método, comportamentos diferentes.

Abstração
→ Expõe apenas o necessário.

Métodos Estáticos
→ Pertencem à classe, não às instâncias.
=========================================================


CONCLUSÃO

A Programação Orientada a Objetos organiza o código em
objetos que representam elementos do mundo real.

Ela torna o código:

✔ Mais organizado

✔ Mais reutilizável

✔ Mais fácil de manter

✔ Mais escalável

Dominar POO é essencial para trabalhar com JavaScript
moderno, TypeScript, React, Node.js e diversos frameworks.
*/