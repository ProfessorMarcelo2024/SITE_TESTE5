//window track adjust to mobile
window.addEventListener('resize',()=>{
    let altura = window.innerHeight*0.01;
    document.documentElement.style.setProperty('--vh',`${altura}px`);
})

//Open and close bot
const chatIntro = document.querySelector('.chatConjunto');
const modalbot = document.querySelector('.formModal');
const btnCloseBot = document.querySelector('#fecharBot');
//Open 
chatIntro.addEventListener('click',()=>{
    modalbot.style.display = 'block';
})
//close
btnCloseBot.addEventListener('click',()=>{
    modalbot.style.display = 'none'
})

