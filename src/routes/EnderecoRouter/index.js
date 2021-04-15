const { Router } = require('express');
const verifyToken = require('../../api/middlewares/verifyToken');

const EnderecoController = require('../../api/controllers/EnderecoController');

const enderecoController = new EnderecoController();

const router = new Router();

router.get('/endereco', verifyToken, enderecoController.index);
router.get('/endereco/:id', verifyToken, enderecoController.show);
router.post('/endereco', verifyToken, enderecoController.store);
router.put('/endereco/:id', verifyToken, enderecoController.update);
router.delete('/endereco/:id', verifyToken, enderecoController.destroy);

module.exports = router;
