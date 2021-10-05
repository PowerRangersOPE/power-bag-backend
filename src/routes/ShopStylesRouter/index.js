const { Router } = require('express');

const ShopStylesController = require('../../api/controllers/ShopStylesController');

const shopStylesController = new ShopStylesController();

const router = Router();

router.post('/shop/styles/:shopId', shopStylesController.store);

module.exports = router;
