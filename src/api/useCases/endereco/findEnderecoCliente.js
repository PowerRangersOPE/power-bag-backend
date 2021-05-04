class findEnderecoCliente {
  constructor({ modelEndereco }) {
    this.endereco = modelEndereco;
  }

  async execute(clienteID) {
    try {
      const foundEndereco = await this.endereco.findOne({
        where: { cliente_id: clienteID },
      });

      if (!foundEndereco) throw new Error('endereco not found');

      return foundClient;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = findEnderecoCliente;
