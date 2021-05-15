const getEnderecoUseCase = require('../useCases/endereco');

const {
  findEnderecoCliente,
  createEndereco,
  updateEndereco,
} = getEnderecoUseCase();

class EnderecoController {
  async show(req, res) {
    try {
      const endereco = await findEnderecoCliente.execute(req.cliente.id);
      return res.json(endereco);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }

  async store(req, res) {
    try {
      const endereco = await createEndereco.execute(req.cliente.id, req.body);
      return res.json(endereco);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }

  async update(req, res) {
    try {
      const endereco = await updateEndereco.execute(req.cliente.id, req.body);
      return res.json(endereco);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }
}

module.exports = EnderecoController;
