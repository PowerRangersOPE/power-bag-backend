const { Router } = require('express');

const ClienteController = require('../../api/controllers/ClienteController');
const clienteController = new ClienteController();

const router = new Router();

router.get("/cliente", clienteController.index);
router.get("/cliente/:id", clienteController.show);
router.post("/cliente", clienteController.store);
router.put("/cliente/:id", clienteController.update);
router.delete("/cliente/:id", clienteController.destroy);

module.exports = router;