async function carregarDados() {

    const url = "http://localhost:3000/";

    const resposta = await fetch(url);

    const produtos = await resposta.json();

    const listaProdutos = document.getElementById("lista-produtos");

    listaProdutos.innerHTML = "";

    produtos.forEach(produto => {
        listaProdutos.innerHTML += `
            <div class="card">
                <h2>${produto.nome}</h2>
                <p class="categoria">Categoria: ${produto.categoria}</p>
                <p class="preco">R$ ${produto.preco}</p>
            </div>
        `;
    });
}

carregarDados();