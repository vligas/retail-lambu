/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TR_SUBIDA_ARCHIVO', {
    IDSubida: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    f_fecha: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: '(((1)/(1))/(1900))'
    },
    c_codigo: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    n_cantidad: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    n_precio_unitario: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    n_subtotal: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    n_impuesto: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    }
  }, {
    tableName: 'TR_SUBIDA_ARCHIVO'
  });
};
