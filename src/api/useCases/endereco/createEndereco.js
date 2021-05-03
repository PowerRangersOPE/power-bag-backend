class createEndereco {
  constructor({ modelEndereco }) {
    this.endereco = modelEndereco;
  }

  async execute(clienteID, endereco) {
    try {
        const body = {
            cliente_id: clienteID, ...endereco
       };

      const clienteEndereco = await this.endereco.create(body);

      if (!clienteEndereco) throw new Error('Create endereco got error');

      return { created: true, clienteEndereco };
    } catch (error) {
      throw error;
    }
  }
}

module.exports = createEndereco;
