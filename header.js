document.addEventListener('DOMContentLoaded', () => {
    const headerContainer = document.getElementById('header-container');
    headerContainer.innerHTML = `
        <header id="main-header">
            <div class="header-content">
                <div class="dropdown">
                    <button class="dropdown-btn">≡ Menu</button>
                    <div class="dropdown-content">
                        <a href="/">Página Inicial</a>
                        <a href="/pagina-a.html">Página A</a>
                        <a href="/pagina-b.html">Página B</a>
                        <a href="/pagina-c.html">Página C</a>
                    </div>
                </div>
                <div class="logo">
                    <img src="./assets/logo-sem-fundo.png" alt="Logo Completa" class="logo-full">
                    <img src="./assets/logo-pequena-sem-fundo.png" alt="Logo Reduzida" class="logo-small">
                </div>
                <div class="header-text">
                    <p>CAÇA VAZAMENTO E DESENTUPIDORA</p>
                </div>
                <nav class="breadcrumbs">
                    <a href="/">Início</a> <span>/</span> <span id="current-page-breadcrumb">Página Atual</span>
                </nav>
            </div>
        </header>
    `;

    const header = document.getElementById('main-header');
    const body = document.body;
    const headerPlaceholder = document.getElementById('header-placeholder');
    const currentPageBreadcrumb = document.getElementById('current-page-breadcrumb');

    // Define as alturas do header
    const headerNormalHeight = 400;
    const headerShrunkHeight = 100;

    // Garante que o placeholder inicie com a altura correta
    headerPlaceholder.style.height = `${headerNormalHeight}px`;

    // Remove initial-page-load class after a short delay to enable transitions
    setTimeout(() => {
        body.classList.remove('initial-page-load');
    }, 100);

    window.addEventListener('scroll', () => {
        if (window.scrollY > 380) {
            header.classList.add('shrunk');
            body.classList.add('shrunk-header');
            headerPlaceholder.style.height = `${headerShrunkHeight}px`;
        } else {
            header.classList.remove('shrunk');
            body.classList.remove('shrunk-header');
            headerPlaceholder.style.height = `${headerNormalHeight}px`;
        }
    });

    // Function to update breadcrumb
    function updateBreadcrumb() {
        let path = window.location.pathname;
        let pageName = "Página Atual";

        if (path === '/' || path === '/index.html') {
            pageName = 'Página Inicial';
        } else if (path.startsWith('/pagina-')) {
            const pageId = path.split('-')[1].split('.')[0].toUpperCase();
            pageName = `Página ${pageId}`;
        } else {
            const pathParts = path.split('/').filter(part => part && part !== 'index.html');
            if (pathParts.length > 0) {
                pageName = pathParts.map(part => {
                    let name = part.replace(/-/g, ' ').replace(/\.html$/i, '');
                    return name.charAt(0).toUpperCase() + name.slice(1);
                }).join(' / ');
            }
        }
        currentPageBreadcrumb.textContent = pageName;
    }

    updateBreadcrumb();
});