const Cartao = require('../../models/Cartao');

const { pagarme } = require('../../services')();

const CreateCartao = require('./createCartao');


module.exports = (modelCartao = Cartao) => ({
  createCartao: new CreateCartao({ modelCartao, pagarme }),
});
