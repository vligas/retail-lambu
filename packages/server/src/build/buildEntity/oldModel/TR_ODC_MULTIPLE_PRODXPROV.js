/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TR_ODC_MULTIPLE_PRODXPROV', {
    codigoProducto: {
      type: DataTypes.STRING,
      allowNull: false
    },
    cantidad: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    codigoDeposito: {
      type: DataTypes.STRING,
      allowNull: false
    },
    equipoUsar: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    }
  }, {
    tableName: 'TR_ODC_MULTIPLE_PRODXPROV'
  });
};
