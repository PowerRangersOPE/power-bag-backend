class createPerfil {
    constructor({ modelPerfil }) {
      this.perfil = modelPerfil;
    }
  
    async execute(clienteID, perfil) {
      try {

        const body = {
            cliente_id: clienteID, ...perfil
       };

        const foundPerfil = await this.perfil.findOne({
            where: { cliente_id: clienteID },
        });

        if (foundPerfil) {
            const newPerfil = await this.perfil.update(body, {
                where: { cliente_id: clienteID },
                returning: true,
              })

            if (!newPerfil) throw new Error('Update perfil got error');

            const [, [updatedPerfil]] = newPerfil;

            return { updated: true, perfil: updatedPerfil };
        };
  
        const createdPerfil = await this.perfil.create(body);
  
        if (!createdPerfil) throw new Error('Create perfil got error');
  
        return { created: true, perfil: createdPerfil };

      } catch (error) {
        throw error;
      }
    }
  }
  
  module.exports = createPerfil;
  