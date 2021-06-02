const getItensBagUseCase = require('../useCases/itensBag');

const { listItensBag } = getItensBagUseCase();

class itensBagController {
  async index(req, res) {
    try {
      const { bagid: bagID } = req.params;
      const listItens = await listItensBag.execute({ bagID });
      return res.json(listItens);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }
}

module.exports = itensBagController;
