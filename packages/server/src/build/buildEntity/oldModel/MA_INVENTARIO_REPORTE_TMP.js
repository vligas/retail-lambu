/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('MA_INVENTARIO_REPORTE_TMP', {
    c_documento: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    c_concepto: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'REC'
    },
    c_relacion: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    c_codproveedor: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    d_fecha: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: '(((1)/(1))/(1900))'
    },
    c_descripcion: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    cs_usuario: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    }
  }, {
    tableName: 'MA_INVENTARIO_REPORTE_TMP'
  });
};
