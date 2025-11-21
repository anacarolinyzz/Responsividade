const assuntos = [
    {
        titulo : "Programação", 
        descricao : "Desde de criança, gosto de criar. Esse ano, mergulhei de cabeça no mundo da programação e robótica", 
        imagem : "IMAGENS/programando.jpg", 
        descricao_img : "Criando um projeto escolar com arduíno."
    },
];

function criar_assunto () {
    const assunt = document.getElementById('assunto');
    let htmlass = '';

    assuntos.forEach (item => {
        htmlass += `
                <hr>
                 <div class="titulo_ass">
                    <h1>${item.titulo}</h1>
                </div>
                    <div class="box">
                        <p>${item.descricao}</p>
                        <div class="foto">
                           <img src="${item.imagem}" alt="">
                           <p>${item.descricao_img}</p> 
                        </div>
                    </div>
        `;
    });
        assunt.insertAdjacentHTML('beforeend', htmlass);
    
}

criar_assunto();