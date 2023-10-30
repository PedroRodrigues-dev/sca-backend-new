'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Alerta extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Alerta.init({
    nome_alerta: DataTypes.STRING,
    cor: DataTypes.STRING,
    ativo_alerta: DataTypes.BOOLEAN,
    sinc: DataTypes.BIGINT
  }, {
    sequelize,
    timestamps: false,
    modelName: 'Alerta',
    tableName: 'alerta',
  });
  return Alerta;
};