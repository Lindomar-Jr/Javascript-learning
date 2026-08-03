let nomes = [
    "junior",
    "mariana",
    "winnie",
    "lindomar",
    "lidiane",
    "lucas",
    "fatima",
    "sergio",
    "tatiana",
    "bruno",
    "maria",
]

function pesquisarNomes() {

    let nomePesquisado = document.getElementById('pesquisar').value

    let itemLista = ""

    for (indice in nomes) {
        if (nomes[indice] === nomePesquisado) {
             itemLista += `<li class="list-group-item">${nomePesquisado}</li>`
        }
    }

    document.getElementById('lista').innerHTML = itemLista
}

function carregarNomes() {

    let itemLista = ""

    for (indice in nomes) {
        
        let nome = nomes[indice]
        itemLista += `<li class="list-group-item">${nome}</li>`
    }
    document.getElementById('lista').innerHTML = itemLista
}