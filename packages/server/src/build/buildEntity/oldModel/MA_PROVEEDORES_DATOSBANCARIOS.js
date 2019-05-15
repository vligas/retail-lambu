/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('MA_PROVEEDORES_DATOSBANCARIOS', {
    codigoProveedor: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    Banco: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    numeroCuenta: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    cuentahabiente: {
      type: DataTypes.STRING,
      allowNull: false
    },
    tipoCuenta: {
      type: DataTypes.STRING,
      allowNull: false
    },
    tipoPago: {
      type: DataTypes.STRING,
      allowNull: false
    },
    codigoSwift: {
      type: DataTypes.STRING,
      allowNull: false
    },
    codigoAba: {
      type: DataTypes.STRING,
      allowNull: false
    },
    idBeneficiario: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    tableName: 'MA_PROVEEDORES_DATOSBANCARIOS'
  });
};
