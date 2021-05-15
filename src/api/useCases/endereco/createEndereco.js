class createEndereco {
  constructor({ modelEndereco }) {
    this.endereco = modelEndereco;
  }

  async execute(clienteID, endereco) {
    try {
      const body = {
        cliente_id: clienteID,
        ...endereco,
      };

      const foundEndereco = await this.endereco.findOne({
        where: { cliente_id: clienteID },
      });

      if (foundEndereco) {
        const newEndereco = await this.endereco.update(endereco, {
          where: { cliente_id: clienteID },
          returning: true,
        });

        if (!newEndereco) throw new Error('endereco not found');

        const [, [updatedEndereco]] = newEndereco;

        return { updated: true, endereco: updatedEndereco };
      }

      const createdEndereco = await this.endereco.create(body);

      if (!createdEndereco) throw new Error('Create endereco got error');

      return { created: true, endereco: createdEndereco };
    } catch (error) {
      throw error;
    }
  }
}

module.exports = createEndereco;
