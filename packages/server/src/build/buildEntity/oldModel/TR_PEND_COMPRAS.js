/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TR_PEND_COMPRAS', {
    C_DOCUMENTO: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    C_LOCALIDAD: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    C_STATUS: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    C_CONCEPTO: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    ID: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    }
  }, {
    tableName: 'TR_PEND_COMPRAS'
  });
};
