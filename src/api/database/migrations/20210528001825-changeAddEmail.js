module.exports = {
    up: async (queryInterface, Sequelize) => {
      await queryInterface.addColumn('cliente', 'email', {
        type: Sequelize.STRING,
        allowNull: true,
      });
    },

    down: async (queryInterface) => {
      await queryInterface.removeColumn('cliente', 'email');
    }
  };
