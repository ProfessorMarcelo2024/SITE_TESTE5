//pegando o SVG
const elemtMapa = document.getElementById('mapa-svg');

// Adicione o novo elemento ao SVG

function waypointAdd(x, y) {
    let novoElemento = document.createElementNS('http://www.w3.org/2000/svg', 'image');
    novoElemento.setAttribute('id', 'waypoint');
    novoElemento.setAttribute('x', tratacord((-1*x),'x'));
    novoElemento.setAttribute('y', tratacord((-1*y),'y'));
    novoElemento.setAttribute('width', '50');
    novoElemento.setAttribute('height', '50');
    novoElemento.setAttribute('href', './imgs/Mapimgs/waypoint.svg');
    elemtMapa.appendChild(novoElemento);
}

// Remove o elemento SVG

function waypointRemove() {
    let elDelet = document.getElementById('waypoint');
    elDelet.parentNode.removeChild(elDelet);
}

function tratacord(x,pr) {
    let resultado= 0;
    if (pr=='x') {
        resultado = (20*x);
        
    } else {
        resultado = (5*x)
    }
    return resultado;
}
