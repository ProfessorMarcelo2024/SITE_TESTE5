window.addEventListener('resize',()=>{
    let altura = window.innerHeight*0.01;
    document.documentElement.style.setProperty('--vh',`${altura}px`);
})