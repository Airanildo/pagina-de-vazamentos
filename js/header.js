function loadHeader() {
    addHeaderHTML();
    addScrollListener();
}

function addHeaderHTML() {
    const headerHTML = `
  <header class="header expanded">
    <!-- Conteúdo do header -->
    <input type="checkbox" id="checkbox">
    <label for="checkbox" class="toggle">
        <div class="bar bar--top"></div>
        <div class="bar bar--middle"></div>
        <div class="bar bar--bottom"></div>
    </label>
    <div id="dropdown">
        <ul>
            <li><a href="./html/sobre.html">Sobre</a></li>
            <li><a href="./html/servicos.html">Serviços</a></li>
            <li><a href="./html/contato.html">Contatos</a></li>
            <li><a href="./html/video-inspecao.html">Videos de Serviços</a></li>
        </ul>
    </div>
    <a href="./index.html">
        <img src="/assets/logo-sem-fundo.png" alt="Logo ZZ Caça Vazamentos" class="logo" data-animate="fadeInUp">
    </a>
    <section class="hero parallax-img" style="background-image: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('assets/reparo-relogio.jpg')" data-parallax="0.4">
        <div class="hero-content" data-animate="fadeInUp">
            <h2>Soluções Rápidas e Eficientes para Sua Emergência!</h2>
            <p>Atendimento 24 horas - Garantia de Serviço</p>
        </div>
    </section>
  </header>
    `;
    document.body.insertAdjacentHTML('afterbegin', headerHTML);
}

function addScrollListener() {
    let ticking = false;
    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                const header = document.querySelector('.header');
                const logo = header.querySelector('.logo');
                const isScrolled = window.scrollY > 290;
                updateHeaderAndLogo(
                    header,
                    logo,
                    isScrolled ? '/assets/logo-pequena-sem-fundo.png' : '/assets/logo-sem-fundo.png',
                    isScrolled
                );
                ticking = false;
            });
            ticking = true;
        }
    });
}

function updateHeaderAndLogo(header, logo, logoSrc, isScrolled) {
    if (isScrolled) {
      header.classList.remove('expanded');
      header.classList.add('shrink');
    } else {
      header.classList.remove('shrink');
      header.classList.add('expanded');
    }
    if (logo) logo.src = logoSrc;
}


document.addEventListener('DOMContentLoaded', loadHeader);
