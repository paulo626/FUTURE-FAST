
const links = document.getElementById('linksBook');
const erer = document.getElementById('ehder')

function verificarScrollLinks(){
    let posicoes = {
        dias:[12,21]
        
    }
    if(window.scrollY > posicoes.dias[0] && posicoes.dias[0] ){

        erer.style.color = 'red'
    }
    else{
        erer.style.color = 'black'
    }

    if (window.scrollY > 100) {
        links.classList.add('fixolink'); // Adiciona a classe 'fixo' se rolou mais que 50px
    } else {
        links.classList.remove('fixolink'); // Remove a classe 'fixo' se o usuário voltou para o topo

    }
}

// Chama a função ao rolar a página
window.onscroll = verificarScrollLinks;

