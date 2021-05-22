const getClienteUseCase = require('../useCases/cliente');


const {
  findCliente,
  findAllClientes,
  findClienteByCPF,
  verifyClienteByCPF,
  createCliente,
  updateCliente,
  deleteCliente,
  validateClienteForBag
} = getClienteUseCase();

class ClienteController {

  async index(req, res) {
    try {
      const cliente = await findAllClientes.execute();
      return res.json(cliente);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }
  
  async validateForBag(req, res) {
    try {
      const cliente = await validateClienteForBag.execute(req.cliente.id);
      return res.json(cliente);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }

  async show(req, res) {
    try {
      const cliente = await findCliente.execute(req.params.id);
      return res.json(cliente);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }

  async store(req, res) {
    try {
      const cliente = await createCliente.execute(req.body);
      return res.json(cliente);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }

  async update(req, res) {
    try {
      const [, cliente] = await updateCliente.execute(req.params.id, req.body);
      return res.status(201).json(cliente);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }

  async destroy(req, res) {
    try {
      const cliente = await deleteCliente.execute(req.params.id);
      return res.json(cliente);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }

async findCPF(req, res) {
    try {
      const cliente = await findClienteByCPF.execute(req.params.cpf);
      return res.json(cliente);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }

async verifyCPF(req, res) {
    try {
      const cliente = await verifyClienteByCPF.execute(req.params.cpf);
      return res.json(cliente);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }
}

module.exports = ClienteController;
