//chatBot script
const chatBotText = document.querySelector('#chatPergunta');
const chatBotEnv = document.querySelector('#enviar');
const chatBotMess = document.querySelector('#botChat');

chatBotEnv.addEventListener('click', () => {
    let mensagem = 
    `
        <div class='textoConfig textoUsuario'>
            <p>${chatBotText.value}</p >
        </div >
        <img src="imgs/botIcon.svg" alt="">
   `;
    const div=document.createElement('div')
    div.setAttribute('class','textChatContainer');
    div.innerHTML = mensagem;
    chatBotMess.appendChild(div);
})




//<div class='textChatContainer'>
/* <img src='imgs/petrologoRound.svg' alt=''>
<div class='textoConfig textoBot'>
    <p>mensagem</p>
</div>
</div> */