const Bag = require('../models/Bag');

const getBagUseCase = require('../useCases/bag');

const { createBag, findBag } = getBagUseCase();

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
      const bag = await findBag.execute(req.cliente.id);
      return res.json(bag);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }

  async store(req, res) {
    try {
      const { cliente } = req;
      const bag = await createBag.execute(cliente);
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

}

module.exports = bagController;
