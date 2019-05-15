/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TR_PEND_PROVEEDORESxRETENCIONES', {
    CU_PROVEEDOR: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    CU_RETENCION: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    CU_TIPO_CAMBIO: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    ID: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    }
  }, {
    tableName: 'TR_PEND_PROVEEDORESxRETENCIONES'
  });
};
