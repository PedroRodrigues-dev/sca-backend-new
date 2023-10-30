'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Posto extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Posto.init({
    nome: DataTypes.STRING,
    nivel_acesso: DataTypes.INTEGER,
    ativo_posto: DataTypes.BOOLEAN,
    sinc_posto: DataTypes.BIGINT,
    created_at: DataTypes.DATE,
    updated_at: DataTypes.DATE
  }, {
    sequelize,
    timestamps: false,
    modelName: 'Posto',
    tableName: 'posto',
  });
  return Posto;
};