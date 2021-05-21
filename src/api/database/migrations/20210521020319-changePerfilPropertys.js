module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn('perfil', 'frequencia', {
        type: Sequelize.STRING,
        allowNull: true
      });
    await queryInterface.changeColumn('perfil', 'n_quero', {
        type: Sequelize.STRING,
        allowNull: true
      });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn('perfil', 'frequencia', {
        type: Sequelize.STRING,
        allowNull: false
      });
    await queryInterface.changeColumn('perfil', 'n_quero', {
        type: Sequelize.STRING,
        allowNull: false
      });
  }
};
