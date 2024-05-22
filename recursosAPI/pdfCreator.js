//imports
const fs = require('fs');
const PDFDocument = require('pdfkit');

//função que dispara a criação dos PDFs
function criaDocs(dados) {
    //iterando cada elemento do banco de dados para fazer um pdf
    dados.map((el) => {
        //Incremento na posição de entrada de informação no PDF
        let posY = 100;
        const incrementoY = 50;
        //Cria o objeto PDF e começa a escrita dele
        let doc = new PDFDocument();
        let writeStream = fs.createWriteStream(`./public/recursos/pdfs/${el.id}.pdf`);
        doc.pipe(writeStream);
        //transforma o objeto em um Array e itera as informações presentes colocando elas dentro o PDF
        Object.entries(el).forEach((info)=>{
            doc.fontSize(12).text(info, 100, posY);
            posY += incrementoY;
        })
        //Encerra a criação do Objeto PDF
        doc.end();
    })

}

module.exports = {
    criaDocs
}