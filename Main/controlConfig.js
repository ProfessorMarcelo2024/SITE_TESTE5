//redio select 
const modos = [...document.querySelectorAll('input[type="radio"][name="modos"]')];
var selecionavel = "";

// Emulando banco de dados
const pocos = ['poço1', 'poço2', 'poço3', 'poço4', 'poço5', 'poço6', 'poço7', 'poço8', 'poço9'];
const blocos = ['blocos1', 'blocos2', 'blocos3', 'blocos4', 'blocos5', 'blocos6', 'blocos7', 'blocos8', 'blocos9'];
const campos = ['campos1', 'campos2', 'campos3', 'campos4', 'campos5', 'campos6', 'campos7', 'campos8', 'campos9'];
const bacias = ['bacias1', 'bacias2', 'bacias3', 'bacias4', 'bacias5', 'bacias6', 'bacias7', 'bacias8', 'bacias9'];

const quadroOpc = document.querySelector('.opcoesDivision');

povoando(pocos);

modos.forEach(modo => {
    modo.addEventListener('change', () => {
        switch (modo.id) {
            case 'pocos':
                povoando(pocos);
                break;
            case 'blocos':
                povoando(blocos);
                break;
            case 'campos':
                povoando(campos);
                break;
            case 'bacias':
                povoando(bacias);
                break;
            default:
                console.log('Erro');
                break;
        }
    });

});

function povoando(povo) {
    quadroOpc.innerHTML = "";
    povo.map((el) => {
        let elemento = document.createElement('p');
        elemento.setAttribute('class', 'opcResultado');
        elemento.setAttribute('id', el);
        elemento.innerHTML = el;
        quadroOpc.appendChild(elemento);
    })

    selecionavel = [...document.querySelectorAll('.opcResultado')];

    selecionavel.forEach(selecionavel =>{
        selecionavel.addEventListener('click', ()=>{
            console.log(selecionavel.id);
        })
    })
}
