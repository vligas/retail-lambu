/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('MA_PRODUCTOS_ARCHIVO_EXISTENTE', {
    cs_codigoprod: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    cs_codigoprov: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    cs_descriprod: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    cs_motivo: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    ds_fecha: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: '(getdate())'
    },
    id: {
      type: DataTypes.DOUBLE,
      allowNull: false
    }
  }, {
    tableName: 'MA_PRODUCTOS_ARCHIVO_EXISTENTE'
  });
};
