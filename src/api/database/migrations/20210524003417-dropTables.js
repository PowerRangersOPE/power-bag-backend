module.exports = {
  up: async (queryInterface) => {
    await queryInterface.dropTable('itensDevolvidos');
    await queryInterface.dropTable('itensComprados');
    await queryInterface.dropTable('itensAusentesDanificados');
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('itensDevolvidos', {
        id: {
            type: Sequelize.UUID,
            primaryKey: true,
        },
        itensBag_id: {
          type: Sequelize.UUID,
          onUpdate: 'CASCADE',
          onDelete: 'SET NULL',
          allowNull: false,
          references: {
            // hasMany 1:N
            model: 'itensBag',
            key: 'id',
          },
        },
        bag_id: {
            type: Sequelize.UUID,
            onUpdate: 'CASCADE',
            onDelete: 'SET NULL',
            allowNull: false,
            references: {
              // hasMany 1:N
              model: 'bag',
              key: 'id',
            },
          },
        created_at: {
          type: Sequelize.DATE,
          allowNull: false,
        },
        updated_at: {
          type: Sequelize.DATE,
          allowNull: false,
        },
      });
    await queryInterface.createTable('itensComprados', {
        id: {
            type: Sequelize.UUID,
            primaryKey: true,
          },
          itensBag_id: {
            type: Sequelize.UUID,
            onUpdate: 'CASCADE',
            onDelete: 'SET NULL',
            allowNull: false,
            references: {
              // hasMany 1:N
              model: 'itensBag',
              key: 'id',
            },
          },
          bag_id: {
              type: Sequelize.UUID,
              onUpdate: 'CASCADE',
              onDelete: 'SET NULL',
              allowNull: false,
              references: {
                // hasMany 1:N
                model: 'bag',
                key: 'id',
              },
            },
          created_at: {
            type: Sequelize.DATE,
            allowNull: false,
          },
          updated_at: {
            type: Sequelize.DATE,
            allowNull: false,
          },
      });
    await queryInterface.createTable('itensAusentesDanificados', {
        id: {
            type: Sequelize.UUID,
            primaryKey: true,
        },
        itensBag_id: {
          type: Sequelize.UUID,
          onUpdate: 'CASCADE',
          onDelete: 'SET NULL',
          allowNull: false,
          references: {
            // hasMany 1:N
            model: 'itensBag',
            key: 'id',
          },
        },
        bag_id: {
            type: Sequelize.UUID,
            onUpdate: 'CASCADE',
            onDelete: 'SET NULL',
            allowNull: false,
            references: {
              // hasMany 1:N
              model: 'bag',
              key: 'id',
            },
          },
        created_at: {
          type: Sequelize.DATE,
          allowNull: false,
        },
        updated_at: {
          type: Sequelize.DATE,
          allowNull: false,
        },
      });
  }
};
