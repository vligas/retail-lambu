/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('MA_CXC_DETPAG', {
    C_CONCEPTO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    C_DOCUMENTO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    C_CODMONEDA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '0000000001'
    },
    C_CODDENOMINA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    C_CODBANCO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    C_NUM_CHEQUE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '((0))'
    },
    F_FECHA: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: '(getdate())'
    },
    N_MONTO: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    N_FACTOR: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    N_CANTIDAD: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    N_VUELTO: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    n_declarado: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    c_Tr_Documento_Rel: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    id: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    cs_codlocalidad: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    }
  }, {
    tableName: 'MA_CXC_DETPAG'
  });
};
