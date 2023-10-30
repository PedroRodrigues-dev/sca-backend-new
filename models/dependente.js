'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Dependente extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Dependente.init({
    id_efetivo: DataTypes.INTEGER,
    nome: DataTypes.STRING,
    parentesco: DataTypes.STRING,
    qrcode: DataTypes.INTEGER,
    ativo_dependente: DataTypes.BOOLEAN,
    sinc_dependente: DataTypes.BIGINT,
    created_at: DataTypes.DATE,
    updated_at: DataTypes.DATE
  }, {
    sequelize,
    timestamps: false,
    modelName: 'Dependente',
    tableName: 'dependente',
  });
  return Dependente;
};