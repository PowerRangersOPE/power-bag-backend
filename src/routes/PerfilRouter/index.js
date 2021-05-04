const { Router } = require('express');
const verifyToken = require('../../api/middlewares/verifyToken');

const PerfilController = require('../../api/controllers/PerfilController');

const perfilController = new PerfilController();

const router = new Router();

router.get('/perfil', verifyToken, perfilController.show);
router.post('/perfil', verifyToken, perfilController.store);
router.put('/perfil', verifyToken, perfilController.update);

/**
 * transformar o cliente_id em unique
 */


module.exports = router;
