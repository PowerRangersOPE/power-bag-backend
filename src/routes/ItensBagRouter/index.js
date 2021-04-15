const { Router } = require('express');
const verifyToken = require('../../api/middlewares/verifyToken');

const ItensBagController = require('../../api/controllers/ItensBagController');

const itensBagController = new ItensBagController();

const router = new Router();

router.get('/itensBag', verifyToken, itensBagController.index);
router.get('/itensBag/:id', verifyToken, itensBagController.show);
router.post('/itensBag', verifyToken, itensBagController.store);
router.put('/itensBag/:id', verifyToken, itensBagController.update);
router.delete('/itensBag/:id', verifyToken, itensBagController.destroy);

module.exports = router;
