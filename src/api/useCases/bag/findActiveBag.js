const { Op } = require('sequelize');

class findActiveBagUseCase {
  constructor({ modelBag }) {
    this.bag = modelBag;
  }

  async execute(clienteID) {
    try {
      const foundBag = await this.bag.findOne({
        where: {
          cliente_id: clienteID,
          status: ['enviada', 'retirar', 'aguardando envio'],
        },
      });

      return foundBag;
    } catch (error) {
      throw error;
    }
  }
}
module.exports = findActiveBagUseCase;
