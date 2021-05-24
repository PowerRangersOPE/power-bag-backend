module.exports = {
    up: async (queryInterface, Sequelize) => {
      await queryInterface.addColumn('bag', 'valor_original', {
        type: Sequelize.FLOAT,
        allowNull: true
      });
    },

    down: async (queryInterface) => {
      await queryInterface.removeColumn('bag', 'valor_original');
    }
  };
