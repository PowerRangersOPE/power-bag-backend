const { Router } = require('express');

const cartaoRouter = require('./CartaoRouter');
const clienteRouter = require('./ClienteRouter');
const enderecoRouter = require('./EnderecoRouter');
const itensBagRouter = require('./ItensBagRouter');
const produtoRouter = require('./ProdutoRouter');
const perfilRouter = require('./PerfilRouter');
const bagRouter = require('./BagRouter');

const router = Router();

router.use(cartaoRouter);
router.use(clienteRouter);
router.use(enderecoRouter);
router.use(itensBagRouter);
router.use(produtoRouter);
router.use(perfilRouter);
router.use(bagRouter);

module.exports = router;
