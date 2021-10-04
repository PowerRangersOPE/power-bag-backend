// const Shop = require('../../models/Shop');

const CreateShop = require('./createShopUseCase');

module.exports = (modelShop = {}) => ({
  createShop: new CreateShop({ modelShop }),
});
