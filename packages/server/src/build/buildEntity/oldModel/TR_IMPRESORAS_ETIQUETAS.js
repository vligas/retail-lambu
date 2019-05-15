/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TR_IMPRESORAS_ETIQUETAS', {
    cCodigo: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    cCaracteres: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    cValorRtf: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    cDescripcion: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    }
  }, {
    tableName: 'TR_IMPRESORAS_ETIQUETAS'
  });
};
