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

// Mudar a cor da categoria ao passar o mouse
const categorias = ["categoria1_tabela", "categoria2_tabela"];
const categoriasMudar = ["categoria1-mudar", "categoria2-mudar"];

categorias.forEach((categoriaId, index) => {
    const categoriaElement = document.getElementById(categoriaId);
    const categoriaMudarElement = document.getElementById(categoriasMudar[index]);

    if (categoriaElement && categoriaMudarElement) {
        categoriaElement.addEventListener('mouseover', function() {
            categoriaMudarElement.style.backgroundColor = "rgb(220, 153, 244)";
            categoriaMudarElement.style.color = "white";
            categoriaMudarElement.style.width = "115%";
            categoriaMudarElement.style.textAlign = "center";
        });

        categoriaElement.addEventListener('mouseout', function() {
            categoriaMudarElement.style.backgroundColor = "";
            categoriaMudarElement.style.color = "";
            categoriaMudarElement.style.width = "";
            categoriaMudarElement.style.textAlign = "";
        });
    }
});

// Variáveis para o carrinho
let carrinho_produtos = [];

// Função para armazenar produtos no carrinho
function armazenar_no_carrinho(acao, produtoId) {
    const produto = document.getElementById(produtoId);
    
    if (!produto) return;

    const nomeProduto = produto.querySelector('.nome_produto').textContent;
    const precoProduto = produto.querySelector('.preco_produto').textContent;
    const descricaoProduto = produto.querySelector('.caracteristica_produto').textContent;
    const imagemSrc = produto.querySelector('img').src;
    const quantidade = parseInt(document.getElementById('quantidade').value, 10);
    const observacao = document.querySelector('.observacoes textarea').value;
    // Extrai o valor numérico do preço
    const precoNumerico = parseFloat(precoProduto.replace(/[^\d,]/g, '').replace(',', '.'));

    // Obtém os valores dos checkboxes preenchidos
    const checkboxesSelecionados = [];
    const perguntas = document.querySelectorAll('.pergunta');
    
    perguntas.forEach(pergunta => {
        const checkboxContainer = pergunta.parentElement;
        const checkboxes = checkboxContainer.querySelectorAll('input[type="checkbox"]:checked');

        if (checkboxes.length > 0) {
            const opcoesSelecionadas = [];
            checkboxes.forEach(checkbox => {
                opcoesSelecionadas.push(checkbox.nextElementSibling.textContent.trim());
            });
            checkboxesSelecionados.push({
                pergunta: pergunta.textContent.trim(),
                selecionados: opcoesSelecionadas
            });
        }
    });

    // Adiciona o produto ao carrinho com as opções dos checkboxes
    carrinho_produtos.push({
        id: produto.id,
        nome: nomeProduto,
        preco: precoNumerico,
        descricao: descricaoProduto,
        imagem: imagemSrc,
        quantidade: quantidade,
        opcoes: checkboxesSelecionados, // Armazena as perguntas e respostas selecionadas
        observacao: observacao
    });

    // Armazena o carrinho no localStorage
    localStorage.setItem('carrinho', JSON.stringify(carrinho_produtos));

    // Muda a cor do retângulo baseado na ação
    const retangulo = document.getElementById('retangulo2');
    fecharPainel();
    
}


// Função para abrir o painel do produto
function abrirPainel(produtoId) {
    const painel = document.getElementById('painel');
    if (!painel) return;

    painel.style.display = 'block'; // Mostra o painel

    // Seleciona o produto clicado pelo ID passado como argumento
    const produto = document.getElementById(produtoId);
    if (!produto) return;

    const nomeProduto = produto.querySelector('.nome_produto').textContent;
    const precoProduto = produto.querySelector('.preco_produto').textContent;
    const descricaoProduto = produto.querySelector('.caracteristica_produto').textContent;
    const imagemSrc = produto.querySelector('img').src;

    painel.innerHTML = `
        <div class="inteiro">
            <table>
                <tr>
                    <td>
                        <div class="imagem_do_lado_do_texto">
                            <img src="${imagemSrc}" alt="Imagem" class="image_produto">
                            <div class="text_imagem_produto">
                                <p class="nome">${nomeProduto}</p>
                                <p class="preco">${precoProduto}</p>
                                <p class="descricao">${descricaoProduto}</p>
                            </div>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>
                        <div id="pergunta_classe">
                            <p class="pergunta">Quer com leite/leite em pó?</p>
                            <label>
                                <input type="checkbox" name="leite" value="leite_condensado">
                                Leite condensado
                            </label>
                            <label>
                                <input type="checkbox" name="leite" value="leite_em_po">
                                Leite em pó
                            </label>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>
                        <div id="pergunta_classe_limitada">
                            <p class="pergunta">Quer com café normal/pó?</p>
                            <label>
                                <input type="checkbox" name="cafe" value="cafe_normal">
                                Café normal
                            </label>
                            <label>
                                <input type="checkbox" name="cafe" value="cafe_em_po">
                                Café em pó
                            </label>
                        </div>
                    </td>
                </tr>
                
                <tr>
                    <td>
                        <div class="observacoes">
                            <p>Observações:</p>
                            <textarea rows="4" placeholder="Digite suas observações aqui"></textarea>
                        </div>
                        
                        <div class="quantidade-container">
                            <p>Quantidade:</p>
                            <div class="quantidade-controls">
                                <button type="button" onclick="alterarQuantidade(-1)">-</button>
                                <input type="text" id="quantidade" value="1" readonly>
                                <button type="button" onclick="alterarQuantidade(1)">+</button>
                            </div>
                        </div>
                        <div class="botoes">
                        <button type="button" onclick="armazenar_no_carrinho(1, '${produtoId}') ; enviarParaWhatsApp();">Avançar</button>

                            <button type="button" onclick="armazenar_no_carrinho(2, '${produtoId}')" onclick="executarAcoes()">Continuar Comprando</button>
                        </div>
                    </td>

                    
                </tr>
            </table>
        </div>
        <div class="fechar" onclick="fecharPainel()">Fechar</div>
    `;
    limitarCheckboxes();
    
}

