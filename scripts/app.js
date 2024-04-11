let cabeçalho = document.querySelector("#acessórios")

let graciosas = [ 
    {
        Tiara: "Milena",
        Descrição : "A tiara Milena é uma peça de requinte e beleza, caracterizada por seu design delicado e bordados minuciosos. Com uma estrutura flexível, esta tiara se destaca pelos cristais de vidro estrategicamente posicionados, que capturam e refletem a luz de maneira deslumbrante. Cada detalhe artístico contribui para uma peça única, ideal para adicionar um toque de elegância e sofisticação a eventos especiais. A tiara Milena é mais do que uma joia; é uma expressão de estilo refinado e atemporal.",
        Valor: `R$120`,
        Imagem : "../imagens/Tiara 1.jpg"}, 
       
    {
        Tiara: "Marjorie",
        Descrição : " A tiara Marjorie é uma joia exuberante que une a beleza clássica das pérolas ao brilho delicado dos cristais. Cada detalhe meticulosamente bordado reflete elegância e sofisticação, tornando-a a escolha perfeita para eventos especiais. Esta peça única combina o encanto atemporal das pérolas com o glamour moderno dos cristais, adicionando um toque majestoso e refinado a qualquer ocasião. A tiara Marjorie é mais do que um acessório; é uma expressão de luxo e requinte, elevando a feminilidade com graciosidade e estilo.",
        Valor: `R$90`,
        Imagem : "../imagens/Tiara2.jpg" },

    { Tiara: "Mavie",

        Descrição : "A tiara Mavie é uma joia refinada, adornada com pérolas brancas que capturam a essência da elegância atemporal. Cada pérola é habilmente bordada para criar uma peça que emana serenidade e beleza clássica. Esta tiara é mais do que um acessório; é uma expressão discreta de luxo, perfeita para realçar a graça em momentos especiais. Com sua simplicidade sofisticada, a Mavie adiciona um toque de feminilidade refinada a qualquer ocasião",
        Valor: `R$150`,
        Imagem: "../imagens/tiara 3.jpg"},
    {
                Laços: "Sophia",
                Descrição: "O laço infantil Sophia é uma adorável expressão de delicadeza e charme para as pequenas fashionistas. Com suas cores vibrantes e design encantador, o laço Sophia é perfeito para adicionar um toque de elegância aos penteados das crianças. Feito com materiais de qualidade, este laço é uma escolha graciosa para complementar o estilo único das pequenas princesas, proporcionando um toque de sofisticação a qualquer ocasião especial.",
                Valor: "R$18",
                Imagem: "../imagens/laço 1.jpg",},
        
    {
                Laços: "Elizabeth",
                Descrição: "O laço infantil Elizabeth é uma peça encantadora que combina estilo clássico e moderno. Com uma paleta de cores suaves e um design refinado, o laço Elizabeth é ideal para adicionar um toque gracioso aos penteados das crianças. Sua elegância atemporal faz dele a escolha perfeita para ocasiões especiais, enquanto a durabilidade e a praticidade garantem que possa ser usado no dia a dia com charme. O laço Elizabeth é mais do que um acessório; é uma declaração de estilo delicado para as pequenas fashionistas.",
                Valor: "R$25",
                Imagem : "../imagens/laço 2.jpg"
            },
        
    {
                Laços: "Agnes",
                Descrição: "O laço infantil Agnes é um encantador acessório monocromático, destacando-se por sua simplicidade elegante e a adição de uma deslumbrante pedra vermelha. Com um design minimalista, este laço é perfeito para adicionar um toque de cor vibrante aos penteados das crianças. A pedra vermelha adiciona um toque de sofisticação, proporcionando um contraste elegante. O laço Agnes é uma escolha refinada para quem busca um acessório de estilo clássico com um toque moderno, perfeito para complementar qualquer ocasião especial.",
                Valor : "R$25",
                Imagem: "../imagens/laço 3.jpg"
            }
        
]


const tiarasContainer = criarContainer('tiaras-container', 'Tiaras', graciosa => graciosa.Tiara);


const lacosContainer = criarContainer('lacos-container', 'Laços', graciosa => graciosa.Laços);


cabeçalho.appendChild(tiarasContainer);
cabeçalho.appendChild(lacosContainer);

function criarContainer(classe, titulo, filtro) {
    const container = document.createElement('div');
    container.classList.add(classe, 'row');

    const tituloElemento = document.createElement('h2');
    tituloElemento.textContent = titulo;
    container.appendChild(tituloElemento);

    graciosas.filter(filtro).map(graciosa => {
        const elemento = criarElemento(graciosa);
        container.appendChild(elemento);
    });

    return container;
}

function criarElemento(graciosa) {
    const categoria = graciosa.Tiara ? 'tiara' : 'laco';

    const elemento = document.createElement('div');
    elemento.classList.add(categoria, 'item');

    elemento.innerHTML = `
        <img src="${graciosa.Imagem}" alt="${graciosa.Tiara || graciosa.Laços}">
        <div class="info">
            <h1>${graciosa.Tiara || graciosa.Laços}</h1>
            <p>${graciosa.Descrição}</p>
            <p>${graciosa.Valor}</p>
        </div>
    `;

    return elemento;
}





