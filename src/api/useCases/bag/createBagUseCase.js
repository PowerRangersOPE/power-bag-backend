class createBagUseCase {
  constructor({
    modelBag,
    modelItensBag,
    findCliente,
    findProdutoWhere,
    createPDFUseCase,
    sendADMEmail,
    sendClienteEmail,
    pagarme,
  }) {
    this.bag = modelBag;
    this.itensBag = modelItensBag;
    this.findCliente = findCliente;
    this.findProdutos = findProdutoWhere;
    this.createPDFUseCase = createPDFUseCase;
    this.sendADMEmail = sendADMEmail;
    this.sendClienteEmail = sendClienteEmail;
    this.pagarme = pagarme;
    this.newBag = null;
  }

  async createItensBag(produto, bag) {
    await this.itensBag.create({
      produto_id: produto.id,
      bag_id: bag.id,
    });
  }

  async execute({ id }) {
    try {
      const cliente = await this.findCliente.execute(id);

      if (!cliente) throw new Error('Cliente not found');

      console.log('cliente', cliente.toJSON());

      const {
        perfil: {
          genero,
          fx_etaria,
          estacao_ano,
          tamanho_sapato,
          tamanho_calca,
          tamanho_camisa,
          cor,
          tipo_estampa,
          tipo_tenis,
          tipo_estilo,
        },
      } = cliente;

      const requiredConditionals = [{ genero }, { fx_etaria }];

      const optionalConditionals = [
        { estacao_ano },
        { cor },
        { tipo_tenis },
        { tipo_estampa },
        { tipo_estilo },
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

      //   await this.createPDFUseCase.execute(produtos, id);

      //   console.log('create PDF');

      if (totalValueProdutos <= 0) throw new Error('Bag with no value');

      const bagBody = {
        status: 'Solicitada',
        observacoes: '',
        valor: totalValueProdutos,
        valor_original: totalValueProdutos,
        produtos_pdf: '',
        cliente_id: id,
        transaction_id: '',
      };

      this.newBag = await this.bag.create(bagBody);

      console.log('BAG', this.newBag.toJSON());

      const transaction_id = await this.pagarme.createTransactions(
        cliente.toJSON(),
        this.newBag.toJSON()
      );

      const [, [updatedBag]] = await this.bag.update(
        { transaction_id },
        {
          where: { id: this.newBag.id },
          returning: true,
        }
      );

      this.newBag = updatedBag;

      await produtos.map(async (produto) =>
        this.createItensBag(produto, this.newBag)
      );

      this.sendADMEmail.execute({ cliente });
      this.sendClienteEmail.execute({ cliente });

      console.log('Enviar email');

      return this.newBag;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = createBagUseCase;
