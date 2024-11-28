function saudar() {
    // Obtém o valor do input
    var nome = document.getElementById("nome").value;

    // Verificar se o nome foi preenchido
    if (nome === "") {
        alert("Por favor, digite seu nome.");
    } else {
        // Exibe a mensagem de saudação com o nome
        var mensagem = "Olá, " + nome + "!";
        document.getElementById("mensagem").innerText = mensagem;
        // Altera a cor de fundo após o nome ser exibido
        document.body.style.backgroundColor = "black";
    }
}