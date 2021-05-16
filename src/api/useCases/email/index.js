const SendADMEmail = require('./sendADMEmail');
const SendClienteEmail = require('./sendClienteEmail');

module.exports = () => ({
  sendADMEmail: new SendADMEmail(),
  sendClienteEmail: new SendClienteEmail(),
});
