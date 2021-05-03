class findEnderecoCliente {
  constructor({ modelEndereco }) {
    this.endereco = modelEndereco;
  }

  async execute(clienteID) {
    try {
      const foundClient = await this.endereco.findOne({
        where: { cliente_id: clienteID },
      });

      if (!foundClient) throw new Error('endereco not found');

      return foundClient;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = findEnderecoCliente;
