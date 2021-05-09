const fs = require('fs');
const { resolve } = require('path');
class createBagUseCase {
  constructor({
    modelBag,
    modelItensBag,
    findCliente,
    findProdutoWhere,
    createPDFUseCase,
    sendEmail
  }) {
    this.bag = modelBag;
    this.itensBag = modelItensBag;
    this.findCliente = findCliente;
    this.findProdutos = findProdutoWhere;
    this.createPDFUseCase = createPDFUseCase;
    this.sendEmail = sendEmail;
  }

  async createItensBag(produto, bag) {
      await this.itensBag.create({
        produto_id: produto.id,
        bag_id: bag.id
    })
  }

  async execute({ id }) {
    try {
      const cliente = await this.findCliente.execute(id);

      if (!cliente) throw new Error('Cliente not found');

      console.log('cliente', cliente);

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

      console.log('requiredConditionals', requiredConditionals);
      console.log('optionalConditionals', optionalConditionals);


      const { produtos, totalValueProdutos } = await this.findProdutos.execute(
        requiredConditionals,
        optionalConditionals
      );

        // await this.createPDFUseCase.execute(produtos, id);

        console.log('create PDF');

        const bagBody = {
            status: 'criado',
            observacoes: '',
            valor: totalValueProdutos,
            produtos_pdf: '',
            cliente_id: id
        };

      const bag = await this.bag.create(bagBody);

      console.log('BAG', bag);

      await produtos.map(async produto => await this.createItensBag(produto, bag));

      this.sendEmail.execute({ cliente, id });

      console.log('Enviar email');

      return bag;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = createBagUseCase;
