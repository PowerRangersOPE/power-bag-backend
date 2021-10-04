const { Router } = require('express');
// const { CardSchema } = require('./schema');

const ShopController = require('../../api/controllers/ShopController');
const { createShopSchema } = require('./schema');

const shopController = new ShopController();

const router = Router();

router.post('/shop', createShopSchema, shopController.store);

module.exports = router;
