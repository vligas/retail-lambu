/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('MA_banco_registros', {
    C_CodBanco: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    C_Codcuenta: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    n_saldo: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    n_creditos: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    n_debitos: {
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
    tableName: 'MA_banco_registros'
  });
};
