class updateBag {
  constructor({ modelBag }) {
    this.Bag = modelBag;
  }

  async execute({ status, valor, id_bag }) {
    try {
      const newStatus = {
        status,
        valor,
      };
      const updatedBag = await this.Bag.update(newStatus, {
        where: { id: id_bag },
        returning: true,
      });

      if (!updatedBag) throw new Error('bag or client not found');

      const [, [bag]] = updatedBag;

      return bag;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = updateBag;
