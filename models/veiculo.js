'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Veiculo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Veiculo.init({
    id_efetivo: DataTypes.INTEGER,
    id_visitante: DataTypes.INTEGER,
    tipo: DataTypes.STRING,
    cor_veiculo: DataTypes.STRING,
    placa: DataTypes.STRING,
    modelo: DataTypes.STRING,
    renavam: DataTypes.BIGINT,
    qrcode: DataTypes.INTEGER,
    ativo_veiculo: DataTypes.BOOLEAN,
    sinc_veiculo: DataTypes.BIGINT,
    created_at: DataTypes.DATE,
    updated_at: DataTypes.DATE
  }, {
    sequelize,
    timestamps: false,
    modelName: 'Veiculo',
    tableName: 'veiculo',
  });
  return Veiculo;
};