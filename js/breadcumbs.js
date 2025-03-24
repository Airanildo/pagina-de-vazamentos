document.addEventListener('DOMContentLoaded', () => {
    // Obtém o caminho atual e remove as barras iniciais
    let currentPath = window.location.pathname.replace(/^\/+/, '');

    // Se não estiver na pasta "html", considera como index.html;
    // caso esteja, pega apenas o nome do arquivo
    if (!currentPath.includes('html/')) {
        currentPath = 'index.html';
    } else {
        currentPath = currentPath.split('/').pop();
    }
    
    // Seleciona todos os links do header
    const navLinks = document.querySelectorAll('#dynamic-header nav ul li a');
    let matched = false;

    navLinks.forEach(link => {
        // Remove "./" ou "/" do início do href para padronizar a comparação
        let href = link.getAttribute('href').replace(/^(\.\/|\/)/, '');
        if (currentPath === href) {
            link.classList.add('active-page');
            matched = true;
        }
    });

    // Se nenhum link for marcado como ativo, ativa o link para a index.html
    if (!matched) {
        const indexLink = [...navLinks].find(link =>
            link.getAttribute('href').replace(/^(\.\/|\/)/, '') === 'index.html'
        );
        if (indexLink) indexLink.classList.add('active-page');
    }
});
