async function carregarDados() {

    const url = "https://orange-space-rotary-phone-v6xpr747944jfwq7r-3000.app.github.dev/";

    const resposta = await fetch(url);

    const produto = await resposta.json();

    const listaProdutos = document.getElementById("lista-produtos");

    listaProdutos.innerHTML = `
        <div class="card">
            <h2>${produto.nome}</h2>
            <p class="categoria">Categoria: ${produto.categoria}</p>
            <p class="preco">R$ ${produto.preco}</p>
        </div>
    `;
}

carregarDados();