const Perfil = require('../models/Perfil');

class PerfilController {
  async index(req, res) {
    try {
      const perfil = await Perfil.findAll();
      return res.json(perfil);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }

  async show(req, res) {
    try {
      const perfil = await Perfil.findByPk(req.params.id);
      return res.json(perfil);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }

  async store(req, res) {
    try {
      const perfil = await Perfil.create(req.body);
      return res.json(perfil);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }

  async update(req, res) {
    try {
      let perfil = await Perfil.findByPk(req.params.id);
      perfil = await perfil.update(req.body);
      return res.json(perfil);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }

  async destroy(req, res) {
    try {
      let perfil = await Perfil.findByPk(req.params.id);
      perfil = await perfil.destroy(req.body);
      return res.json(perfil);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }
}

module.exports = PerfilController;
