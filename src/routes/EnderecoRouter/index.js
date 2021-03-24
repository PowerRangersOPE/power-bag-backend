const { Router } = require('express');

const EnderecoController = require('../../api/controllers/EnderecoController');

const enderecoController = new EnderecoController();

const router = new Router();

router.get('/endereco', enderecoController.index);
router.get('/endereco/:id', enderecoController.show);
router.post('/endereco', enderecoController.store);
router.put('/endereco/:id', enderecoController.update);
router.delete('/endereco/:id', enderecoController.destroy);

module.exports = router;
