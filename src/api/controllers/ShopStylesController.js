const getShopStylesUseCase = require('../useCases/shopStyles');

const { createShopStyles } = getShopStylesUseCase();
class ShopStylesController {
  async store(req, res) {
    try {
      const createdShopStyles = await createShopStyles.execute(req.body);
      return res.json(createdShopStyles);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }
}

module.exports = ShopStylesController;
