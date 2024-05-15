// traz os dados do banco
var dados = [];

document.addEventListener('DOMContentLoaded', () => {
    fetch('/dados')
        .then(response => response.json())
        .then(data => {
            dados = data;
            povoando(dados);
            resultado(dados[0].id);
        })
        .catch(error => console.log('Erro ao buscar dados:'));
});

//pegando os radios
const modos = [...document.querySelectorAll('input[type="radio"][name="modos"]')];

//pegando as areas
const quadroOpc = document.querySelector('.opcoesDivision');
const quadroRes = document.querySelector('.resultadoDivision');
const downData = document.querySelector('#dataInfo');
const downNome = document.querySelector('#nameInfo');

//emulando dados
const blocos = ['blocos1', 'blocos2', 'blocos3', 'blocos4', 'blocos5', 'blocos6', 'blocos7', 'blocos8', 'blocos9'];
const campos = ['campos1', 'campos2', 'campos3', 'campos4', 'campos5', 'campos6', 'campos7', 'campos8', 'campos9'];
const bacias = ['bacias1', 'bacias2', 'bacias3', 'bacias4', 'bacias5', 'bacias6', 'bacias7', 'bacias8', 'bacias9'];

//
const infoPoco = [" - Nome do Poço:", " - Cadastro:", " - Operador:", " - Estado:", " - Bacia:", " - Bloco:", " - Campo:", " - Situação:", " - Latitude:", " - Longitude:"];

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

function resultado(dado) {
    let inf = [];
    dados.map((el) => {
        if (el.id == dado) {
            inf = Object.values(el);
            downData.innerHTML =formatarData(el.updated_at);
            downNome.innerHTML =el.nomeDopoco;
        }
    })
    quadroRes.innerHTML = "";
    let i = 1;
    infoPoco.map((el) => {
        let elemento = document.createElement('p');
        elemento.innerHTML = `${el} ${inf[i]}`;
        quadroRes.appendChild(elemento);
        i++;
    })
}

function povoando(povo) {
    quadroOpc.innerHTML = "";
    povo.map((el) => {
        let elemento = document.createElement('p');
        elemento.setAttribute('class', 'opcResultado');
        elemento.setAttribute('id', el.id);
        elemento.innerHTML = el.nomeDopoco;
        quadroOpc.appendChild(elemento);
    })

    let selecionavel = [...document.querySelectorAll('.opcResultado')];

    selecionavel.forEach(selecionavel => {
        selecionavel.addEventListener('click', () => {
            resultado(selecionavel.id);
        })
    })
}

function formatarData(dataString) {
    let data = new Date(dataString); 
    let dia = data.getDate();
    let mes = data.getMonth() + 1;
    let ano = data.getFullYear();
    if (dia < 10) {
        dia = '0' + dia;
    }
    if (mes < 10) {
        mes = '0' + mes;
    }
    return dia + '/' + mes + '/' + ano;
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

    let selecionavel = [...document.querySelectorAll('.opcResultado')];

    selecionavel.forEach(selecionavel => {
        selecionavel.addEventListener('click', () => {
            console.log(selecionavel.id);
        })
    })
}
