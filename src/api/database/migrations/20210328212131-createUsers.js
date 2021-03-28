module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.createTable('cliente', {
        id: {
          type: Sequelize.UUID,
          primaryKey: true,
        },
        nome: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        email: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        cpf: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        identificacao: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        tel_cel1: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        tel_cel2: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        dat_nasc: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        status: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        pontuacao: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        created_at: {
          type: Sequelize.DATE,
          allowNull: false,
        },
        updated_at: {
          type: Sequelize.DATE,
          allowNull: false,
        },
      });
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable('cliente');
  }
};
