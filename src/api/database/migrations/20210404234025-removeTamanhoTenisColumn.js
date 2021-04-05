module.exports = {
  up: async (queryInterface) => {
    queryInterface.removeColumn('perfil', 'tamanho_tenis');
  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.addColumn('perfil', 'tamanho_tenis', {
      type: Sequelize.STRING,
    });
  },
};
