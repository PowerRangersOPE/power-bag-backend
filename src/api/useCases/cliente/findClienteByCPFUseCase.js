const { Op } = require('sequelize');

class findClienteByCPFUseCase {
  constructor({ modelCliente }) {
    this.cliente = modelCliente;
  }

  async execute({ cpf, status }) {
    try {
      const foundClient = await this.cliente.findOne({
        where: {
          [Op.and]: [{ cpf }, { status }],
        },
      });

      if (!foundClient) throw new Error('Cliente not found');

      return foundClient;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = findClienteByCPFUseCase;
