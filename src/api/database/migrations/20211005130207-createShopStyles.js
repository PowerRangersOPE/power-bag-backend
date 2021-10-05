module.exports = {
  up: async (queryInterface, Sequelize) => {
     await queryInterface.createTable('shopStyles', {
        id: {
            type: Sequelize.UUID,
            primaryKey: true,
        },
         home: {
             type: Sequelize.JSON,
             allowNull: false,
         },
         profile: {
            type: Sequelize.JSON,
            allowNull: false,
        },
        shop_id: {
          type: Sequelize.UUID,
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE',
          allowNull: false,
          references: { // Shops belongsTo Style 1:1
            model: 'shops',
            key: 'id'
          }
        },
        created_at: {
          type: Sequelize.DATE,
          allowNull: false
        },
        updated_at: {
          type: Sequelize.DATE,
          allowNull: false
        }

      });
  },

  down: async (queryInterface) => {
     await queryInterface.dropTable('shopStyles');
  }
};
