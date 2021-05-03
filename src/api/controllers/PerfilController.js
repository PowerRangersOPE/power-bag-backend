const Perfil = require('../models/Perfil');

class PerfilController {

  async show(req, res) {
    try {
      const perfil = await Perfil.findByPk(req.params.id);
      return res.json(perfil);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }

//   async store(req, res) {
//     try {
//       console.log(
//         '(PerfilController) Alterar cadastro: cor, necessidade, tipos'
//       );
//       const perfil = await Perfil.create(req.body);
//       return res.json(perfil);
//     } catch (err) {
//       return res.status(400).json({ error: err.message });
//     }
//   }

//   async update(req, res) {
//     try {
//       let perfil = await Perfil.findByPk(req.params.id);
//       perfil = await perfil.update(req.body);
//       return res.json(perfil);
//     } catch (err) {
//       return res.status(400).json({ error: err.message });
//     }
//   }
}

module.exports = PerfilController;
