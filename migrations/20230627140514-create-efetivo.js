'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */

    await queryInterface.createTable('efetivo', { 
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      id_graduacao: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'graduacao',
            
          },
          key: 'id'
        },
        allowNull: true
      },
      nome_completo: {
        type: Sequelize.STRING(50),
        allowNull: false,
      },
      nome_guerra: {
        type: Sequelize.STRING(30),
        allowNull: false,
      },
      foto: {
        type: Sequelize.BLOB,
        allowNull: true,
      },
      dependente: {
        type: Sequelize.BOOLEAN,
        allowNull: true,
      },
      id_alerta: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'alerta',
            
          },
          key: 'id'
        },
        allowNull: false
      },
      id_unidade: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'unidade',
            
          },
          key: 'id'
        },
        allowNull: false
      },
      qrcode_efetivo: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'qrcode',
            
          },
          key: 'qrcode'
        },
        allowNull: false
      },
      
      email: {
        type: Sequelize.STRING(40),
        allowNull: false,
      },
      ativo_efetivo: {
        type: Sequelize.BOOLEAN,
      }, 
      sinc_efetivo: {
        type: Sequelize.BIGINT,
        allowNull: true,
      },
      created_at: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now'),
        allowNull: false
      },
      updated_at: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now'),
        allowNull: false
      },
    });

  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.dropTable('efetivo');
  }
};
