'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class RegistroAcesso extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  RegistroAcesso.init({
    tipo: DataTypes.STRING,
    data: DataTypes.DATEONLY,
    hora: DataTypes.TIME,
    id_posto: DataTypes.INTEGER,
    qrcode: DataTypes.INTEGER,
    id_visitante: DataTypes.INTEGER,
    id_dependente: DataTypes.INTEGER,
    id_veiculo: DataTypes.INTEGER,
    autorizador: DataTypes.STRING,
    sinc_acesso: DataTypes.BIGINT,
    created_at: DataTypes.DATE,
    updated_at: DataTypes.DATE
  }, {
    sequelize,
    timestamps: false,
    modelName: 'RegistroAcesso',
    tableName: 'registro_acesso',
  });
  return RegistroAcesso;
};