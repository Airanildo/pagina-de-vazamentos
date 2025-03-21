document.addEventListener('DOMContentLoaded', function() {
    // Dados da galeria: defina os itens com título, categoria, descrição e URL da imagem
    const galleryData = [
    {
        category: 'vazamentos',
        title: 'Detecção de Vazamento em Parede',
        description: 'Localização precisa de vazamento oculto em parede com geofone e câmera termográfica.',
        imageUrl: './assets/images/buraco-chao.jpg'
    },
    {
        category: 'vazamentos',
        title: 'Vazamento em Tubulação Subterrânea',
        description: 'Detecção e reparo de vazamento em tubulação subterrânea de residência.',
        imageUrl: './assets/images/chefe-close-2.jpg'
    },
    {
        category: 'desentupimento',
        title: 'Desentupimento de Pia de Cozinha',
        description: 'Desobstrução completa de pia de cozinha entupida por gordura acumulada.',
        imageUrl: 'https://desentupidoraemsaopaulo.srv.br/wp-content/uploads/2021/07/Vazamento-de-agua-no-teto-do-banheiro.png'
    },
    {
        category: 'desentupimento',
        title: 'Limpeza de Caixa de Gordura',
        description: 'Serviço de limpeza e manutenção preventiva em caixa de gordura.',
        imageUrl: 'https://via.placeholder.com/800x600?text=Desentupimento+2'
    },
    {
        category: 'hidraulica',
        title: 'Substituição de Válvula de Descarga',
        description: 'Troca completa de válvula de descarga com vazamento.',
        imageUrl: 'https://via.placeholder.com/800x600?text=Hidraulica+1'
    },
    {
        category: 'hidraulica',
        title: 'Instalação de Torneira',
        description: 'Instalação de torneira nova em pia de banheiro.',
        imageUrl: 'https://via.placeholder.com/800x600?text=Hidraulica+2'
    },
    {
        category: 'antes-depois',
        title: 'Antes e Depois: Remoção de Infiltração',
        description: 'Tratamento completo de infiltração em parede com eliminação da umidade.',
        imageUrl: 'https://via.placeholder.com/800x600?text=Antes+e+Depois+1'
    },
    {
        category: 'antes-depois',
        title: 'Antes e Depois: Reparo de Tubulação',
        description: 'Substituição de tubulação danificada e restauração da área afetada.',
        imageUrl: 'https://via.placeholder.com/800x600?text=Antes+e+Depois+2'
    }
    ];

    // Seleciona o container onde os itens serão inseridos
    const galleryGrid = document.querySelector('.gallery-grid');

    // Cria dinamicamente os elementos de cada item da galeria
    galleryData.forEach((data) => {
    // Cria o elemento pai do item e define a categoria como atributo
    const itemDiv = document.createElement('div');
    itemDiv.classList.add('gallery-item');
    itemDiv.setAttribute('data-category', data.category);

    // Cria o elemento que exibirá a imagem (utilizando background-image)
    const imageDiv = document.createElement('div');
    imageDiv.classList.add('gallery-item-image');
    imageDiv.style.backgroundImage = `url('${data.imageUrl}')`;

    // Cria o overlay que conterá título e descrição
    const overlayDiv = document.createElement('div');
    overlayDiv.classList.add('gallery-item-overlay');

    // Cria e insere o título
    const titleEl = document.createElement('h3');
    titleEl.classList.add('gallery-item-title');
    titleEl.textContent = data.title;

    // Cria e insere a descrição
    const descEl = document.createElement('p');
    descEl.classList.add('gallery-item-description');
    descEl.textContent = data.description;

    // Agrupa os elementos do overlay
    overlayDiv.appendChild(titleEl);
    overlayDiv.appendChild(descEl);

    // Insere a imagem e o overlay no item
    itemDiv.appendChild(imageDiv);
    itemDiv.appendChild(overlayDiv);

    // Adiciona o item à grid
    galleryGrid.appendChild(itemDiv);
    });

    // -----------------------------
    // Filtro da Galeria
    // -----------------------------
    const filterTabs = document.querySelectorAll('.gallery-tab');
    const galleryItems = document.querySelectorAll('.gallery-item');

    filterTabs.forEach(tab => {
    tab.addEventListener('click', function() {
        // Remove a classe ativa de todas as abas
        filterTabs.forEach(t => t.classList.remove('active'));
        // Adiciona a classe ativa à aba clicada
        this.classList.add('active');
        // Obtém o valor do filtro
        const filterValue = this.getAttribute('data-filter');
        // Exibe ou oculta itens com base na categoria
        galleryItems.forEach(item => {
        if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
        });
    });
    });

    // -----------------------------
    // Modal da Galeria
    // -----------------------------
    const modal = document.querySelector('.gallery-modal');
    const modalImage = document.querySelector('.gallery-modal-image');
    const modalTitle = document.querySelector('.gallery-modal-title');
    const modalDescription = document.querySelector('.gallery-modal-description');
    const modalClose = document.querySelector('.gallery-modal-close');
    const modalPrev = document.querySelector('.gallery-modal-prev');
    const modalNext = document.querySelector('.gallery-modal-next');
    let currentIndex = 0;

    // Abre o modal ao clicar em um item da galeria
    galleryItems.forEach((item, index) => {
    item.addEventListener('click', function() {
        currentIndex = index;
        const title = this.querySelector('.gallery-item-title').textContent;
        const description = this.querySelector('.gallery-item-description').textContent;

        modalImage.src = galleryData[index].imageUrl;
        modalTitle.textContent = title;
        modalDescription.textContent = description;
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    });
    });

    // Fecha o modal
    modalClose.addEventListener('click', function() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
    });

    // Fecha o modal ao clicar fora do conteúdo
    modal.addEventListener('click', function(e) {
    if (e.target === modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }
    });

    // Navega para a imagem anterior
    modalPrev.addEventListener('click', function(e) {
    e.stopPropagation();
    currentIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length;
    updateModalContent();
    });

    // Navega para a próxima imagem
    modalNext.addEventListener('click', function(e) {
    e.stopPropagation();
    currentIndex = (currentIndex + 1) % galleryItems.length;
    updateModalContent();
    });

    // Atualiza o conteúdo do modal com base no índice atual
    function updateModalContent() {
    const item = galleryItems[currentIndex];
    const title = item.querySelector('.gallery-item-title').textContent;
    const description = item.querySelector('.gallery-item-description').textContent;

    modalImage.src = galleryData[currentIndex].imageUrl;
    modalTitle.textContent = title;
    modalDescription.textContent = description;
    }
});
