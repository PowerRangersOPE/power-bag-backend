const { Router } = require('express');
const verifyToken = require('../../api/middlewares/verifyToken');
const { CardSchema } = require('./schema');

const CartaoController = require('../../api/controllers/CartaoController');

const cartaoController = new CartaoController();

const router = Router();

// router.get('/cartao', verifyToken, cartaoController.index);
// router.get('/cartao/:id', verifyToken, cartaoController.show);
router.post('/cartao', verifyToken, CardSchema, cartaoController.store);
// router.put('/cartao/:id', verifyToken, cartaoController.update);
// router.delete('/cartao/:id', verifyToken, cartaoController.destroy);

module.exports = router;
