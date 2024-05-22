//pegando o SVG
const elemtMapa = document.getElementById('mapa-svg');

// Adicione o novo elemento ao SVG
function waypointAdd(x, y) {
    let coordenadas = tratacord(x, y);
    let novoElemento = document.createElementNS('http://www.w3.org/2000/svg', 'image');
    novoElemento.setAttribute('id', 'waypoint');
    novoElemento.setAttribute('x', coordenadas.x);
    novoElemento.setAttribute('y', coordenadas.y);
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

// Traduz as coordenadas geograficas em pontos na malha do SVG
function tratacord(lat, lon) {
    const lat1 = 7.549210315478844;
    const lon1 = -76.4818376580794;
    const lat2 = -36.109420460206096;
    const lon2 = -24.599187069390315;
    const x1 = 0;
    const y1 = 0;
    const x2 = 1050;
    const y2 = 1050;

    const latScale = (lat2 - lat1) / (y2 - y1);
    const lonScale = (lon2 - lon1) / (x2 - x1);


    const x = (lon - lon1) / lonScale;
    const y = (lat - lat1) / latScale;

    return { x: x, y: y };
}
