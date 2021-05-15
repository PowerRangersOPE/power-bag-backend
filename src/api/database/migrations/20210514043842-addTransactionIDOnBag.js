module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('bag', 'transaction_id', {
        type: Sequelize.STRING,
        allowNull: true,
    });
  },

  down: async (queryInterface) => {
    await queryInterface.removeColumn('bag', 'transaction_id');
  }
};
