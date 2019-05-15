/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('MA_TARJETAS', {
    c_CODBANCO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    C_NUMTARJETA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    c_DESCRIPCION: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    c_CODTARJETA: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    }
  }, {
    tableName: 'MA_TARJETAS'
  });
};
