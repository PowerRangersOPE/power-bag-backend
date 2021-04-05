class CreateBagService {
  constructor(modelBag, functionfindCliente, functionfindProdutoWhere) {
    this.bag = modelBag;
    this.findCliente = functionfindCliente;
    this.findProdutos = functionfindProdutoWhere;
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

      return produtos;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = CreateBagService;
