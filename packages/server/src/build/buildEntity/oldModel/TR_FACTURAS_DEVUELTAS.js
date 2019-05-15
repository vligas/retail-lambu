/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TR_FACTURAS_DEVUELTAS', {
    c_documento: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    c_concepto: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    f_fecha: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      defaultValue: '(getdate())'
    },
    c_codarticulo: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    n_cantidad: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    n_cant_vendida: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    n_precio: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    id: {
      type: DataTypes.DOUBLE,
      allowNull: false
    }
  }, {
    tableName: 'TR_FACTURAS_DEVUELTAS'
  });
};
