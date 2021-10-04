const Shop = require('../../models/Shop');

const CreateShop = require('./createShopUseCase');

module.exports = (modelShop = Shop) => ({
  createShop: new CreateShop({ modelShop }),
});
