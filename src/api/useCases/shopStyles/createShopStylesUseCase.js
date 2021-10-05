class createShopUseCase {
  constructor({ modelShopStyles }) {
    this.shop = modelShopStyles;
  }

  async execute(body) {
    try {
      const shopStyles = await this.shopStyles.create(body);

      if (!shopStyles) throw new Error('Create shopStyles got error');

      return { Created: true };
    } catch (error) {
      throw error;
    }
  }
}
module.exports = createShopUseCase;
