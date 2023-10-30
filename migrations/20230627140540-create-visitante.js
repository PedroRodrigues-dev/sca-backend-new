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
    await queryInterface.createTable('visitante', { 
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      tipo_doc: {
        type: Sequelize.STRING(30),
        allowNull: false,
      },
      num_doc: {
        type: Sequelize.STRING(20),
        allowNull: false,
      },
      nome: {
        type: Sequelize.STRING(45),
        allowNull: false,
      },
      rua: {
        type: Sequelize.STRING(30),
        allowNull: false,
      },
      numero: {
        type: Sequelize.STRING(10),
        allowNull: false,
      },
      bairro: {
        type: Sequelize.STRING(40),
        allowNull: false,
      },
      estado: {
        type: Sequelize.STRING(20),
        allowNull: false,
      },
      telefone: {
        type: Sequelize.STRING(11),
        allowNull: true,
      },
      foto: {
        type: Sequelize.BLOB,
        allowNull: true,
      },
      empresa: {
        type: Sequelize.STRING(45),
        allowNull: true,
      },
      autorizador: {
        type: Sequelize.STRING(45),
        allowNull: true,
      },
      qr_code: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      ativo_visitante: {
        type: Sequelize.BOOLEAN,
        allowNull: true,
      },
      sinc: {
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
    await queryInterface.dropTable('visitante');
  }
};
