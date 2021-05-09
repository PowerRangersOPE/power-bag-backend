const { Router } = require('express');
const verifyToken = require('../../api/middlewares/verifyToken');
const verifyUpdateBag = require('../../api/middlewares/verifyUpdateBag');

const BagController = require('../../api/controllers/BagController');

const bagController = new BagController();

const router = new Router();

router.get('/bag', verifyToken, bagController.index);
router.get('/bag/detail', verifyToken, bagController.show);
router.post('/bag', verifyToken, bagController.store);

router.put('/bag', verifyToken, verifyUpdateBag, bagController.update);

/**
 * Criar rota de update (rota tem que ser logada)
 */

module.exports = router;
