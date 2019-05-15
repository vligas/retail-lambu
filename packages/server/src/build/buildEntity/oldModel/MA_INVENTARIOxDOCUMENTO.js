/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('MA_INVENTARIOxDOCUMENTO', {
    CS_DOCUMENTO: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    CS_CONCEPTO: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    CS_DOCUMENTO_ORIGEN: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    CS_CONCEPTO_ORIGEN: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    CS_ESTATUS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    }
  }, {
    tableName: 'MA_INVENTARIOxDOCUMENTO'
  });
};
