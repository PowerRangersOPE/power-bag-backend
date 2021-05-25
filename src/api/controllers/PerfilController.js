const getPerfilUseCase = require('../useCases/perfil');

const { findPerfilCliente, createPerfil, updatePerfil } = getPerfilUseCase();

class PerfilController {
  async show(req, res) {
    try {
      const perfil = await findPerfilCliente.execute(req.cliente.id);
      return res.json(perfil);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }

  async store(req, res) {
    try {
      const perfil = await createPerfil.execute(req.cliente.id, req.body);
      return res.json(perfil);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }

  async update(req, res) {
    try {
      const perfil = await updatePerfil.execute(req.cliente.id, req.body);
      return res.json(perfil);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }
}

module.exports = PerfilController;
