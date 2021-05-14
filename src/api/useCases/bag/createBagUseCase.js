const fs = require('fs');
const { resolve } = require('path');
class createBagUseCase {
  constructor({
    modelBag,
    modelItensBag,
    findCliente,
    findProdutoWhere,
    createPDFUseCase,
    sendEmail,
    pagarme
  }) {
    this.bag = modelBag;
    this.itensBag = modelItensBag;
    this.findCliente = findCliente;
    this.findProdutos = findProdutoWhere;
    this.createPDFUseCase = createPDFUseCase;
    this.sendEmail = sendEmail;
    this.pagarme = pagarme;
    this.newBag = null;
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

      this.newBag = await this.bag.create(bagBody);

      console.log('BAG', this.newBag.toJSON());

    const transaction_id = await this.pagarme.createTransactions(cliente.toJSON(), this.newBag.toJSON());

    // this.newBag = await this.bag.update({ transaction_id }, { 
    //     where: { id: bag.id },
    //     returning: true,
    //  })

      await produtos.map(async produto => await this.createItensBag(produto, this.newBag));

      this.sendEmail.execute({ cliente, id });

      console.log('Enviar email');

      return this.newBag;
    } catch (error) {
        if(this.newBag) await this.cliente.destroy({ where: { id: this.newBag.id } });
      throw error;
    }
  }
}

module.exports = createBagUseCase;
