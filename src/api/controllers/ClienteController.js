const Cliente = require('../models/Cliente');

class ClienteController {
  async index(req, res) {
    try {
      const cliente = await Cliente.findAll();
      return res.json(cliente);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }

  async show(req, res) {
    try {
      const cliente = await Cliente.findByPk(req.params.id);
      return res.json(cliente);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }

  async store(req, res) {
    try {
      const cliente = await Cliente.create(req.body);
      return res.json(cliente);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }

  async update(req, res) {
    try {
      let cliente = await Cliente.findByPk(req.params.id);
      cliente = await cliente.update(req.body);
      return res.json(cliente);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }

  async destroy(req, res) {
    try {
      let cliente = await Cliente.findByPk(req.params.id);
      cliente = await cliente.destroy(req.body);
      return res.json(cliente);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }
}

module.exports = ClienteController;
