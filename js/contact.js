document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');

    if (form) {
    form.addEventListener('submit', function(event) {
        event.preventDefault();

        // Validações básicas
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;

        if (!name || !email || !phone || !subject || !message) {
        alert('Por favor, preencha todos os campos do formulário.');
        return;
        }

        // Verificação básica para um email válido
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
        alert('Por favor, insira um endereço de e-mail válido.');
        return;
        }

        // Adicione a lógica para o envio automático da mensagem aqui
        // Pode usar API de whatsapp, API de email, etc.
        alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
        form.reset();
    });
    }
});
