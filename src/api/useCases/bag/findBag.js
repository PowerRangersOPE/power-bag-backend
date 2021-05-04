class findBag {
    constructor({ modelBag }) {
      this.bag = modelBag;
    }
  
    async execute(clienteID) {
      const bags = await this.bag.findAll({
        where: { cliente_id: clienteID },
        attributes: { exclude: ['updatedAt'] },
      });
  
      if (!bags) throw new Error('Bags not found');
  
      return bags;
    }
  }
  
  module.exports = findBag;
  