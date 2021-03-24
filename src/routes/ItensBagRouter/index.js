const { Router } = require('express');

const ItensBagController = require('../../api/controllers/ItensBagController');

const itensBagController = new ItensBagController();

const router = new Router();

router.get('/itensBag', itensBagController.index);
router.get('/itensBag/:id', itensBagController.show);
router.post('/itensBag', itensBagController.store);
router.put('/itensBag/:id', itensBagController.update);
router.delete('/itensBag/:id', itensBagController.destroy);

module.exports = router;
