/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('MA_BANCOREG_X_CXP_CXC', {
    banco_c_concepto: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    banco_c_documentoInt: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    banco_c_localidad: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    Cx_c_documento: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '',
      primaryKey: true
    },
    Cx_c_concepto: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '',
      primaryKey: true
    },
    Cx_c_codigo: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    Cx_cs_codlocalidad: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    bu_CxP_CxC: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: '0'
    },
    BANCO_C_DOCUMENTO: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: ''
    }
  }, {
    tableName: 'MA_BANCOREG_X_CXP_CXC'
  });
};
