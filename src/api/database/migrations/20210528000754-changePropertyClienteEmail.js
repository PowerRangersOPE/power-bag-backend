module.exports = {
    up: async (queryInterface) => {
       await queryInterface.removeColumn('cliente', 'email');
    },

    down: async (queryInterface, Sequelize) => {
       await queryInterface.addColumn('cliente', 'email', {
          type: Sequelize.STRING,
          allowNull: true,
        });
    }
  };
