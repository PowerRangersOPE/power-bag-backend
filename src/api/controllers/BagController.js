const getBagUseCase = require('../useCases/bag');

const { createBag, findBag, updateBag, findAllBags } = getBagUseCase();

class bagController {
  async index(req, res) {
    try {
      const bag = await findAllBags.execute();
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
      const bagId = await updateBag.execute(req.body);
      return res.json(bagId);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }
}

module.exports = bagController;
