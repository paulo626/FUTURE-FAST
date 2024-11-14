
const links = document.getElementById('linksBook');


function verificarScrollLinks(){

    if (window.scrollY > 100) {
        links.classList.add('fixolink'); // Adiciona a classe 'fixo' se rolou mais que 50px
    } else {
        links.classList.remove('fixolink'); // Remove a classe 'fixo' se o usuário voltou para o topo

    }
}

// Chama a função ao rolar a página
window.onscroll = verificarScrollLinks;

