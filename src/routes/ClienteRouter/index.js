const { Router } = require('express');
const { createSchema } = require('./schema');
const verifyToken = require('../../api/middlewares/verifyToken');
const verifyCreateClient = require('../../api/middlewares/verifyCreateClient');

const ClienteController = require('../../api/controllers/ClienteController');

const clienteController = new ClienteController();

const router = new Router();

router.get('/cliente', clienteController.index);
router.get('/cliente/validate', verifyToken, clienteController.validateForBag);
router.get('/cliente/:id', clienteController.show);
router.post(
  '/cliente',
  createSchema,
  verifyCreateClient,
  clienteController.store
);
router.put('/cliente/:id', clienteController.update);
router.delete('/cliente/:id', clienteController.destroy);

module.exports = router;
