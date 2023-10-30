'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const existingUser = await queryInterface.sequelize.query(
      `SELECT * FROM usuario WHERE usuario = 12345678;`,
      { type: queryInterface.sequelize.QueryTypes.SELECT }
    );

    if (existingUser.length === 0) {
      return queryInterface.bulkInsert('usuario', [
        {
          id: 1,
          usuario: 12345678,
          senha: '$2b$10$PHbYTAf05be2if4vz2ymXOY/MwKNb62ebGW2FUcx6oZ1.mlUuJnfS', // admin
          nivel_acesso: 2,
          flag: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
      ]);
    }
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('usuario', { usuario: 12345678 });
  },
};
