/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TR_ODC_AUTOMATICAS', {
    cu_proveedor: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    du_fecha: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: '(getdate())'
    }
  }, {
    tableName: 'TR_ODC_AUTOMATICAS'
  });
};
