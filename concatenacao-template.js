
/****************************************************************************************
 * ============================================================================
 * CONCATENAÇÃO
 * ============================================================================
 *
 * Concatenar significa unir ou juntar textos.
 *
 * Em JavaScript utilizamos o operador +
 *
 * Sintaxe:
 *
 * texto + texto
 *
 ****************************************************************************************/

let primeiroNome = "João";
let ultimoNome = "Silva";

let nomeCompleto = primeiroNome + ultimoNome;

console.log(nomeCompleto);
// Resultado:
// JoãoSilva

// Observe que não existe espaço entre as palavras.



/****************************************************************************************
 * ADICIONANDO ESPAÇOS
 *
 * Para adicionar um espaço basta concatenar uma string contendo " ".
 ****************************************************************************************/

let nomeCompleto2 = primeiroNome + " " + ultimoNome;

console.log(nomeCompleto2);

// Resultado:
// João Silva



/****************************************************************************************
 * CONCATENANDO MAIS DE DUAS STRINGS
 ****************************************************************************************/

let cidade = "Rio de Janeiro";
let estado = "RJ";

let endereco = cidade + " - " + estado;

console.log(endereco);

// Resultado:
// Rio de Janeiro - RJ



/****************************************************************************************
 * CONCATENANDO TEXTO COM NÚMEROS
 *
 * Quando existe uma string na operação, o JavaScript converte os números
 * automaticamente para texto.
 ****************************************************************************************/

let idade = 24;

console.log("Idade: " + idade);

// Resultado:
// Idade: 24



/****************************************************************************************
 * CONCATENANDO VÁRIAS INFORMAÇÕES
 ****************************************************************************************/

let produto = "Notebook";
let preco = 3500;

console.log("Produto: " + produto + " | Preço: R$ " + preco);

// Resultado:
// Produto: Notebook | Preço: R$ 3500



/****************************************************************************************
 * CUIDADO COM A ORDEM DAS OPERAÇÕES
 ****************************************************************************************/

console.log("Resultado: " + 10 + 5);

// Resultado:
// Resultado: 105

// O JavaScript começou concatenando texto.
// Depois transformou os números em string.



/****************************************************************************************
 * UTILIZANDO PARÊNTESES
 *
 * Os parênteses fazem a conta primeiro.
 ****************************************************************************************/

console.log("Resultado: " + (10 + 5));

// Resultado:
// Resultado: 15



/****************************************************************************************
 * CONCATENANDO VARIÁVEIS E TEXTOS
 ****************************************************************************************/

let linguagem = "JavaScript";
let nivel = "Iniciante";

console.log("Curso de " + linguagem + " - Nível: " + nivel);

// Resultado:
// Curso de JavaScript - Nível: Iniciante



/****************************************************************************************
 * ============================================================================
 * TEMPLATE STRING (Template Literal)
 * ============================================================================
 *
 * Template String foi introduzida no ES6 (ECMAScript 2015).
 *
 * Ela permite criar textos de forma muito mais organizada.
 *
 * Em vez de usar aspas simples ('') ou duplas (""),
 * utilizamos CRASES (` `).
 *
 ****************************************************************************************/

let aluno = "Carlos";

console.log(`Olá ${aluno}!`);

// Resultado:
// Olá Carlos!



/****************************************************************************************
 * VANTAGENS DA TEMPLATE STRING
 *
 * ✔ Código mais limpo
 * ✔ Mais fácil de ler
 * ✔ Não precisa usar vários operadores +
 * ✔ Permite inserir variáveis facilmente
 ****************************************************************************************/

let curso = "JavaScript";
let modulo = 5;

console.log(`Curso: ${curso} | Módulo: ${modulo}`);

// Resultado:
// Curso: JavaScript | Módulo: 5



/****************************************************************************************
 * INSERINDO EXPRESSÕES
 *
 * Dentro das chaves podemos colocar expressões JavaScript.
 ****************************************************************************************/

let numero1 = 20;
let numero2 = 10;

console.log(`A soma é ${numero1 + numero2}`);

// Resultado:
// A soma é 30



