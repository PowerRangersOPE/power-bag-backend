module.exports = {
    up: async (queryInterface, Sequelize) => {
      queryInterface.createTable('shops', {
          id: {
              type: Sequelize.UUID,
              primaryKey: true,
          },
          cnpj: {
            type: Sequelize.STRING,
            allowNull: false,
          },
          status: {
            type: Sequelize.BOOLEAN,
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
      await queryInterface.dropTable('shops');
    }
  };
