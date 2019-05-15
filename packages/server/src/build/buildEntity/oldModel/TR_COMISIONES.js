/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TR_COMISIONES', {
    C_Codigo: {
      type: DataTypes.STRING,
      allowNull: false
    },
    c_Tipo: {
      type: DataTypes.STRING,
      allowNull: false
    },
    n_RangoMinimo: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))'
    },
    n_RangoMaximo: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))'
    },
    c_Concepto: {
      type: DataTypes.STRING,
      allowNull: false
    },
    n_Porcentaje: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))'
    },
    n_Monto: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))'
    }
  }, {
    tableName: 'TR_COMISIONES'
  });
};
