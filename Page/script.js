var produtos = [

    {
        imagem: 'https://s2.glbimg.com/Lb1FnZIBKVoS_0TtqNTaFKFtjAs=/0x0:695x391/984x0/smart/filters:strip_icc()/s.glbimg.com/po/tt2/f/original/2015/10/13/cyberpunk-004.jpg',
        nome: 'CAPACETE APRIMORADO',
        texto: 'Protege contra flashs de granadas de luz ofuscante ou Laser',
    },
    {
        imagem: 'https://media.wired.com/photos/592663337034dc5f91beb3b1/master/w_2560%2Cc_limit/GITS_TA.jpg',
        nome: 'IMPLANTE OCULAR',
        texto: 'Enxerga no espectro infravermelho, além do raio-x a longa distância',
    },
    {
        imagem: 'https://www.comboinfinito.com.br/principal/wp-content/uploads/2018/01/Cyberpunk-2077.jpg',
        nome: 'ÓCULOS APRIMORADO',
        texto: 'Concede Visão de Raio x com capacidade de 2Km',
    },
    {
        imagem: 'http://1.bp.blogspot.com/_GEZhuS9aVSA/TCfZ6Oh_PkI/AAAAAAAABP0/F5XT2Au6Gd8/s1600/050407-1.jpg',
        nome: 'EXO ESQUELETO - Militar',
        texto: 'Tecnologia canadense, projetado e construído por fios de adamantium',
    },
    {
        imagem: 'http://2.bp.blogspot.com/_GEZhuS9aVSA/TCfY0Sgzl-I/AAAAAAAABPk/6mVIDsZZZJk/s1600/NS_Arm.jpg',
        nome: 'BRAÇOS CIBERNÉTICOS',
        texto: 'Punhos Hidráulicos aumentam a força',
    },
    {
        imagem: 'https://i.pinimg.com/474x/de/a1/0e/dea10ec70044bc5caaf1306be93ddb36.jpg',
        nome: 'ARMADURA - Militar',
        texto: 'Projetado e construído por fibras de metal ao redor dos músculos',
    },
    {
        imagem: 'http://3.bp.blogspot.com/_GEZhuS9aVSA/TCfWjFOVjBI/AAAAAAAABOs/b4NZN3t6b2A/s1600/Bernardo_Delgado_I2.jpg',
        nome: 'PERNAS - 60Km',
        texto: 'Aumento de velocidade, além de oferecer suporte para escaladas',
    },
    {
        imagem: 'https://cdnb.artstation.com/p/assets/images/images/005/807/797/large/raka-adhitama-ghost-in-the-shell-geisha.jpg?1493911312&dl=1',
        nome: 'GEISHA SERVIÇAL',
        texto: 'Geisha de luxo, ela também fará sua segurança com armas acopladas',
    },
    {
        imagem: 'http://3.bp.blogspot.com/_GEZhuS9aVSA/TCfaZ7rmDgI/AAAAAAAABQE/xXWB2vM7_Ig/s1600/GalleryImage2911872.jpg',
        nome: 'Pernas Casual - 20Km',
        texto: 'Patins acoplados, fibra á prova de balas de até calibre 38',
    },
    {
        imagem: 'https://www.megasistema.com.br/repositorio/uploads/noticia/4963/hasta-la-vista-baby-060529.jpg',
        nome: 'EXTERMINADOR',
        texto: 'Contrato de serviços apenas em casos extraordinários!',
    },
        

]

produtos.map((produto) => {
    document.getElementById('protudos').innerHTML += `
        <div class="produto">
            <img src="${produto.imagem}">
            <div>
                <h2>${produto.nome}</h2>
                <hr>
                <p>${produto.texto}</p>
                <button>Comprar</button>
            </div>
        </div>
    `    
})











