// Função para exibir o modal de dúvidas
function mostrarDuvidas() {
    document.getElementById('modalDuvidas').style.display = 'block';
}

// Função para esconder o modal de dúvidas
function esconderDuvidas() {
    document.getElementById('modalDuvidas').style.display = 'none';
}

// Adiciona interação nas perguntas para expandir e recolher as respostas
const perguntas = document.querySelectorAll('.modal-content li');

perguntas.forEach(pergunta => {
    pergunta.addEventListener('click', () => {
        pergunta.classList.toggle('active'); // Adiciona ou remove a classe 'active' para exibir/esconder a resposta
    });
});


