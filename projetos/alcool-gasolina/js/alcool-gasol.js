function calcularMelhorPreco() {
        
//validar os campos
let precoAlcool = document.getElementById("alcool").value;
let precoGasolina = document.getElementById("gasolina").value;

if (precoAlcool != ""){
    if (precoGasolina != "") {
    
    }
    else{
    alert("Digite o preço da gasolina");
    }

}
else{
    alert("Digite o preço do álcool");
}


/*
Calcular se o preço do álcool é menor que 70% do preço da gasolina.
valorAlcool / valorGasolina >= 0.7 é melhor utilizar gasolina, caso contrário, é melhor utilizar álcool.*/

let resultado = precoAlcool / precoGasolina;

if (resultado >= 0.7) {
        document.getElementById("resultado").innerHTML = "É melhor utilizar gasolina.";
    }
    else {
        document.getElementById("resultado").innerHTML = "É melhor utilizar álcool.";
    }

}
