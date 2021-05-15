module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('cliente', 'adm', {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        default: false,
    });
  },

  down: async (queryInterface) => {
    await queryInterface.removeColumn('cliente', 'adm');
  }
};
