const { Op } = require('sequelize');

class verifyClientByCPFUseCase {
  constructor({ modelCliente }) {
    this.cliente = modelCliente;
  }

  async execute({ cpf }) {
    try {
      const foundClient = await this.cliente.findOne({
        where: {
          [Op.and]: [{ cpf }, { status: 'ativo' }],
        },
      });
      return foundClient;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = verifyClientByCPFUseCase;
