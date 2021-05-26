module.exports = {
    up: async (queryInterface, Sequelize) => {
       await queryInterface.changeColumn('cliente', 'email', {
          type: Sequelize.STRING,
          allowNull: true,
          unique: false
        });
        await queryInterface.changeColumn('cliente', 'cpf', {
          type: Sequelize.STRING,
          allowNull: true,
          unique: true
        });
    },

    down: async (queryInterface, Sequelize) => {
       await queryInterface.changeColumn('cliente', 'email', {
          type: Sequelize.STRING,
          allowNull: true,
          unique: true
        });
        await queryInterface.changeColumn('cliente', 'cpf', {
          type: Sequelize.STRING,
          allowNull: true,
          unique: false
        });
    }
  };
