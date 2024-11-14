const axios = require('axios');

async function enviarPergunta(pergunta) {
    try {
        const response = await axios.post('http://localhost:3000/pergunta', {
            pergunta: pergunta
        });
        console.log('Resposta do servidor:', response.data.resposta);
    } catch (error) {
        console.error('Erro ao enviar a pergunta:', error);
    }
}

// Exemplo de uso
enviarPergunta("Qual é a capital da França?");

