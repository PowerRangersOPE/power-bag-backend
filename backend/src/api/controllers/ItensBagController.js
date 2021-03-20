const ItensBag = require("../models/ItensBag");

class itensBagController {
  async index(req, res) {
    try {
      const itensBag = await ItensBag.findAll();
      return res.json(itensBag);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }

  async show(req, res) {
    try {
      const itensBag = await ItensBag.findByPk(req.params.id);
      return res.json(itensBag);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }

  async store(req, res) {
    try {
      const itensBag = await ItensBag.create(req.body);
      return res.json(itensBag);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }

  async update(req, res) {
    try {
      let itensBag = await ItensBag.findByPk(req.params.id);
      itensBag = await itensBag.update(req.body);
      return res.json(itensBag);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }

  async destroy(req, res) {
    try {
      let itensBag = await ItensBag.findByPk(req.params.id);
      itensBag = await itensBag.destroy(req.body);
      return res.json(bitensBagg);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }
}

module.exports = itensBagController;
