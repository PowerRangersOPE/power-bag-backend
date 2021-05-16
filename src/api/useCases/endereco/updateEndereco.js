class updateEndereco {
  constructor({ modelEndereco }) {
    this.endereco = modelEndereco;
  }

  async execute(clienteID, newEndereco) {
    try {
      const updatedEndereco = await this.endereco.update(newEndereco, {
        where: { cliente_id: clienteID },
        returning: true,
      });

      if (!updatedEndereco) throw new Error('endereco not found');

      const [, [endereco]] = updatedEndereco;

      return endereco;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = updateEndereco;
