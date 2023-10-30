'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Sincronismo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Sincronismo.init({
    sinc_pessoa_geral: DataTypes.BIGINT,
    sinc_posto_geral: DataTypes.BIGINT,
    sinc_dependente_geral: DataTypes.BIGINT,
    sinc_veiculo_geral: DataTypes.BIGINT,
    created_at: DataTypes.DATE,
    updated_at: DataTypes.DATE
  }, {
    sequelize,
    timestamps: false,
    modelName: 'Sincronismo',
    tableName: 'sincronismo',
  });
  return Sincronismo;
};