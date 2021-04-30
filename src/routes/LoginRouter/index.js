const { Router } = require('express');
const { createSessionSchema } = require('./schema');

const LoginController = require('../../api/controllers/LoginController');

const loginController = new LoginController();

const router = new Router();
router.post('/login', createSessionSchema, loginController.store);

module.exports = router;
