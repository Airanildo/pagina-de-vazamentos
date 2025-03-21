/**
 * Cria a estrutura de HTML para o cabeçalho
 * @param {Object} options - Opções de configuração para o cabeçalho
 * @param {boolean} options.showLogo - Define se o logo deve ser exibido
 * @param {boolean} options.showNav - Define se o menu de navegação deve ser exibido
 * @param {boolean} options.showContact - Define se as informações de contato devem ser exibidas
 * @param {Array} options.navItems - Itens do menu de navegação [{ label, url, active }]
 * @returns {string} String HTML que representa o cabeçalho
 */
function createHeader(options = {}) {
  const {
    showLogo = true,
    showNav = true,
    showContact = true,
    navItems = [
      { label: 'Início', url: 'index.html', active: true },
      { label: 'Sobre', url: 'sobre.html' },
      { label: 'Serviços', url: 'servicos.html' },
      { label: 'Galeria', url: 'galeria.html' },
      { label: 'Contato', url: 'contato.html' },
    ]
  } = options;

  // Obtém o caminho da página atual para definir o estado ativo
  const currentPath = window.location.pathname;
  const currentPage = currentPath.split('/').pop() || 'index.html';

  // Atualiza o estado ativo com base na página atual
  const menuItems = navItems.map(item => {
    return {
      ...item,
      active: item.url === currentPage
    };
  });

  return `
  <header class="header">
    <div class="container header-container">
      ${showLogo ? `
      <a href="index.html" class="logo small-logo">
        <img src="./assets/images/logo-pequena-sem-fundo.png" alt="Logo" />
      </a>
      ` : ''}

      ${showNav ? `
      <nav class="nav">
        <ul class="nav-list">
          ${menuItems.map(item => `
            <li>
              <a href="${item.url}" class="nav-item ${item.active ? 'active' : ''}">
                ${item.label}
              </a>
            </li>
          `).join('')}
        </ul>
      </nav>
      ` : ''}

      ${showContact ? `
      <div class="contact-icons">
        <a href="https://wa.me/61993342979" target="_blank" rel="noopener noreferrer" class="contact-icon whatsapp" aria-label="WhatsApp">
          <i class="fa-brands fa-whatsapp"></i>
        </a>
        <a href="tel:+6135812873" class="contact-icon phone" aria-label="Telefone">
          <i class="fas fa-phone"></i>
        </a>
        <a href="https://www.instagram.com/zz_cacavazamento/" target="_blank" rel="noopener noreferrer" class="contact-icon instagram" aria-label="Instagram">
          <i class="fa-brands fa-instagram"></i>
        </a>
      </div>
      ` : ''}

      <button class="mobile-menu-toggle" aria-label="Menu" aria-expanded="false">
        <i class="fas fa-bars"></i>
      </button>
    </div>

    <div class="mobile-menu">
      <nav>
        <ul class="mobile-nav-list">
          ${menuItems.map(item => `
            <li>
              <a href="${item.url}" class="nav-item ${item.active ? 'active' : ''}">
                ${item.label}
              </a>
            </li>
          `).join('')}
        </ul>
      </nav>

      <div class="mobile-contact">
        <a href="https://wa.me/61993342979" target="_blank" rel="noopener noreferrer" class="mobile-contact-item whatsapp">
          <i class="fa-brands fa-whatsapp"></i>
          <span>(61) 99334-2979</span>
        </a>

        <a href="tel:+6135812873" class="mobile-contact-item phone">
          <i class="fas fa-phone"></i>
          <span>(61) 3581-2873</span>
        </a>
      </div>
    </div>
  </header>
  `;
}

/**
 * Renderiza o cabeçalho em um contêiner especificado
 * @param {HTMLElement|string} container - Elemento ou seletor para renderizar o cabeçalho
 * @param {Object} options - Opções de configuração para o cabeçalho
 */
function renderHeader(container, options = {}) {
  const targetContainer = typeof container === 'string'
    ? document.querySelector(container)
    : container;

  if (!targetContainer) {
    console.error('Contêiner para o cabeçalho não encontrado');
    return;
  }

  targetContainer.innerHTML = createHeader(options);

  // Inicializa a funcionalidade do menu mobile
  initializeMobileMenu();
}

/**
 * Inicializa a funcionalidade de alternância do menu mobile
 */
function initializeMobileMenu() {
  const toggleButton = document.querySelector('.mobile-menu-toggle');
  const mobileMenu = document.querySelector('.mobile-menu');

  if (!toggleButton || !mobileMenu) return;

  toggleButton.addEventListener('click', function() {
    const expanded = this.getAttribute('aria-expanded') === 'true';
    this.setAttribute('aria-expanded', !expanded);
    mobileMenu.classList.toggle('open');

    // Altera o ícone
    const icon = this.querySelector('i');
    if (icon) {
      if (expanded) {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
      } else {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
      }
    }
  });
}

// Insere automaticamente o cabeçalho quando a página carrega
document.addEventListener('DOMContentLoaded', function() {
  const headerContainer = document.querySelector('#header-container');

  if (headerContainer) {
    renderHeader(headerContainer);
  }
});
