const Perfil = require('../../models/Perfil');

const FindPerfilCliente = require('./findPerfilCliente');
const CreatePerfil = require('./createPerfil');
const UpdatePerfil = require('./updatePerfil');

module.exports = (modelPerfil = Perfil) => ({
  findPerfilCliente: new FindPerfilCliente({ modelPerfil }),
  createPerfil: new CreatePerfil({ modelPerfil }),
  updatePerfil: new UpdatePerfil({ modelPerfil }),
});
