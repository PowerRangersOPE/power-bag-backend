module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('cliente', 'senha', {
        type: Sequelize.STRING,
        allowNull: false,
        default: false,
    });
  },

  down: async (queryInterface) => {
    await queryInterface.removeColumn('cliente', 'senha');
  }
};
