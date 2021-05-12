class updateBag {
    constructor({ modelBag }) {
      this.Bag = modelBag;
    }
  
    async execute(newStatus) {
      try {
        const updatedBag = await this.Bag.update(newStatus, {
            where: {id: newStatus.id_bag},
            returning: true,
          });
  
        if (!updatedBag) throw new Error('bag or client not found');

        const [, [status]] = updatedBag;
  
        return status;
      } catch (error) {
        throw error;
      }
    }
}
  
  module.exports = updateBag;