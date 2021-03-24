const Cartao = require('../models/Cartao');

class CartaoController {
  async index(req, res) {
    try {
      const cartao = await Cartao.findAll();
      return res.json(cartao);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }

  async show(req, res) {
    try {
      const cartao = await Cartao.findByPk(req.params.id);
      return res.json(cartao);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }

  async store(req, res) {
    try {
      const cartao = await Cartao.create(req.body);
      return res.json(cartao);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }

  async update(req, res) {
    try {
      let cartao = await Cartao.findByPk(req.params.id);
      cartao = await cartao.update(req.body);
      return res.json(cartao);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }

  async destroy(req, res) {
    try {
      let cartao = await Cartao.findByPk(req.params.id);
      cartao = await cartao.destroy(req.body);
      return res.json(cartao);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }
}

module.exports = CartaoController;
