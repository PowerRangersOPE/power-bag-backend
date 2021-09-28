module.exports = {
    up: async (queryInterface, Sequelize) => {
       await queryInterface.changeColumn('cliente', 'status', {
            type: Sequelize.BOOLEAN,
            allowNull: true,
            default: true,
        });
    },

    down: async (queryInterface, Sequelize) => {
       await queryInterface.changeColumn('cliente', 'status', {
          type: Sequelize.STRING,
          allowNull: true,
          unique: false
        });
    }
  };
