class findShopUseCase {
  constructor({ modelShop }) {
    this.shop = modelShop;
  }

  async execute(shopName) {
    try {
      const foundShop = await this.shop.findOne({
        where: { name: shopName.toLowerCase() },
        include: [{ association: 'shopStyles' }],
      });

      if (!foundShop) throw new Error('Shop didnt found');

      return foundShop;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = findShopUseCase;
