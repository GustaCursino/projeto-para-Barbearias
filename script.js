const form = document.querySelector(".formulario-fale-conosco");
const mascara = document.querySelector(".mascara-formulario");

function mostraform() {
    form.classList.add('active');
    mascara.classList.add('active');
}

function esconderform() {
    form.classList.remove('active');
    mascara.classList.remove('active');
}

// Função para rolar suavemente até a seção "Nossos Serviços"
document.querySelector('a[href="#servicos"]').addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector('#servicos').scrollIntoView({ behavior: 'smooth' });
});

