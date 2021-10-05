const getShopUseCase = require('../useCases/shop');

const { createShop, findShop } = getShopUseCase();
class ShopController {
  async store(req, res) {
    try {
      const createdShop = await createShop.execute(req.body);
      return res.json(createdShop);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }

  async show(req, res) {
    try {
      const {
        params: { shopId },
      } = req;
      const foundShopStyles = await findShop.execute(shopId);
      return res.json(foundShopStyles);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }
}

module.exports = ShopController;
