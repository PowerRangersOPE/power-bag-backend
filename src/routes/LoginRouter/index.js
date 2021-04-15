const { Router } = require('express');

const LoginController = require('../../api/controllers/LoginController');

const loginController = new LoginController();

const router = new Router();
router.post('/login', loginController.store);

module.exports = router;
