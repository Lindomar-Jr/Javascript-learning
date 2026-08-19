const form = document.querySelector('#tarefa-form');
const input = document.querySelector('#tarefa-input');
const listaTarefas = document.querySelector('#tarefas-lista');

//função responsável por criar o item da lista de tarefas
function criarTarefa(tarefa) {
    const item =document.createElement('li');
    const textoTarefa = document.createElement('span'); 
        textoTarefa.textContent = tarefa;
        item.appendChild(textoTarefa); //adiciona o texto dentro de item (<li>)

        textoTarefa.addEventListener('click', function() { // Adiciona um evento de clique ao texto da tarefa para marcar como concluída ou desmarcar
        item.classList.toggle('concluida');
    });

    return item;
}

function removerTarefa(item) {
    const botaoRemover = document.createElement('button'); // cria o botão de remover tarefa e o coloca como filho do item (<li>)
        botaoRemover.textContent = 'Deletar';
        item.appendChild(botaoRemover);
    return botaoRemover;    
}

    form.addEventListener('submit', function(event) { //espera submit ser clicado para executar a função
    event.preventDefault(); // Impede recarregamento da página após enviar a tarefa para a lista

    const tarefa = input.value; // recebe o valor digitado no input

    if (tarefa.trim() === "") { // testa se o usuário digitou algo no input, caso não tenha digitado nada, exibe um alerta
        alert('Por favor, insira uma tarefa válida.'); 
        return;
    }

    const item = criarTarefa(tarefa); //chama a função criarTarefa para criar o item(<li>) e adicionar a tarefa dentro de <li> da lista de tarefas

    const botaoRemover = removerTarefa(item); //chama a função removerTarefa para criar o botão de remover tarefa

    botaoRemover.addEventListener('click', function(event) {
        event.stopPropagation(); // Impede que o evento de clique no item (<li>) seja acionado
        listaTarefas.removeChild(item);
    });

    listaTarefas.appendChild(item); // Adiciona o item (<li>) à lista de tarefas (<ul>)
    input.value = '';  // Limpar o campo de entrada após adicionar a tarefa
});