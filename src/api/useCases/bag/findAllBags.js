class findAllBags {
  constructor({ modelBag }) {
    this.bag = modelBag;
  }

  async execute() {
    try {
      const bags = await this.bag.findAll();

      if (!bags) throw new Error('Bags not found');

      return bags;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = findAllBags;
