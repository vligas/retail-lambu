/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TR_BANCO_REG_DEP', {
    C_codbanco: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    C_ncuenta: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    C_documentoint: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    C_ChequeNo: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    C_codbancoche: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    c_plaza: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    n_monto: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    f_fechal: {
      type: DataTypes.DATE,
      allowNull: false
    },
    b_anulado: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: '0'
    },
    b_aplicado: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: '0'
    },
    id: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    }
  }, {
    tableName: 'TR_BANCO_REG_DEP'
  });
};
