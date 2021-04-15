const getLoginUseCase = require('../useCases/login');

const { validateLogin } = getLoginUseCase();

class LoginController {
  async store(req, res) {
    try {
      const cliente = await validateLogin.execute(req.body);
      return res.json(cliente);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }
}

module.exports = LoginController;
