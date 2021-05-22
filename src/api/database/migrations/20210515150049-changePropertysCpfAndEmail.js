'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */

     await queryInterface.changeColumn('cliente', 'email', {
        type: Sequelize.STRING,
        allowNull: true,
        unique: false
      });
      await queryInterface.changeColumn('cliente', 'cpf', {
        type: Sequelize.STRING,
        allowNull: true,
        unique: true
      });
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
     await queryInterface.changeColumn('cliente', 'email', {
        type: Sequelize.STRING,
        allowNull: true,
        unique: true
      });
      await queryInterface.changeColumn('cliente', 'cpf', {
        type: Sequelize.STRING,
        allowNull: true,
        unique: false
      });
  }
};
