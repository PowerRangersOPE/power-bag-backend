const { Router } = require('express');

const PerfilController = require('../../api/controllers/PerfilController');

const perfilController = new PerfilController();

const router = new Router();

router.get('/perfil', perfilController.index);
router.get('/perfil/:id', perfilController.show);
router.post('/perfil', perfilController.store);
router.put('/perfil/:id', perfilController.update);
router.delete('/perfil/:id', perfilController.destroy);

module.exports = router;
