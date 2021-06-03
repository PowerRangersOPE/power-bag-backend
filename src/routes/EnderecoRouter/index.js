const { Router } = require('express');
const verifyToken = require('../../api/middlewares/verifyToken');
const { EnderecoSchema } = require('./schema');

const EnderecoController = require('../../api/controllers/EnderecoController');

const enderecoController = new EnderecoController();

const router = new Router();

router.get('/endereco', verifyToken, enderecoController.show);
router.post('/endereco', verifyToken, EnderecoSchema, enderecoController.store);
router.put('/endereco', verifyToken, EnderecoSchema, enderecoController.update);

module.exports = router;
