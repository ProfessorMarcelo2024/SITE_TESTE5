//Ajuste do tamanho de tela Mobile
window.addEventListener('resize',()=>{
    let altura = window.innerHeight*0.01;
    document.documentElement.style.setProperty('--vh',`${altura}px`);
})

//Abre e fecha Bot
const chatIntro = document.querySelector('.chatConjunto');
const modalbot = document.querySelector('.formModal');
const btnCloseBot = document.querySelector('#fecharBot');
//Abre 
chatIntro.addEventListener('click',()=>{
    modalbot.style.display = 'block';
})
//Fecha
btnCloseBot.addEventListener('click',()=>{
    modalbot.style.display = 'none'
})

