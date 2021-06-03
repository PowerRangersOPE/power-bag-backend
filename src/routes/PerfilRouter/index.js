const { Router } = require('express');
const verifyToken = require('../../api/middlewares/verifyToken');
const { PerfilSchema } = require('./schema');

const PerfilController = require('../../api/controllers/PerfilController');

const perfilController = new PerfilController();

const router = new Router();

router.get('/perfil', verifyToken, perfilController.show);
router.post('/perfil', verifyToken, PerfilSchema, perfilController.store);
router.put('/perfil', verifyToken, PerfilSchema, perfilController.update);

module.exports = router;
