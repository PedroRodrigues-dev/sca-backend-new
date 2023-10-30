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
    await queryInterface.createTable('veiculo', { 
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      id_efetivo: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'efetivo',
            
          },
          key: 'id'
        },
        allowNull: true
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
      tipo: {
        type: Sequelize.STRING(20),
        allowNull: false,
      },
      cor_veiculo: {
        type: Sequelize.STRING(30),
        allowNull: false,
      },
      placa: {
        type: Sequelize.STRING(7),
        allowNull: true,
      },
      modelo: {
        type: Sequelize.STRING(40),
        allowNull: true,
      },
      renavam: {
        type: Sequelize.BIGINT(13),
        allowNull: false,
      },
      qrcode: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'qrcode',
            
          },
          key: 'qrcode'
        },
        allowNull: true
      },
      
      ativo_veiculo: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      
      sinc_veiculo: {
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
    await queryInterface.dropTable('veiculo');
  }
};
