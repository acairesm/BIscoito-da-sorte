

// Função para esconder as telas
function hideScreens(event) {

    event.preventDefault()
    // Seleciona os elementos .screen1 e .screen2
    const screen1 = document.querySelector('.screen1');
    const screen2 = document.querySelector('.screen2');
    
    // Adiciona a classe 'hide' para esconder a tela 1 e remove a classe 'hide' para mostrar a tela 2
    screen1.classList.add('hide');
    screen2.classList.remove('hide');
}

// Função para mostrar a tela 1
function showScreen() {
    // Seleciona os elementos .screen1 e .screen2
    const screen1 = document.querySelector('.screen1');
    const screen2 = document.querySelector('.screen2');

    // Remove a classe 'hide' para mostrar a tela 1 e adiciona a classe 'hide' para esconder a tela 2
    screen1.classList.remove('hide');
    screen2.classList.add('hide');
}

var mensagens = [
    "Bom dia! Que seu dia seja repleto de alegria e realizações.",
    "Bom dia! Aproveite cada momento do seu dia com um sorriso no rosto.",
    "Bom dia! Lembre-se de que cada novo dia é uma nova oportunidade.",
];

// Função para mostrar uma mensagem aleatória
function mostrarMensagemAleatoria() {
    // Gerar um índice aleatório com base no comprimento do array de mensagens
    var indice = Math.floor(Math.random() * mensagens.length);
    
    // Obter a mensagem aleatória
    var mensagem = mensagens[indice];
    
    // Exibir a mensagem na página
    document.getElementById("mensagem").innerText = mensagem;
}

// Seleciona o botão pelo seu ID e adiciona um ouvinte de evento de clique
document.querySelector('.button1').addEventListener("click", mostrarMensagemAleatoria);


// Função para mostrar uma mensagem aleatória
function mostrarMensagemAleatoria() {
    // Gerar um índice aleatório com base no comprimento do array de mensagens
    var indice = Math.floor(Math.random() * mensagens.length);
    
    // Obter a mensagem aleatória
    var mensagem = mensagens[indice];
    
    // Selecionar o elemento onde a mensagem será exibida
    var mensagemElement = document.getElementById("mensagem");
    
    // Exibir a mensagem na página
    mensagemElement.innerText = mensagem;
    
    // Adicionar a classe de estilização à mensagem
    mensagemElement.classList.add("sortedehoje");
}