// Fecha o painel
function fecharPainel() {
    const painel = document.getElementById('painel');
    if (painel) {
        painel.style.display = 'none'; // Oculta o painel
    }
}

// Limita a seleção de checkboxes
function limitarCheckboxes() {
    const limiteElement = document.getElementById('pergunta_classe_limitada');
    if (!limiteElement) return;

    const maxSelection = 1;
    const checkboxes = limiteElement.querySelectorAll('input[type="checkbox"]');

    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', () => {
            const checkedCount = limiteElement.querySelectorAll('input[type="checkbox"]:checked').length;
            if (checkedCount > maxSelection) {
                checkbox.checked = false;
                alert(`Você pode selecionar no máximo ${maxSelection} opção.`);
            }
        });
    });
}

// Altera a quantidade
function alterarQuantidade(valor) {
    const quantidadeInput = document.getElementById('quantidade');
    if (!quantidadeInput) return;

    let quantidade = parseInt(quantidadeInput.value, 10);
    quantidade += valor;

    if (quantidade < 1) {
        quantidade = 1;
    }

    quantidadeInput.value = quantidade;
}

// Função para abrir o painel do carrinho
function paineCarrinho() {
    const div = document.getElementById("painel_carrinho");
    
    if (!div) return;

    div.style.width = "300px";
    div.style.height = "100%";
    div.style.backgroundColor = "#f1f1f1";
    div.style.border = "0.5px solid #888";
    div.style.position = "fixed";
    div.style.zIndex = "15";
    div.style.display = "flex";
    div.style.flexDirection = "column";
    div.style.alignItems = "center";
    div.style.justifyContent = "center";
    div.style.padding = "20px";
    div.style.boxSizing = "border-box";
    div.style.top = "0";
    div.style.right = "0";
    div.style.overflowY = "auto"; // Adiciona rolagem se necessário

    // Cria o conteúdo do painel
    div.innerHTML = `
        <button type="button" id="mandar_mensagem" onclick="enviarParaWhatsApp()" style="position: absolute; top: 40px; right: 10px;">Solicitar compra</button>
    <button onclick="fecharCarrinho()" style="position: absolute; top: 10px; right: 10px;">Fechar</button>
    <h2 class="fas fa-shopping-cart" style="status.style.textShadow = '2px 2px 4px rgba(0, 0, 0, 0.4)';">Carrinho</h2>
        <ul id="lista_carrinho" style="list-style: none; padding: 0; margin: 0; width: 100%;">
            ${carrinho_produtos.map((produto, index) => `
                <li style="display: flex; align-items: center; margin-bottom: 10px; border-bottom: 1px solid #ddd; padding-bottom: 10px;">
                    <img src="${produto.imagem}" alt="Imagem do produto" style="width: 50px; height: 50px; margin-right: 10px;">
                    <div>
                        <p>Nome: ${produto.nome}</p>
                        <p>Preço: R$ ${(produto.preco * produto.quantidade).toFixed(2)}</p>
                        <p>Quantidade: ${produto.quantidade}</p>
                        <p>Descrição: ${produto.descricao}</p>
                    </div>
                    <button onclick="removerProduto(${index})" style="margin-left: auto;">Remover</button>
                </li>
            `).join('')}
        </ul>
    `;
}

// Função para remover um produto do carrinho
function removerProduto(index) {
    carrinho_produtos.splice(index, 1); // Remove o produto pelo índice
    localStorage.setItem('carrinho', JSON.stringify(carrinho_produtos));
    paineCarrinho(); // Atualiza a exibição do carrinho
}



