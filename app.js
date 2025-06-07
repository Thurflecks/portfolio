function enviarMensagem(event) {
    event.preventDefault();

    const nome = document.getElementById("nome").value;
    const mensagem = document.getElementById("mensagem").value;
    const numero = "5598981212573";
    const texto = `Olá, meu nome é ${nome} e gostaria de entrar em contato com você. ${mensagem}`;

    const msgFormatada = encodeURIComponent(texto)
    const url = `https://wa.me/${numero}?text=${msgFormatada}`;
    console.log(url);
    window.open(url, '_blank');
}