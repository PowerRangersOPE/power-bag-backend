module.exports = {
    up: async (queryInterface, Sequelize) => {
      await queryInterface.addColumn('bag', 'produtos_pdf', {
          type: Sequelize.STRING,
          allowNull: false,
          default: false,
      });
    },

    down: async (queryInterface) => {
      await queryInterface.removeColumn('bag', 'produtos_pdf');
    }
  };
