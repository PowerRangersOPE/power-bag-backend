class updateEndereco {
    constructor({ modelEndereco }) {
      this.endereco = modelEndereco;
    }
  
    async execute(clienteID, updatedEndereco) {
      try {
        const enderecoAlreadyUpdated = await this.endereco.update(updatedEndereco, {
            where: { cliente_id: clienteID },
            returning: true,
          });
  
        if (!enderecoAlreadyUpdated) throw new Error('endereco not found');

        const [, [endereco]] = enderecoAlreadyUpdated;
  
        return endereco;
      } catch (error) {
        throw error;
      }
    }
  }
  
  module.exports = updateEndereco;
  