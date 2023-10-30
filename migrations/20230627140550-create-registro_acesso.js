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
    await queryInterface.createTable('registro_acesso', { 
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      
      tipo: {
        type: Sequelize.STRING(20),
        allowNull: false,
      },
      data: {
        type: Sequelize.DATEONLY,
        allowNull: false,
        defaultValue: Sequelize.NOW
      },
      hora: {
        type: Sequelize.TIME,
        allowNull: false,
        defaultValue: Sequelize.NOW
      },
      
      id_posto: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'posto',
            
          },
          key: 'id'
        },
        allowNull: false
      },

      qrcode: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'qrcode',
            
          },
          key: 'qrcode'
        },
        allowNull: false
      },
      id_visitante: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'visitante',
            
          },
          key: 'id'
        },
        allowNull: true
      },
      id_dependente: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'dependente',
            
          },
          key: 'id'
        },
        allowNull: true
      },
      id_veiculo: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'veiculo',
            
          },
          key: 'id'
        },
        allowNull: true
      },
      autorizador: {
        type: Sequelize.STRING(30),
        allowNull: true,
      },
      
      sinc_acesso: {
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
    await queryInterface.dropTable('registro_acesso');
  }
};
