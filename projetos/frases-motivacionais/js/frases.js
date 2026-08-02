function gerarNovaFrase() {
    const frases = [
        "Acredite em si mesmo e todo o resto virá naturalmente.",
        "O sucesso é a soma de pequenos esforços repetidos dia após dia.",
        "Não espere por oportunidades, crie-as.",
        "A persistência é o caminho do êxito.",
        "A única maneira de fazer um excelente trabalho é amar o que você faz.",
        "Não importa quantas vezes você falhe, o que importa é quantas vezes você se levanta.",
        "A vida é 10% o que acontece com você e 90% como você reage a isso.",
        "O futuro pertence àqueles que acreditam na beleza de seus sonhos.",
        "Não desista. Geralmente é a última chave no chaveiro que abre a fechadura.",
        "Acredite que você pode e você já está no meio do caminho."
    ];

    let fraseNova = frases [Math.floor(Math.random() * frases.length)];
    document.getElementById("fraseNova").innerHTML = fraseNova;

} 
