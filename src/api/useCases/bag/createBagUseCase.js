class createBagUseCase {
  constructor({
    modelBag,
    findCliente,
    findProdutoWhereUseCase,
    createPDFUseCase,
  }) {
    this.bag = modelBag;
    this.findCliente = findCliente;
    this.findProdutos = findProdutoWhereUseCase;
    this.createPDFUseCase = createPDFUseCase;
  }

  async execute(clienteId) {
    try {
      const cliente = await this.findCliente.execute(clienteId);

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

      this.createPDFUseCase.execute(produtos);

      return produtos;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = createBagUseCase;
