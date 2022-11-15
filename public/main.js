const bodyMensagens = document.getElementById('getMensagens');

const getMensagens = async () => {
    var resposta = await fetch("http://localhost:8084/");
    var dados = await resposta.json();

    console.log (dados)

    dados.map(mensagem => {

        bodyMensagens.innerHTML = 
        `<h2>${mensagem.descricao}</h2>
        <i class="fa-solid fa-rotate-right" onClick="window.location.reload();"></i>
        `
    })
};

getMensagens()