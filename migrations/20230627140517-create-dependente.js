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
    await queryInterface.createTable('dependente', { 
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
        allowNull: false
      },
      nome: {
        type: Sequelize.STRING(50),
        allowNull: false,
      },
      parentesco: {
        type: Sequelize.STRING(30),
        allowNull: false,
      },
      qrcode: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      ativo_dependente: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      sinc_dependente: {
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
    await queryInterface.dropTable('dependente');
  }
};
