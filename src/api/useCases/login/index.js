const ValidateLogin = require('./validateLogin');

const { findClienteByEmail } = require('../cliente')();

module.exports = () => ({
  validateLogin: new ValidateLogin({
    findClienteByEmail,
  }),
});
