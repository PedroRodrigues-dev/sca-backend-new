'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Visitante extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Visitante.init({
    tipo_doc: DataTypes.STRING,
    num_doc: DataTypes.STRING,
    nome: DataTypes.STRING,
    rua: DataTypes.STRING,
    numero: DataTypes.STRING,
    bairro: DataTypes.STRING,
    estado: DataTypes.STRING,
    telefone: DataTypes.STRING,
    foto: DataTypes.BLOB,
    empresa: DataTypes.STRING,
    autorizador: DataTypes.STRING,
    qr_code: DataTypes.INTEGER,
    ativo_visitante: DataTypes.BOOLEAN,
    sinc: DataTypes.BIGINT,
    created_at: DataTypes.DATE,
    updated_at: DataTypes.DATE
  }, {
    sequelize,
    timestamps: false,
    modelName: 'Visitante',
    tableName: 'visitante',
  });
  return Visitante;
};