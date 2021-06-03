module.exports = {
    up: async (queryInterface) => {
      queryInterface.removeColumn('perfil', 'frequencia');
    },

    down: async (queryInterface, Sequelize) => {
      queryInterface.addColumn('perfil', 'frequencia', {
        type: Sequelize.STRING,
      });
    },
  };
