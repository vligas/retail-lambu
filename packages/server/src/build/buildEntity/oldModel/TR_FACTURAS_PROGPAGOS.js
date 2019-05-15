/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TR_FACTURAS_PROGPAGOS', {
    CS_CODIGO_PAGO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    CS_NUMERO_FACTURA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    CS_CONCEPTO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    CS_TIPO_FACTURA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    DS_FECHAE: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: '(((1)/(1))/(1900))'
    },
    DS_FECHAV: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: '(((1)/(1))/(1900))'
    },
    NU_MONTO_FACTURA: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    NU_MONTO_CANCELADO: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    NU_SALDO_FACTURA: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    DS_FECHA: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: '(getdate())'
    },
    NU_MONTO_DESCUENTO: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    NU_PORC_DESCUENTO: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    NU_MONTO_PRONTOPAGO: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    NU_PORC_PRONTOPAGO: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    NU_MONTO_PRONTOPAGO2: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    NU_PORC_PRONTOPAGO2: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    NU_RETENIDOFINAL: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    NU_MONTOXRETENER: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    }
  }, {
    tableName: 'TR_FACTURAS_PROGPAGOS'
  });
};
