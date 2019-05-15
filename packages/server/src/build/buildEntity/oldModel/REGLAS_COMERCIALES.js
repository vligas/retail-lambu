/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('REGLAS_COMERCIALES', {
    Estimacion_PV: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((0))'
    },
    Auto_codigo: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: '0'
    },
    caracter_codigo: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    Auto_banco: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: '0'
    },
    caracter_banco: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    Auto_cliente: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: '0'
    },
    caracter_cliente: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    Auto_deposito: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: '0'
    },
    caracter_deposito: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    Auto_moneda: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: '0'
    },
    caracter_moneda: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    Auto_localidad: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: '0'
    },
    caracter_localidad: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    Auto_proveedor: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: '0'
    },
    caracter_proveedor: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    Auto_usuario: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: '0'
    },
    caracter_usuario: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    TIPO_REDONDEO: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((1))'
    },
    redondear_mitad: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: '0'
    },
    considerar_imp: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: '1'
    },
    REDONDEAR_PRECIOS: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: '0'
    },
    NIVEL_MOD_PRECIOS: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((1))'
    },
    IMPUESTO: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((15.5))'
    },
    VARIAR9: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: '0'
    },
    NIVEL_MOD_COSTOS: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((1))'
    },
    MANEJA_POS: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: '0'
    },
    ESTIMACION_INV: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((0))'
    },
    NIVEL_CIERRE_FORZADO: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((4))'
    },
    mas_productos: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: '0'
    },
    ARCHIVO_BALANZA: {
      type: DataTypes.STRING,
      allowNull: true
    },
    FACTURA_ENCABEZADO: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: '0'
    },
    NO_PUNTOS: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: '((5))'
    },
    MUESTRAIMPFAC: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: '0'
    },
    AUTO_VENDEDOR: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: '0'
    },
    BLN_RTF_REPLACE_ONE: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: '0'
    },
    BU_VENDEDOR: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: '0'
    },
    CARACTER_VENDEDOR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    CU_CLIENTE_CONTADO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    IMPRESORA_ETIQUETA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    NIVEL_Autorizacion_credito: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((9))'
    },
    bAceptarRecSinOrden: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: '0'
    },
    bnivelcambioprecio: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: '0'
    }
  }, {
    tableName: 'REGLAS_COMERCIALES'
  });
};
