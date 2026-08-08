const lampada = document.getElementById('lampada');
const mensagem = document.getElementById('mensagem');

function ligarLampada() {
    lampada.src='../lampada-magica/assets/lampada-acesa.svg';
    lampada.alt='Lâmpada acesa';
    mensagem.textContent = 'A lâmpada está acesa!';
}

function apagarLampada() {
    lampada.src='../lampada-magica/assets/lampada-apagada.svg';
    lampada.alt='Lâmpada apagada';
    mensagem.textContent = 'A lâmpada está apagada!';
}
