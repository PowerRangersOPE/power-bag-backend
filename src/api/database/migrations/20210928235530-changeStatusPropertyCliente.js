module.exports = {
    up: async (queryInterface, Sequelize) => {
       await queryInterface.removeColumn('cliente', 'status');
       await queryInterface.addColumn('cliente', 'status', {
            type: Sequelize.BOOLEAN,
            allowNull: true,
            default: true,
        });
    },

    down: async (queryInterface, Sequelize) => {
       await queryInterface.removeColumn('cliente', 'status');
       await queryInterface.addColumn('cliente', 'status', {
          type: Sequelize.STRING,
          allowNull: true
        });
    }
  };