/****************************************************************************************
 * CHAMANDO MÉTODOS
 *
 * Também é possível utilizar métodos.
 ****************************************************************************************/

let cidadeUsuario = "nova friburgo";

console.log(`Cidade: ${cidadeUsuario.toUpperCase()}`);

// Resultado:
// Cidade: NOVA FRIBURGO



/****************************************************************************************
 * MULTIPLICAÇÃO DENTRO DA TEMPLATE STRING
 ****************************************************************************************/

let quantidade = 4;
let valor = 15;

console.log(`Total: R$ ${quantidade * valor}`);

// Resultado:
// Total: R$ 60



/****************************************************************************************
 * CONCATENAÇÃO X TEMPLATE STRING
 ****************************************************************************************/

let usuario = "Maria";
let pontos = 150;

// Concatenação

console.log("Usuário: " + usuario + " possui " + pontos + " pontos.");

// Template String

console.log(`Usuário: ${usuario} possui ${pontos} pontos.`);



/****************************************************************************************
 * TEMPLATE STRING COM MÚLTIPLAS LINHAS
 *
 * Diferente da concatenação tradicional, a Template String permite
 * escrever várias linhas sem caracteres especiais (\n).
 ****************************************************************************************/

let mensagem = `
Bem-vindo ao sistema!

Escolha uma das opções:

1 - Cadastro
2 - Login
3 - Sair
`;

console.log(mensagem);



/****************************************************************************************
 * EXEMPLO PRÁTICO
 ****************************************************************************************/

let cliente = "Ana";
let produtoComprado = "Mouse Gamer";
let quantidadeComprada = 2;
let valorUnitario = 120;

console.log(`
Cliente: ${cliente}
Produto: ${produtoComprado}
Quantidade: ${quantidadeComprada}
Valor Unitário: R$ ${valorUnitario}
Total da Compra: R$ ${quantidadeComprada * valorUnitario}
`);



/****************************************************************************************
 * CONCATENANDO COM OPERADOR +=
 *
 * O operador += adiciona um novo texto ao conteúdo já existente da variável.
 ****************************************************************************************/

let frase = "Aprendendo";

frase += " JavaScript";

console.log(frase);

// Resultado:
// Aprendendo JavaScript



/****************************************************************************************
 * MAIS UM EXEMPLO
 ****************************************************************************************/

let texto = "HTML";

texto += " + CSS";
texto += " + JavaScript";

console.log(texto);

// Resultado:
// HTML + CSS + JavaScript



/****************************************************************************************
 * QUANDO USAR CONCATENAÇÃO?
 *
 * ✔ Projetos antigos
 * ✔ Pequenas junções de texto
 * ✔ Compatibilidade com códigos legados
 ****************************************************************************************/



/****************************************************************************************
 * QUANDO USAR TEMPLATE STRING?
 *
 * ✔ Sempre que possível
 * ✔ Quando houver muitas variáveis
 * ✔ Quando precisar escrever várias linhas
 * ✔ Quando quiser um código mais limpo
 * ✔ Quando precisar executar expressões dentro do texto
 ****************************************************************************************/



/****************************************************************************************
 * RESUMO
 *
 * CONCATENAÇÃO
 * ----------------------------
 * Utiliza o operador +
 *
 * Exemplo:
 * "Olá " + nome
 *
 * Vantagens:
 * ✔ Simples
 * ✔ Compatível com versões antigas
 *
 *
 * TEMPLATE STRING
 * ----------------------------
 * Utiliza crases (` `)
 *
 * Variáveis:
 * ${variavel}
 *
 * Expressões:
 * ${10 + 5}
 *
 * Vantagens:
 * ✔ Muito mais legível
 * ✔ Permite múltiplas linhas
 * ✔ Facilita manutenção do código
 * ✔ É o padrão moderno do JavaScript
 *
 *
 * DICA DE DESENVOLVEDOR
 * ----------------------------
 * Em projetos modernos, prefira Template Strings.
 * Elas deixam o código mais organizado, reduzem erros de concatenação
 * e facilitam a leitura por outros desenvolvedores.
 ****************************************************************************************/