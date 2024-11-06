
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

}

// Chama a função ao rolar a página
window.onscroll = verificarScrollLinks;