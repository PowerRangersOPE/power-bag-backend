module.exports = {
  up: async (queryInterface) => {
    await queryInterface.changeColumn('bag', 'valor', {
        type: 'FLOAT USING valor::double precision',
        allowNull: true
      });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn('bag', 'valor', {
        type: Sequelize.STRING,
        allowNull: false
      });
  }
};
