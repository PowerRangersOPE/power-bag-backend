const { Router } = require('express');

const cartaoRouter = require('./CartaoRouter');
const clienteRouter = require('./ClienteRouter');
const enderecoRouter = require('./EnderecoRouter');
const itensBagRouter = require('./ItensBagRouter');
const produtoRouter = require('./ProdutoRouter');
const perfilRouter = require('./PerfilRouter');
const bagRouter = require('./BagRouter');
const loginRouter = require('./LoginRouter');
const pdfRouter = require('./PDFRouter');
const shopRouter = require('./ShopRouter');
const shopStylesRouter = require('./ShopStylesRouter');

const router = Router();

router.use(cartaoRouter);
router.use(clienteRouter);
router.use(enderecoRouter);
router.use(itensBagRouter);
router.use(produtoRouter);
router.use(perfilRouter);
router.use(bagRouter);
router.use(loginRouter);
router.use(pdfRouter);
router.use(shopRouter);
router.use(shopStylesRouter);

module.exports = router;
