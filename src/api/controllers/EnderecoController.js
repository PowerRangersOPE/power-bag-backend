const Endereco = require('../models/Endereco')

class EnderecoController {
  async index(req, res) {
    try {
      const endereco = await Endereco.findAll();
      return res.json(endereco);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }

  async show(req, res) {
    try {
      const endereco = await Endereco.findByPk(req.params.id);
      return res.json(endereco);
    }catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }

  async store(req, res) {
    try {
      const endereco = await Endereco.create(req.body);
      return res.json(endereco);
    }catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }

  async update(req, res) {
    try {
      let endereco = await Endereco.findByPk(req.params.id);
      endereco = await endereco.update(req.body);
      return res.json(endereco);
    }catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }

  async destroy(req, res) {
    try {
      let endereco = await Endereco.findByPk(req.params.id);
      endereco = await endereco.destroy(req.body);
      return res.json(endereco);
    }catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }
}

module.exports = EnderecoController