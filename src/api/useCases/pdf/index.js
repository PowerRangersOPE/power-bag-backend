const CreatePDFUseCase = require('./createPDFUseCase');

module.exports = () => ({
  createPDFUseCase: new CreatePDFUseCase(),
});
