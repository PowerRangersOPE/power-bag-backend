const PDFDocument = require('pdfkit');
const fs = require('fs');
const { resolve } = require('path');

class createPDFUseCase {
  constructor() {
    this.produtos = [];
  }

  async execute(produtos) {
    const path = resolve(
      __dirname,
      '..',
      '..',
      '..',
      'temp',
      'ProdutosParaBag.pdf'
    );

    const pdfDoc = new PDFDocument();
    pdfDoc.pipe(fs.createWriteStream(path));
    pdfDoc.fontSize(30).text('Lista de produtos');
    pdfDoc.moveDown();
    produtos.map((produto) => {
      pdfDoc.fontSize(15);
      pdfDoc.text(`ID do produto: ${produto.id}`, { oblique: true });
      pdfDoc.text(`Valor: ${produto.valor}`);
      pdfDoc.text(`Gênero: ${produto.genero}`);
      pdfDoc.text(`Tipo: ${produto.tipo}`);
      pdfDoc.text(`Cor: ${produto.cor}`);
      pdfDoc.text(`Faixa etaria: ${produto.fx_etaria}`);
      pdfDoc.text(`Estação do Ano: ${produto.estacao_ano}`);
      pdfDoc.text(`Necessidade: ${produto.necessidade}`);
      pdfDoc.text(`Tipo da estampa: ${produto.tipo_estampa}`);
      pdfDoc.text(`Tipo de estilo: ${produto.tipo_estilo}`);
      pdfDoc.text(`Tipo do tenis: ${produto.tipo_tenis}`);
      pdfDoc.text(`Tamanho da camisa: ${produto.tamanho_camisa}`);
      pdfDoc.text(`Tamanho do sapato: ${produto.tamanho_sapato}`);
      pdfDoc.text(`Tamanho da calça: ${produto.tamanho_calca}`);
      pdfDoc.moveDown();
    });
    pdfDoc.end();
  }
}

module.exports = createPDFUseCase;
