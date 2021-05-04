const fs = require('fs');
const { resolve } = require('path');
class createBagUseCase {
  constructor({
    modelBag,
    findCliente,
    findProdutoWhere,
    createPDFUseCase,
    sendEmail,
  }) {
    this.bag = modelBag;
    this.findCliente = findCliente;
    this.findProdutos = findProdutoWhere;
    this.createPDFUseCase = createPDFUseCase;
    this.sendEmail = sendEmail;
  }

//   createPDFBuffer(clienteID) {
//     const path = resolve(
//         __dirname,
//         '..',
//         '..',
//         '..',
//         'temp',
//         `ProdutosParaBag-${clienteID}.pdf`
//       );
    
//     const buffer = fs.readFileSync(path, {
//         encoding: 'base64',
//     });

//     return buffer;
//   }

  async execute({ id }) {
    try {
      const cliente = await this.findCliente.execute(id);

      if (!cliente) throw new Error('Cliente not found');

      const {
        perfil: {
          genero,
          fx_etaria,
          estacao_ano,
          tamanho_sapato,
          tamanho_calca,
          tamanho_camisa,
        },
      } = cliente;

      const requiredConditionals = [{ genero }, { fx_etaria }];

      const optionalConditionals = [
        { estacao_ano },
        { tamanho_sapato },
        { tamanho_calca },
        { tamanho_camisa },
      ];

      const { produtos, totalValueProdutos } = await this.findProdutos.execute(
        requiredConditionals,
        optionalConditionals
      );

        await this.createPDFUseCase.execute(produtos, id);

        const bagBody = {
            status: 'criado',
            observacoes: '',
            valor: totalValueProdutos,
            produtos_pdf: '',
            cliente_id: id
        };

      const bag = this.bag.create(bagBody);

      this.sendEmail.execute({ cliente, id });

      return bag;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = createBagUseCase;
