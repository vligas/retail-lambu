/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TR_ODC_DESCUENTOS', {
    nu_linea: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '',
      primaryKey: true
    },
    nu_montoDescuento: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    cu_codigoDescuento: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '',
      primaryKey: true
    },
    cu_documento: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '',
      primaryKey: true
    },
    nu_porcentaje: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    }
  }, {
    tableName: 'TR_ODC_DESCUENTOS'
  });
};
