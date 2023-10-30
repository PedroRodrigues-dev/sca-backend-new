'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Efetivo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Efetivo.init({
    id_graduacao: DataTypes.INTEGER,
    nome_completo: DataTypes.STRING,
    nome_guerra: DataTypes.STRING,
    foto: DataTypes.BLOB,
    dependente: DataTypes.BOOLEAN,
    id_alerta: DataTypes.INTEGER,
    id_unidade: DataTypes.INTEGER,
    qrcode_efetivo: DataTypes.INTEGER,
    email: DataTypes.STRING,
    ativo_efetivo: DataTypes.BOOLEAN,
    sinc_efetivo: DataTypes.BIGINT,
    created_at: DataTypes.DATE,
    updated_at: DataTypes.DATE
  }, {
    sequelize,
    timestamps: false,
    modelName: 'Efetivo',
    tableName: 'efetivo',
  });
  return Efetivo;
};