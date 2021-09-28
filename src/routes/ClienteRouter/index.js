const { Router } = require('express');
const { createSchema, createUpdateSchema } = require('./schema');
const verifyToken = require('../../api/middlewares/verifyToken');
const verifyCreateClient = require('../../api/middlewares/verifyCreateClient');
const generateFakeClient = require('../../api/helpers/generateFakeClient');
const findActiveBag = require('../../api/middlewares/verifyExistenceBag');

const ClienteController = require('../../api/controllers/ClienteController');

const clienteController = new ClienteController();

const router = new Router();

router.get('/cliente', clienteController.index);
router.get('/cliente/validate', verifyToken, clienteController.validateForBag);
router.get('/cliente/:id', clienteController.show);
router.put('/cliente/:id', createUpdateSchema, clienteController.update);
router.post(
  '/cliente',
  createSchema,
  verifyCreateClient,
  clienteController.store
);
router.delete(
  '/cliente/:id',
  verifyToken,
  findActiveBag,
  generateFakeClient,
  clienteController.destroy
);

module.exports = router;
