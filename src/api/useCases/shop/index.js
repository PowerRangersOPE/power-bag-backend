const Shop = require('../../models/Shop');

const CreateShop = require('./createShopUseCase');
const FindShop = require('./findShopUseCase');

module.exports = (modelShop = Shop) => ({
  createShop: new CreateShop({ modelShop }),
  findShop: new FindShop({ modelShop }),
});
