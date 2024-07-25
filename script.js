// Atualiza a exibição dos itens com base no texto inserido na barra de pesquisa
document.getElementById('pesquisa').addEventListener('keyup', function() {
    const termoPesquisa = this.value.toLowerCase();
    const itens = document.querySelectorAll('.grid-item');

    itens.forEach(function(item) {
        const nomeProduto = item.querySelector('.nome_produto').textContent.toLowerCase();
        if (nomeProduto.includes(termoPesquisa)) {
            item.style.display = '';
        } else {
            item.style.display = 'none';
        }
    });
});

// Adiciona a classe 'active' à categoria correspondente quando o grid é rolado ou clicado
document.addEventListener('DOMContentLoaded', () => {
    const categorias = document.querySelectorAll('.categoria-item');
    const grids = document.querySelectorAll('.grid-container');

    // Remove a classe 'active' de todas as categorias
    const resetActiveClass = () => {
        categorias.forEach(categoria => categoria.classList.remove('active'));
    };

    // Atualiza a categoria ativa com base no scroll ou clique no grid
    grids.forEach((grid, index) => {
        const categoria = categorias[index];

        grid.addEventListener('scroll', () => {
            resetActiveClass();
            categoria.classList.add('active');
        });

        grid.addEventListener('click', () => {
            resetActiveClass();
            categoria.classList.add('active');
        });
    });
});

// Permite a navegação suave para a categoria correspondente ao clicar nas categorias
document.addEventListener('DOMContentLoaded', () => {
    const categorias = document.querySelectorAll('.categoria-item');
    const grids = document.querySelectorAll('.grid-container');

    // Remove a classe 'active' de todas as categorias
    const resetActiveClass = () => {
        categorias.forEach(categoria => categoria.classList.remove('active'));
    };

    // Rola a página suavemente para a grid correspondente
    const scrollToCategory = (index) => {
        if (grids[index]) {
            grids[index].scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    // Atualiza a categoria ativa e rola para a grid correspondente ao clicar nas categorias
    categorias.forEach((categoria, index) => {
        categoria.addEventListener('click', () => {
            resetActiveClass();
            categoria.classList.add('active');
            scrollToCategory(index);
        });
    });

    // Atualiza a categoria ativa com base no scroll ou clique no grid
    grids.forEach((grid, index) => {
        grid.addEventListener('scroll', () => {
            resetActiveClass();
            categorias[index].classList.add('active');
        });

        grid.addEventListener('click', () => {
            resetActiveClass();
            categorias[index].classList.add('active');
        });
    });
});

// Controla a quantidade de um item, permitindo incrementar ou decrementar o valor
document.addEventListener('DOMContentLoaded', function() {
    const decreaseButton = document.getElementById('decrease');
    const increaseButton = document.getElementById('increase');
    const quantityInput = document.getElementById('quantidade');

    decreaseButton.addEventListener('click', function() {
        let currentValue = parseInt(quantityInput.value, 10);
        if (currentValue > 1) {
            quantityInput.value = currentValue - 1;
        }
    });

    increaseButton.addEventListener('click', function() {
        let currentValue = parseInt(quantityInput.value, 10);
        quantityInput.value = currentValue + 1;
    });
});

// Limita a seleção de checkboxes a um máximo permitido
document.addEventListener('DOMContentLoaded', function() {
    const checkboxes = document.querySelectorAll('.pergunta_classe_limitada input[type="checkbox"]');
    const maxAllowed = 1; // Limite de seleção

    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            const checkedCount = document.querySelectorAll('.pergunta_classe_limitada input[type="checkbox"]:checked').length;

            if (checkedCount > maxAllowed) {
                this.checked = false;
                alert(`Você pode selecionar no máximo ${maxAllowed} opção${maxAllowed > 1 ? 'ões' : ''}.`);
            }
        });
    });
});



//testeeeee
document.addEventListener('DOMContentLoaded', () => {
    // Adiciona um ouvinte de clique a cada item da grid
    const gridItems = document.querySelectorAll('.grid-item');

    gridItems.forEach(item => {
        item.addEventListener('click', function() {
            const name = this.getAttribute('data-name');
            const description = this.getAttribute('data-description');
            const price = this.getAttribute('data-price');
            const image = this.getAttribute('data-image');
            
            showPanel(name, description, price, image);
        });
    });
});

// Função para mostrar o painel
function showPanel(name, description, price, image) {
    document.getElementById('detail-name').innerText = name;
    document.getElementById('detail-description').innerText = description;
    document.getElementById('detail-price').innerText = price;
    document.getElementById('detail-image').src = image;

    document.getElementById('detail-panel').style.display = 'flex';
}

// Função para fechar o painel
function closePanel() {
    document.getElementById('detail-panel').style.display = 'none';
}

// Função para continuar comprando
function continuarComprando() {
    closePanel();
    // Adicione aqui o código para redirecionar ou mostrar mais produtos
}

// Função para avançar
function avancar() {
    closePanel();
    // Adicione aqui o código para avançar para a próxima página ou etapa
}




