function loadHeader() {
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
    
    // Adiciona o header no início do body
    document.body.insertAdjacentHTML('afterbegin', headerHTML);

    // Adiciona o listener de scroll para alterar o tamanho do header e trocar a logo
    window.addEventListener('scroll', () => {
        const header = document.querySelector('.header');
        const logo = header.querySelector('.logo');
        if (window.scrollY > 290) {
            header.classList.add('shrink');
            document.body.classList.add('solid-bg');
            if (logo) logo.src = '/assets/logo-pequena-sem-fundo.png';
        } else {
            header.classList.remove('shrink');
            document.body.classList.remove('solid-bg');
            if (logo) logo.src = '/assets/logo-sem-fundo.png';
        }
    });
}

// Chama a função assim que o DOM estiver pronto
document.addEventListener('DOMContentLoaded', loadHeader);
