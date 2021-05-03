const getEnderecoUseCase = require('../useCases/endereco');

const { findEnderecoCliente } = getEnderecoUseCase();

class EnderecoController {
  async show(req, res) {
    try {
      const endereco = await findEnderecoCliente.execute(req.params.id);
      return res.json(endereco);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }

  //   async store(req, res) {
  //     try {
  //       const endereco = await Endereco.create(req.body);
  //       return res.json(endereco);
  //     } catch (err) {
  //       return res.status(400).json({ error: err.message });
  //     }
  //   }

  //   async update(req, res) {
  //     try {
  //       let endereco = await Endereco.findByPk(req.params.id);
  //       endereco = await endereco.update(req.body);
  //       return res.json(endereco);
  //     } catch (err) {
  //       return res.status(400).json({ error: err.message });
  //     }
  //   }
}

module.exports = EnderecoController;
