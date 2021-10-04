const getShopUseCase = require('../useCases/shop');

const { createShopUseCase } = getShopUseCase;

class ShopController {
  async store(req, res) {
    try {
      const createdShop = await createShopUseCase.execute(req.body);
      return res.json(createdShop);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }
}

module.exports = ShopController;
