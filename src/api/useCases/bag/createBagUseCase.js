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

      const produtos = await this.findProdutos.execute(
        requiredConditionals,
        optionalConditionals
      );

      await this.createPDFUseCase.execute(produtos);

      this.sendEmail.execute({ cliente });

      return produtos;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = createBagUseCase;
