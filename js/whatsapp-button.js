/**
 * Cria um botão flutuante do WhatsApp
 * @param {string} phoneNumber - O número do WhatsApp para contato (sem '+')
 * @param {string} message - Mensagem pré-preenchida opcional
 * @returns {HTMLElement} O elemento de botão criado
 */
function createWhatsAppButton(phoneNumber, message = '') {
  // Cria a URL do WhatsApp
  const whatsappUrl = `https://wa.me/${phoneNumber}${message ? `?text=${encodeURIComponent(message)}` : ''}`;

  // Cria o elemento de botão
  const button = document.createElement('a');
  button.href = whatsappUrl;
  button.target = '_blank';
  button.rel = 'noopener noreferrer';
  button.className = 'whatsapp-float';
  button.setAttribute('aria-label', 'Contato via WhatsApp');

  // Adiciona o ícone do WhatsApp
  const icon = document.createElement('i');
  icon.className = 'fab fa-whatsapp';
  button.appendChild(icon);

  // Adiciona texto para leitor de tela
  const srText = document.createElement('span');
  srText.className = 'sr-only';
  srText.textContent = 'Contato via WhatsApp';
  button.appendChild(srText);

  return button;
}

/**
 * Adiciona um botão flutuante do WhatsApp à página
 * @param {Object} options - Opções de configuração
 * @param {string} options.phoneNumber - O número do WhatsApp (sem '+')
 * @param {string} [options.message] - Mensagem pré-preenchida opcional
 * @param {string} [options.position] - Posição do botão ('bottom-right', 'bottom-left', 'top-right', 'top-left')
 * @param {boolean} [options.pulse] - Define se deve adicionar uma animação pulsante
 */
function addWhatsAppButton(options = {}) {
  const {
    phoneNumber = '61993342979',
    message = '',
    position = 'bottom-right',
    pulse = false
  } = options;

  // Cria o botão
  const button = createWhatsAppButton(phoneNumber, message);

  // Define a posição baseada na opção de posição
  if (position === 'bottom-left') {
    button.style.right = 'auto';
    button.style.left = '1.5rem';
  } else if (position === 'top-right') {
    button.style.bottom = 'auto';
    button.style.top = '1.5rem';
  } else if (position === 'top-left') {
    button.style.bottom = 'auto';
    button.style.right = 'auto';
    button.style.top = '1.5rem';
    button.style.left = '1.5rem';
  }

  // Adiciona animação pulsante se solicitado
  if (pulse) {
    button.classList.add('animate-pulse');
  }

  // Adiciona à página
  document.body.appendChild(button);

  return button;
}

// Adiciona o botão do WhatsApp quando a página carrega
document.addEventListener('DOMContentLoaded', function() {
  // Verifica se já existe um botão do WhatsApp com a classe 'whatsapp-float'
  if (!document.querySelector('.whatsapp-float')) {
    addWhatsAppButton({
      phoneNumber: '61993342979',
      message: 'Olá! Gostaria de obter mais informações sobre os serviços da ZZ Caça Vazamentos.',
      pulse: true
    });
  }
});
