const { Router } = require('express');

const ItensBagController = require('../../api/controllers/ItensBagController');

const itensBagController = new ItensBagController();

const router = new Router();

router.get('/bag/:bagid/itens', itensBagController.index);

module.exports = router;
