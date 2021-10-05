const ShopStyles = require('../../models/ShopStyles');

const CreateShopStyles = require('./createShopStylesUseCase');

module.exports = (modelShopStyles = ShopStyles) => ({
  createShopStyles: new CreateShopStyles(modelShopStyles),
});
