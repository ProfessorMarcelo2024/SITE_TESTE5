//chatBot script
const chatBotText = document.querySelector('#chatPergunta');
const chatBotEnv = document.querySelector('#enviar');
const chatBotMess = document.querySelector('#botChat');

chatBotEnv.addEventListener('click', () => {
    let mensagem = 
    `<div class='textChatContainer'>
        <img src='imgs/petrologoRound.svg' alt=''>
        <div class='textoConfig textoBot'>
            <p>${chatBotText.value}</p >
        </div >
    </div >`;
    document.chatBotMess.appendChild(mensagem);
})

function criaTexto(mensagem) {
    
}


//<div class='textChatContainer'>
/* <img src='imgs/petrologoRound.svg' alt=''>
<div class='textoConfig textoBot'>
    <p>mensagem</p>
</div>
</div> */