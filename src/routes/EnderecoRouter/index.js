const { Router } = require('express');
const verifyToken = require('../../api/middlewares/verifyToken');

const EnderecoController = require('../../api/controllers/EnderecoController');

const enderecoController = new EnderecoController();

const router = new Router();

router.get('/endereco', verifyToken, enderecoController.show);
router.post('/endereco', verifyToken, enderecoController.store);
router.put('/endereco', verifyToken, enderecoController.update);

module.exports = router;
