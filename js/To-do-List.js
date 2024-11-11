var idDoCodigo=0
var ondecolocar=document.getElementById("GuardarCards").value
function pegarOvalor(){
    var titulo = document.getElementById("titulo").value
    return{titulo}
}
function buttonAtivado(){
    valores = pegarOvalor();
    // Atualiza o valor do ID
    idDoCodigo = idDoCodigo + 1;

    // Criar uma string com o código HTML que deseja adicionar
    let novoHTML = `
        <div id="${idDoCodigo}" class="card">
            <p>${valores.titulo}</p>
            <button onclick="DeletarCartao('${idDoCodigo}')" class="cardTirar"><img class="ImgBotao" src="/assets/imagensIa/close_24dp_FFFFFF_FILL0_wght400_GRAD0_opsz24.png" alt=""></button>
        </div>
    `;

    // Selecionar a div onde deseja adicionar o HTML
    let container = document.getElementById("GuardarCards");
    
    // Adicionar o HTML à div
    container.innerHTML += novoHTML;

    var pegarValor1 = document.getElementById("titulo");
    pegarValor1.value = '';
}

function DeletarCartao(idAserremovido){
    const cartaoRemover = document.getElementById(idAserremovido);
    cartaoRemover.remove();
   ;
}