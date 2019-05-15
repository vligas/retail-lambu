/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('MA_CORRELATIVO_RETENCION', {
    CS_CAMPO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    CS_DESCRIPCION: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    }
  }, {
    tableName: 'MA_CORRELATIVO_RETENCION'
  });
};
