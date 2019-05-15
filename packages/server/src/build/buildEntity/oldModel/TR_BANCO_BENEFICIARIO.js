/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TR_BANCO_BENEFICIARIO', {
    c_documentoint: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    C_concepto: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    C_beneficiario: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    id: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    C_CODBANCODESTINO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '((100))'
    },
    C_CUENTA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '((0))'
    },
    CODCONCEPTO: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))'
    },
    CU_DOCUMENTO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CU_TIPO_DOCUMENTO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    N_MONTO: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))'
    },
    CU_DOCUMNETO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    CU_TPO_DOCUMENTO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    C_CODBEN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    C_CODBENEFICIARIO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    }
  }, {
    tableName: 'TR_BANCO_BENEFICIARIO'
  });
};
