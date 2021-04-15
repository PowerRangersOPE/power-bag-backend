const ValidateLogin = require('./validateLogin');

const { FindClienteByEmail } = require('../cliente')();

module.exports = () => ({
  validateLogin: new ValidateLogin({
    FindClienteByEmail,
  }),
});
