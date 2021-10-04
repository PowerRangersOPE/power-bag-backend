class createShopUseCase {
  constructor({ modelShop }) {
    this.shop = modelShop;
  }

  async execute(body) {
    // try {
    //   const bodyWithStatus = { ...body, status: true };
    //   const shop = await this.shop.create(bodyWithStatus);

    //   if (!shop) throw new Error('Create shop got error');

    //   return { Created: true, shopID: shop.id };
    return { body };
  }

  catch(error) {
    throw error;
  }
}

module.exports = createShopUseCase;
