/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TR_BANCO_PRECONCILIACION', {
    c_documentoint: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    c_concepto: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    c_ncuenta: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    c_codbanco: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    ID: {
      type: DataTypes.DOUBLE,
      allowNull: false
    }
  }, {
    tableName: 'TR_BANCO_PRECONCILIACION'
  });
};
