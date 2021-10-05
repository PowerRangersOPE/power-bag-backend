class createShopStylesUseCase {
  constructor({ modelShopStyles }) {
    this.shopStyles = modelShopStyles;
  }

  async execute(body) {
    try {
      const shopStyles = await this.shopStyles.create(body);

      if (!shopStyles) throw new Error('Create shopStyles got error');

      return { shopStyles };
    } catch (error) {
      throw error;
    }
  }
}
module.exports = createShopStylesUseCase;
