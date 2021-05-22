const ValidateLogin = require('./validateLogin');

const { findClienteByCPF} = require('../cliente')();

module.exports = () => ({
  validateLogin: new ValidateLogin({
    findClienteByCPF,
  }),
});
