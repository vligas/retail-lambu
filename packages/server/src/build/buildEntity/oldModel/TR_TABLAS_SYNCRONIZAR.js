/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TR_TABLAS_SYNCRONIZAR', {
    CU_CODSUCURSAL: {
      type: DataTypes.STRING,
      allowNull: false
    },
    cu_codtablassyncronizar: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    id: {
      type: DataTypes.DOUBLE,
      allowNull: false
    }
  }, {
    tableName: 'TR_TABLAS_SYNCRONIZAR'
  });
};
