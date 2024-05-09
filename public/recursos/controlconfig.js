// traz os dados do banco
var dados = [];
document.addEventListener('DOMContentLoaded', () => {
    fetch('/dados')
        .then(response => response.json())
        .then(data => {
            dados = data;
        })
        .catch(error => console.log('Erro ao buscar dados:'));
        povoando(dados)
});

//pegando os radios
const modos = [...document.querySelectorAll('input[type="radio"][name="modos"]')];

//pegando as areas
const quadroOpc = document.querySelector('.opcoesDivision');

//emulando dados
const blocos = ['blocos1', 'blocos2', 'blocos3', 'blocos4', 'blocos5', 'blocos6', 'blocos7', 'blocos8', 'blocos9'];
const campos = ['campos1', 'campos2', 'campos3', 'campos4', 'campos5', 'campos6', 'campos7', 'campos8', 'campos9'];
const bacias = ['bacias1', 'bacias2', 'bacias3', 'bacias4', 'bacias5', 'bacias6', 'bacias7', 'bacias8', 'bacias9'];

modos.forEach(modo => {
    modo.addEventListener('change', () => {
        switch (modo.id) {
            case "pocos":
                povoando(dados)
                break;
            case "blocos":
                povoandoSimples(blocos);
                break;
            case "campos":
                povoandoSimples(campos);
                break;
            case "bacias":
                povoandoSimples(bacias);
                break;
            default:
                console.log('erro modo switch')
                break;
        }
    })
})

function povoando(povo) {
    quadroOpc.innerHTML = "";
    povo.map((el) => {
        let elemento = document.createElement('p');
        elemento.setAttribute('class', 'opcResultado');
        elemento.setAttribute('id', el.id);
        elemento.innerHTML = el.nomeDopoco;
        quadroOpc.appendChild(elemento);
    })

    let selecionavel = "";
    selecionavel = [...document.querySelectorAll('.opcResultado')];

    selecionavel.forEach(selecionavel => {
        selecionavel.addEventListener('click', () => {
            console.log(selecionavel.id);
        })
    })
}


function povoandoSimples(povo) {
    quadroOpc.innerHTML = "";
    povo.map((el) => {
        let elemento = document.createElement('p');
        elemento.setAttribute('class', 'opcResultado');
        elemento.setAttribute('id', el);
        elemento.innerHTML = el;
        quadroOpc.appendChild(elemento);
    })

    let selecionavel = "";
    selecionavel = [...document.querySelectorAll('.opcResultado')];

    selecionavel.forEach(selecionavel => {
        selecionavel.addEventListener('click', () => {
            console.log(selecionavel.id);
        })
    })
}