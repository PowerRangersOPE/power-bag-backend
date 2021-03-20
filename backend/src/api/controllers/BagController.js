const Bag = require("../models/Bag");

class bagController {
  async index(req, res) {
    try {
      const bag = await Bag.findAll();
      return res.json(bag);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }

  async show(req, res) {
    try {
      const bag = await Bag.findByPk(req.params.id);
      return res.json(bag);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }

  async store(req, res) {
    try {
      const bag = await Bag.create(req.body);
      return res.json(bag);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }

  async update(req, res) {
    try {
      let bag = await Bag.findByPk(req.params.id);
      bag = await bag.update(req.body);
      return res.json(bag);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }

  async destroy(req, res) {
    try {
      let bag = await Bag.findByPk(req.params.id);
      bag = await bag.destroy(req.body);
      return res.json(bag);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }
}

module.exports = bagController;
