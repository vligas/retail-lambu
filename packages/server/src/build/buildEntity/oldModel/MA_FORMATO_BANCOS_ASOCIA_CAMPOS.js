/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('MA_FORMATO_BANCOS_ASOCIA_CAMPOS', {
    cu_campoConsulta: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    cu_nombreParaHumanos: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    }
  }, {
    tableName: 'MA_FORMATO_BANCOS_ASOCIA_CAMPOS'
  });
};