// Fecha o painel do carrinho
function fecharCarrinho() {
    const div = document.getElementById("painel_carrinho");
    if (div) {
        div.style.display = "none";
    }
}


// Adiciona produto ao mais pedido
// Função para adicionar produtos mais pedidos
function adicionarAoMaisPedidos(idProduto) {
    // Obtém o elemento do produto com o ID fornecido
    const produto = document.getElementById(idProduto);
    
    if (produto) {
        // Obtém os dados do produto dos atributos data
        const nome = produto.getAttribute('data-nome');
        const preco = produto.getAttribute('data-preco');
        const imagemSrc = produto.getAttribute('data-imagem');
        
        // Cria um novo elemento para o produto
        const container = document.createElement('div');
        container.className = 'image-text-container';
        
        // Cria o HTML para o novo produto com um link para o painel do produto
        container.innerHTML = `
            <a href="#${idProduto}" onclick="abrirPainel('${idProduto}')">
                <img src="${imagemSrc}" class="img_favoritos" alt="${nome}">
                <p class="image-caption">${nome}</p>
                <p class="image-caption">${preco}</p>
            </a>
        `;
        
        // Adiciona o novo produto à seção "Mais Pedidos"
        document.getElementById('mais_pedidos_img').appendChild(container);
    }
}

// Exemplo de uso
adicionarAoMaisPedidos("produto1");
adicionarAoMaisPedidos("produto2");


carrinho_produtos.push({
    id: produto.id,
    nome: nomeProduto,
    preco: precoNumerico,
    descricao: descricaoProduto,
    imagem: imagemSrc,
    quantidade: quantidade,
    opcoes: checkboxesSelecionados // Armazena as perguntas e respostas selecionadas
});



function enviarParaWhatsApp() {
    // Exibe a div com os dados
    const confirmar_pedido = document.getElementById("confirmarPedido");
    const dados = document.getElementById("dados");

    dados.style.display = "flex";

    // Obtém os valores dos campos
    const nomeCliente = document.getElementById("nomeCliente").value.trim();
    const endereco = document.getElementById("endereco").value.trim();
    const comerNoLocal = document.getElementById("comerNoLocal").checked ? 'Sim' : 'Não';
    const pix = document.getElementById("pix").value.trim();
    const dinheiro = document.getElementById("dinheiro").value.trim();
    const dinheiro_em_maos = document.getElementById("dinheiro_em_maos").value.trim();
    // Verifica se o nome e o endereço são fornecidos
    if (!nomeCliente || (document.getElementById("opcao1").checked && !endereco)) {
        alert("Antes de prosseguir com seu pedido, coloque seu nome endereço.");
        return;
    }

    // Monta os detalhes do pedido
    let orderDetails = `Nome do Cliente: ${nomeCliente}\nEndereço: ${endereco}\nComer no Local: ${comerNoLocal}\n\nDetalhes do pedido:\n\n`;

    carrinho_produtos.forEach(produto => {
        orderDetails += `Nome: ${produto.nome}\n`;
        orderDetails += `Preço: R$ ${(produto.preco * produto.quantidade).toFixed(2)}\n`;
        orderDetails += `Quantidade: ${produto.quantidade}\n`;

        if (produto.opcoes.length > 0) {
            orderDetails += `\nOpções:\n`;
            produto.opcoes.forEach(opcao => {
                orderDetails += `${opcao.pergunta}:\n`;
                orderDetails += `${opcao.selecionados.join('; ')};\n`;
            });
        }

        orderDetails += `Observação: ${produto.observacao}\n\n`;
    });

    if (carrinho_produtos.length === 0) {
        alert("O carrinho está vazio. Adicione produtos antes de enviar.");
        return;
    }

    const whatsappLink = `https://wa.me/5551985109343?text=${encodeURIComponent(orderDetails)}`;
    window.open(whatsappLink, '_blank'); // Abre o link no WhatsApp

    // Opcional: Esconde a div com os dados após o envio
    dados.style.display = "none";
    limparCarrinho()
    reiniciarPagina()
}


// Função para limpar o carrinho
function limparCarrinho() {
    // Limpa a lista de produtos no carrinho
    carrinho_produtos = [];
    
    // Atualiza o localStorage
    localStorage.setItem('carrinho', JSON.stringify(carrinho_produtos));
    
    // Atualiza a visualização do carrinho
    const listaCarrinho = document.getElementById('lista_carrinho');
    if (listaCarrinho) {
        listaCarrinho.innerHTML = ''; // Remove todos os itens da lista
    }
    
    // Fecha o painel do carrinho, se necessário
    fecharCarrinho();
    
}




function reiniciarPagina() {
    window.location.reload(true);
}


//tenh essa id
//<div id="status" ></div>


