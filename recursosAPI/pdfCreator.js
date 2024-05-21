const fs = require('fs');
const PDFDocument = require('pdfkit');

function criaDocs(dados) {

    dados.map((el) => {
        let posY = 100;
        const incrementoY = 50;
        let doc = new PDFDocument();
        let writeStream = fs.createWriteStream(`./public/recursos/pdfs/${el.id}.pdf`);
        doc.pipe(writeStream);
        Object.entries(el).forEach((info)=>{
            doc.fontSize(25).text(info, 100, posY);
            posY += incrementoY;
        })
        doc.end();
    })

}

module.exports = {
    criaDocs
}