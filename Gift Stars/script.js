const formulario = document.getElementById('form');
const resultado = document.getElementById('resultado');


formulario.addEventListener('submit', function(event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const telefone = document.getElementById('telefone').value

    const mensagem = `Nome: ${nome}, Email: ${email}, Telefone: ${telefone}`;

    resultado.textContent = mensagem;
    formulario.reset();
});