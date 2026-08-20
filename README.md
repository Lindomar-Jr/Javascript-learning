# Guia de Estudos JavaScript

Repositório de estudos e práticas para aprender JavaScript do zero, consolidar os fundamentos da linguagem e aplicar os conceitos em projetos web simples.

O conteúdo está organizado de forma progressiva: começa com exemplos isolados e bastante comentados, avança para manipulação do DOM e eventos e termina com projetos interativos executados diretamente no navegador.

## Conteúdos estudados

### Fundamentos da linguagem

- Variáveis e diferenças entre `var` e `let`
- Operadores e atribuição
- Operadores unários
- Template strings e concatenação
- Estruturas condicionais com `if` e `else`
- Operador ternário e `switch`
- Laços de repetição
- Funções tradicionais, anônimas e arrow functions
- Funções nativas do JavaScript
- Arrays e métodos como `forEach`, `map`, `filter`, `reduce`, `find`, `some` e `every`
- Programação Orientada a Objetos, com objetos, classes, métodos, encapsulamento, herança e polimorfismo

### DOM e interação com a página

- Seleção de elementos com `getElementById`, `querySelector` e `querySelectorAll`
- Navegação entre elementos do documento
- Manipulação de atributos, classes e conteúdo
- Adição e remoção de elementos e classes
- Eventos de clique, mouse, teclado e formulários
- Atualização dinâmica da interface com JavaScript

## Projetos práticos

- [Lâmpada Mágica](./projetos/lampada-magica/): exercício de DOM, eventos e troca dinâmica de atributos e conteúdo.
- [Lista de Tarefas](./projetos/lista-de-tarefas/): aplicação para organizar tarefas no navegador.
- [Lista de Nomes](./projetos/listas-nomes/): prática com listas e manipulação de dados.
- [Frases Motivacionais](./projetos/frases-motivacionais/): aplicação que apresenta frases usando JavaScript.
- [Álcool ou Gasolina](./projetos/alcool-gasolina/): exercício de lógica para comparar o custo-benefício entre combustíveis.

## Tecnologias utilizadas

- HTML5
- CSS3
- JavaScript

## Como estudar e executar

1. Clone este repositório.
2. Escolha um dos arquivos `.js` de fundamentos e execute-o no console do navegador ou com Node.js, quando o exemplo não depender do DOM.
3. Para os exercícios de DOM e os projetos, abra o respectivo arquivo `index.html` no navegador.
4. Para uma experiência melhor, use a extensão **Live Server** do VS Code e inicie o servidor pelo `index.html` do projeto escolhido.
5. Leia os comentários dos arquivos e altere os exemplos para testar outros valores e comportamentos.

## Estrutura do repositório

```text
.
├── arquivos de fundamentos do JavaScript
├── dom/
├── eventos/
├── projeto-crud/
└── projetos/
    ├── alcool-gasolina/
    ├── frases-motivacionais/
    ├── lampada-magica/
    ├── lista-de-tarefas/
    └── listas-nomes/
```

## Objetivo

Servir como um guia de consulta e prática durante a aprendizagem de JavaScript, reunindo anotações, exemplos executáveis e pequenos projetos que conectam a lógica de programação à construção de interfaces web.
