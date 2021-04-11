const SendEmail = require('./sendEmail');

module.exports = () => ({
  sendEmail: new SendEmail(),
});
