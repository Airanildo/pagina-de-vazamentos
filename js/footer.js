/**
 * Cria a estrutura HTML do rodapé
 * @param {Object} options - Opções de configuração para o rodapé
 * @returns {string} String HTML que representa o rodapé
 */
function createFooter(options = {}) {
  const { 
    showLogo = true, 
    showLinks = [
      { label: 'Início', url: 'index.html' },
      { label: 'Sobre', url: 'sobre.html' },
      { label: 'Serviços', url: 'servicos.html' },
      { label: 'Galeria', url: 'galeria.html' },
      { label: 'Contato', url: 'contato.html' }
    ],
    showContact = true, 
    currentYear = new Date().getFullYear(), 
    menuItems = [] 
  } = options;

  // Combina os links padrão com links personalizados, se necessário
  const finalLinks = menuItems.length ? menuItems : showLinks;

  // Cria os segmentos da listra de alerta
  const cautionStripeSegments = Array(20).fill(0)
    .map((_) => `<div class="caution-segment"></div>`)
    .join('');

  return `
  <footer class="footer">
    <div class="caution-stripe">
      ${cautionStripeSegments}
    </div>
    <div class="footer-content">
      <div class="container">
        <div class="footer-grid">
          ${showLogo ? `
          <div class="footer-column footer-columm-logo">
            <div class="footer-logo">
              <img src="./assets/images/logo-pequena-sem-fundo.png" alt="ZZ Caça Vazamentos" />
            </div>
            <p class="footer-description">
              Especialistas em detecção de vazamentos e serviços de desentupimento em Brasília e região.
            </p>
            <div class="footer-social">
              <a href="https://wa.me/61993342979" target="_blank" rel="noopener noreferrer" class="footer-social-icon" aria-label="WhatsApp">
                <i class="fa-brands fa-whatsapp"></i>
              </a>
              <a href="https://www.instagram.com/zz_cacavazamento/" target="_blank" rel="noopener noreferrer" class="footer-social-icon" aria-label="Instagram">
                <i class="fa-brands fa-instagram"></i>
              </a>
            </div>
          </div>
          ` : ''}

          ${finalLinks.length ? `
          <div class="footer-column">
            <h3 class="footer-heading">Links Rápidos</h3>
            <nav class="footer-nav">
              <ul>
                ${finalLinks.map(item => `
                  <li>
                    <a href="${item.url}" class="footer-nav-item ${item.active ? 'active' : ''}">
                      ${item.label}
                    </a>
                  </li>
                `).join('')}
              </ul>
            </nav>
          </div>
          ` : ''}

          ${showContact ? `
          <div class="footer-column">
            <h3 class="footer-heading">Contato</h3>
            <div class="footer-contact-list">
              <div class="footer-contact-item">
                <span class="footer-contact-icon">
                  <i class="fas fa-map-marker-alt"></i>
                </span>
                <span>St. N QNN 5 - Ceilândia, Brasília - DF, 72225-053</span>
              </div>
              <div class="footer-contact-item">
                <span class="footer-contact-icon">
                  <i class="fas fa-phone"></i>
                </span>
                <a href="tel:+6135812873">(61) 3581-2873</a>
              </div>
              <div class="footer-contact-item">
                <span class="footer-contact-icon">
                  <i class="fa-brands fa-whatsapp"></i>
                </span>
                <a href="https://wa.me/61993342979">(61) 99334-2979</a>
              </div>
              <div class="footer-contact-item">
                <span class="footer-contact-icon">
                  <i class="fas fa-envelope"></i>
                </span>
                <a href="mailto:zzcacavazamento@gmail.com">zzcacavazamento@gmail.com</a>
              </div>
            </div>
          </div>
          ` : ''}
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <div class="container">
        <div class="footer-bottom-content">
          <p class="footer-copyright">
            &copy; ${currentYear} ZZ Caça Vazamentos. Todos os direitos reservados.
          </p>
          <p class="footer-credits">
            Desenvolvido com ❤️ para ZZ
          </p>
        </div>
      </div>
    </div>
  </footer>
  `;
}

/**
 * Renderiza o rodapé em um contêiner especificado
 * @param {HTMLElement|string} container - Elemento contêiner ou seletor para renderizar o rodapé
 * @param {Object} options - Opções de configuração para o rodapé
 */
function renderFooter(container, options = {}) {
  const targetContainer = typeof container === 'string'
    ? document.querySelector(container)
    : container;

  if (!targetContainer) {
    console.error('Contêiner para o rodapé não encontrado');
    return;
  }

  targetContainer.innerHTML = createFooter(options);
}

// Insere o rodapé automaticamente quando a página carrega
document.addEventListener('DOMContentLoaded', function() {
  const footerContainer = document.querySelector('#footer-container');

  if (footerContainer) {
    renderFooter(footerContainer);
  }
});
