const getShopStylesUseCase = require('../useCases/shopStyles');

const { createShopStyles } = getShopStylesUseCase();
class ShopStylesController {
  async store(req, res) {
    try {
      const {
        body: { home, profile },
        params: { shopId },
      } = req;
      const createdShopStyles = await createShopStyles.execute({
        home,
        profile,
        shop_id: shopId,
      });
      return res.json(createdShopStyles);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }
}

module.exports = ShopStylesController;
