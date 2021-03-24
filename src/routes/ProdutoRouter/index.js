const { Router } = require('express');

const ProdutoController = require('../../api/controllers/ProdutoController');

const produtoController = new ProdutoController();

const router = new Router();

router.get('/produto', produtoController.index);
router.get('/produto/:id', produtoController.show);
router.post('/produto', produtoController.store);
router.put('/produto/:id', produtoController.update);
router.delete('/produto/:id', produtoController.destroy);

module.exports = router;
