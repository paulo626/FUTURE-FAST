const banner = document.getElementById('banner');

// Função que verifica a rolagem
function verificarScroll() {
    // Verifica se a rolagem foi maior que 50px
    console.log('conecto')
    if (window.scrollY > 100) {
        banner.classList.add('fixo'); // Adiciona a classe 'fixo' se rolou mais que 50px
        console.log('foi')
    } else {
        banner.classList.remove('fixo'); // Remove a classe 'fixo' se o usuário voltou para o topo

    }
}
function mudarPagina(pagina){
    switch (pagina){
        case 'estudos':
            window.location.href = "/Pages/Estudos.html";
            break;
        case 'Sobrenos':
            window.location.href = "/Pages/SobreNos.html";
            break;
        case 'Ia':
            window.location.href = "/Pages/Pagina-Ia.html";
            break;
    }
}


// Chama a função ao rolar a página

window.addEventListener('scroll', verificarScroll);
