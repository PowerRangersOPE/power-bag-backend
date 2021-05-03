class createPerfil {
    constructor({ modelPerfil }) {
      this.perfil = modelPerfil;
    }
  
    async execute(clienteID, newPerfil) {
      try {
          const updatedPerfil = await this.perfil.update(newPerfil, {
            where: { cliente_id: clienteID },
            returning: true,
          })
              
        if (!updatedPerfil) throw new Error('Update perfil got error');

        const [, [perfil]] = updatedPerfil;
  
        return { created: true, perfil };
      } catch (error) {
        throw error;
      }
    }
  }
  
  module.exports = createPerfil;
  