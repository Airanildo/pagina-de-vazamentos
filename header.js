function loadHeader() {
    addHeaderHTML();
    addScrollListener();
}

function addHeaderHTML() {
    const headerHTML = `
<header class="header">
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
    window.addEventListener('scroll', () => {
        const header = document.querySelector('.header');
        const logo = header.querySelector('.logo');
        // Use guard clauses to update based on scrollY value
        if (window.scrollY > 290) {
            updateHeaderAndLogo(header, logo, '/assets/logo-pequena-sem-fundo.png', true);
        } else {
            updateHeaderAndLogo(header, logo, '/assets/logo-sem-fundo.png', false);
        }
    });
}

function updateHeaderAndLogo(header, logo, logoSrc, isScrolled) {
    header.classList.toggle('shrink', isScrolled);
    document.body.classList.toggle('solid-bg', isScrolled);
    if (logo) logo.src = logoSrc;
}

document.addEventListener('DOMContentLoaded', loadHeader);
