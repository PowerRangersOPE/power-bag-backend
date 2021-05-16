module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('cliente', 'adm', {
        type: Sequelize.BOOLEAN,
        allowNull: true,
        default: false,
    });
  },

  down: async (queryInterface) => {
    await queryInterface.removeColumn('cliente', 'adm');
  }
};
