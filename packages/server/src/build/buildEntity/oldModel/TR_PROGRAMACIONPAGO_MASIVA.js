/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TR_PROGRAMACIONPAGO_MASIVA', {
    C_CodigoProg: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    C_OrdenPago: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    }
  }, {
    tableName: 'TR_PROGRAMACIONPAGO_MASIVA'
  });
};
