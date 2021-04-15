const { Router } = require('express');
const verifyToken = require('../../api/middlewares/verifyToken');

const ProdutoController = require('../../api/controllers/ProdutoController');

const produtoController = new ProdutoController();

const router = new Router();

router.get('/produto', verifyToken, produtoController.index);
router.get('/produto/:id', verifyToken, produtoController.show);
router.post('/produto', verifyToken, produtoController.store);
router.put('/produto/:id', verifyToken, produtoController.update);
router.delete('/produto/:id', verifyToken, produtoController.destroy);

module.exports = router;
