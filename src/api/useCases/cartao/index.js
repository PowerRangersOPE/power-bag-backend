const Cartao = require('../../models/Cartao');

const CreateCartao = require('./createCartao');


module.exports = (modelPerfil = Cartao) => ({
  createCartao: new CreateCartao({ modelPerfil }),
});
