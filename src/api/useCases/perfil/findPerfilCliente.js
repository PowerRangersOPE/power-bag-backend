class findPerfilCliente {
    constructor({ modelPerfil }) {
      this.perfil = modelPerfil;
    }
  
    async execute(clienteID) {
      try {
        const foundPerfil = await this.perfil.findOne({
          where: { cliente_id: clienteID },
        });
  
        if (!foundPerfil) throw new Error('perfil not found');
  
        return foundPerfil;
      } catch (error) {
        throw error;
      }
    }
  }
  
  module.exports = findPerfilCliente;
  