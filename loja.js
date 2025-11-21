const produtos = [
    {
        imagem : "https://rocco.com.br/wp-content/uploads/2023/10/9786555321807.png",
        nome :"Box Harry Potter Premium Vermelho (7 Livros em capa dura)",
        preco_normal : "R$ 278,99",
        preco_promo : "R$ 157,99",
    },
    {
        imagem : "https://m.media-amazon.com/images/I/61H9RLgx1iL._AC_UF894,1000_QL80_.jpg",
        nome :"Caneca item de colecionador super rara do Harry Potter",
        preco_normal : "R$ 59,90",
        preco_promo : "R$ 39,90",
    },
    {
        imagem : "https://m.media-amazon.com/images/I/61q5FhBairL.jpg",
        nome :"Boneco Movies Harry Potter, Funko Pop",
        preco_normal : "R$ 179,90",
        preco_promo : "R$ 139,90",
    },
    {
        imagem : "https://www.tupperware.com.br/cdn/shop/files/tw-864947_01_8a1ab97b-2247-41ce-88d0-13b70a596872.jpg?v=1757012558",
        nome :"Garrafa de Água Tupperware Eco Tupper Redonda Plus Harry Potter Hogwarts 750ml Preto",
        preco_normal : "R$ 69,90",
        preco_promo : "R$ 59,90",
    },
    {
        imagem : "https://imgs.casasbahia.com.br/15057676/1xg.jpg?imwidth=500",
        nome :"Harry Potter e a Pedra Filosofal",
        preco_normal : "R$ 69,90",
        preco_promo : "R$ 39,90",
    },
    {
        imagem : "https://rocco.com.br/wp-content/uploads/2023/04/9786555321791.jpg",
        nome :"Box Harry Potter Premium Vermelho (7 Livros em capa dura)",
        preco_normal : "R$ 220,90",
        preco_promo : "R$ 189,90",
    },
    {
        imagem : "",
        nome :"",
        preco_normal : "",
        preco_promo : "",
    },
    {
        imagem : "",
        nome :"",
        preco_normal : "",
        preco_promo : "",
    },
    {
        imagem : "",
        nome :"",
        preco_normal : "",
        preco_promo : "",
    },
    {
        imagem : "",
        nome :"",
        preco_normal : "",
        preco_promo : "",
    },
    {
        imagem : "",
        nome :"",
        preco_normal : "",
        preco_promo : "",
    },
    {
        imagem : "",
        nome :"",
        preco_normal : "",
        preco_promo : "",
    },
    {
        imagem : "",
        nome :"",
        preco_normal : "",
        preco_promo : "",
    },
    {
        imagem : "",
        nome :"",
        preco_normal : "",
        preco_promo : "",
    },
    {
        imagem : "",
        nome :"",
        preco_normal : "",
        preco_promo : "",
    },
    {
        imagem : "",
        nome :"",
        preco_normal : "",
        preco_promo : "",
    },
    {
        imagem : "",
        nome :"",
        preco_normal : "",
        preco_promo : "",
    },
    {
        imagem : "",
        nome :"",
        preco_normal : "",
        preco_promo : "",
    },
];

function criar_produto() {
    const prod = document.getElementById('main');
    let htmlprod = '';

    produtos.forEach  (item => { 
        htmlprod += `
        <div id="box">
            <div class="produto">
                <img src="${item.imagem}" alt="">
            </div>
            <div class="descricao">
                <p class="nome">${item.nome}</p>         
            </div>
            <div class="comprar">
                <p class="riscar">${item.preco_normal}</p>
                <div class="preco"><p>${item.preco_promo}</p></div>
            </div>
        </div>
            `;
        });
        prod.insertAdjacentHTML('beforeend', htmlprod);
}
criar_produto();