const { Router } = require('express')

const TestController = require('./api/controllers/TestController')
const CartaoController = require('./api/controllers/CartaoController')
const EnderecoController = require('./api/controllers/EnderecoController')
const PerfilController = require('./api/controllers/PerfilController')
const ClienteController = require('./api/controllers/ClienteController')

const testController = new TestController();
const cartaoController = new CartaoController();
const enderecoController = new EnderecoController();
const perfilController = new PerfilController();
const clienteController = new ClienteController();

const router = Router()

router.post('/test', testController.create)
router.get('/test', testController.show)

router.get('/cartao', cartaoController.index);
router.get('/cartao/:id', cartaoController.show);
router.post('/cartao', cartaoController.store);
router.put('/cartao/:id', cartaoController.update);
router.delete('/cartao/:id', cartaoController.destroy);

router.get('/endereco', enderecoController.index);
router.get('/endereco/:id', enderecoController.show);
router.post('/endereco', enderecoController.store);
router.put('/endereco/:id', enderecoController.update);
router.delete('/endereco/:id', enderecoController.destroy);

router.get('/perfil', perfilController.index);
router.get('/perfil/:id', perfilController.show);
router.post('/perfil', perfilController.store);
router.put('/perfil/:id', perfilController.update);
router.delete('/perfil/:id', perfilController.destroy);

router.get('/cliente', clienteController.index);
router.get('/cliente/:id', clienteController.show);
router.post('/cliente', clienteController.store);
router.put('/cliente/:id', clienteController.update);
router.delete('/cliente/:id', clienteController.destroy);

module.exports = router