//chatBot script
const chatBotText = document.querySelector('#chatPergunta');
const chatBotEnv = document.querySelector('#enviar');
const chatBotMess = document.querySelector('#botChat');
const paraScroll = document.querySelector('.botChatcontainer');

const respostas = {
    'poços': 'aqui vem alguma explicação de o que são poços',
    'bacias': 'aqui vem alguma explicação de o que são bacias',
    'blocos': 'aqui vem alguma explicação de o que são Blocos exploratorios',
    'campos': 'aqui vem alguma explicação de o que são campos',
    'ola': 'Olá, bem-vindo ao chatBot oilmap, podemos explicar o que cada um dos elementos signfica<br>O que gostaria de saber? fale: <br> poços <br> bacias <br> blocos <br> campos',
    'quem é você?': 'Sou o chatBot oilmap'
};

function mensagem(mensagem, usuario) {
    let texto = '';
    if (usuario == 'usuario') {
        texto =
            `
        <div class='textoConfig textoUsuario'>
            <p>${mensagem}</p >
        </div >
        <img src="imgs/botIcon.svg" alt="">
   `;
    } else {
        texto =
            `
            <img src="imgs/petrologoRound.svg" alt="">
            <div class="textoConfig textoBot">
                <p>${mensagem}</p>
            </div>
   `;
    }

    const div = document.createElement('div')
    div.setAttribute('class', 'textChatContainer');
    div.innerHTML = texto;
    chatBotMess.appendChild(div);
}

function processaResposta(pergunta) {
    if (pergunta in respostas) {
        return respostas[pergunta];
    } else {
        return 'Não tenho uma resposta configura para isso';
    }
}

function processa() {
    let pergunta = chatBotText.value;
    let resposta = processaResposta(pergunta.toLowerCase());

    mensagem(pergunta,"usuario");
    mensagem(resposta,"bot");

    paraScroll.scrollTop = paraScroll.scrollHeight;
    chatBotText.value = "";
}

chatBotEnv.addEventListener('click', () => {
    processa();
})

chatBotText.addEventListener('keypress', (e)=>{
    if (e.key === 'Enter') {
        processa();
    };
})
