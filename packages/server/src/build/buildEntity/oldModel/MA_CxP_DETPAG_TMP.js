/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('MA_CxP_DETPAG_TMP', {
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
      defaultValue: ''
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
      defaultValue: ''
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
    ID: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    }
  }, {
    tableName: 'MA_CxP_DETPAG_TMP'
  });
};
