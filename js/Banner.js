const banner = document.getElementById('banner');

// Função que verifica a rolagem
function verificarScroll() {
    // Verifica se a rolagem foi maior que 50px
    if (window.scrollY > 100) {
        banner.classList.add('fixo'); // Adiciona a classe 'fixo' se rolou mais que 50px
    } else {
        banner.classList.remove('fixo'); // Remove a classe 'fixo' se o usuário voltou para o topo
    }
}

// Chama a função ao rolar a página
window.onscroll = verificarScroll;