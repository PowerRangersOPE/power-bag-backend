const { Router } = require('express');

const ShopController = require('../../api/controllers/ShopController');
const { createShopSchema } = require('./schema');

const shopController = new ShopController();

const router = Router();

router.post('/shop', createShopSchema, shopController.store);
router.get('/shop/:shopId', shopController.show);

module.exports = router;
