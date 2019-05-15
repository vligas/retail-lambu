/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('MA_CORRIDAS_AGENTE_CLIENTES', {
    cs_documento: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    cs_sucursal: {
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
    tableName: 'MA_CORRIDAS_AGENTE_CLIENTES'
  });
};
