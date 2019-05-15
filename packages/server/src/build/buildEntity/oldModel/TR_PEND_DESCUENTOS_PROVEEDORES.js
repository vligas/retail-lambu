/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TR_PEND_DESCUENTOS_PROVEEDORES', {
    C_DOCUMENTO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    C_LOCALIDAD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    C_STATUS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    ID: {
      type: DataTypes.DOUBLE,
      allowNull: false
    }
  }, {
    tableName: 'TR_PEND_DESCUENTOS_PROVEEDORES'
  });
};
