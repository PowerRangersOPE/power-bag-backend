const Produto = require("../models/Produto");

class ProdutoController {
  async index(req, res) {
    try {
      const produto = await Produto.findAll();
      return res.json(produto);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }

  async show(req, res) {
    try {
      const produto = await Produto.findByPk(req.params.id);
      return res.json(produto);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }

  async store(req, res) {
    try {
      const produto = await Produto.create(req.body);
      return res.json(produto);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }

  async update(req, res) {
    try {
      let produto = await Produto.findByPk(req.params.id);
      produto = await produto.update(req.body);
      return res.json(produto);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }

  async destroy(req, res) {
    try {
      let produto = await Produto.findByPk(req.params.id);
      produto = await produto.destroy(req.body);
      return res.json(produto);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }
}

module.exports = ProdutoController;
