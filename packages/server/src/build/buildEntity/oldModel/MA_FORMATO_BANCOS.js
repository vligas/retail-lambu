/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('MA_FORMATO_BANCOS', {
    cu_codigoFormato: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    cu_nombreFormato: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    cu_ubicacion: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    codigoCuentaCorriente: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    codigoCuentaAhorro: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    codigoAbonoCuenta: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    codigoTransferenciaSwift: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    codigoChequeGerencia: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    }
  }, {
    tableName: 'MA_FORMATO_BANCOS'
  });
};
