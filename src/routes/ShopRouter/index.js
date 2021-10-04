const { Router } = require('express');
// const { CardSchema } = require('./schema');

const ShopController = require('../../api/controllers/ShopController');

const shopController = new ShopController();

const router = Router();

router.post('/cartao', shopController.store);

module.exports = router;
