/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TR_INVENTARIO', {
    c_LINEA: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((0))',
      primaryKey: true
    },
    c_CONCEPTO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '',
      primaryKey: true
    },
    c_DOCUMENTO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '',
      primaryKey: true
    },
    c_DEPOSITO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '',
      primaryKey: true
    },
    c_CODARTICULO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '',
      primaryKey: true
    },
    n_CANTIDAD: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    n_COSTO: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    n_SUBTOTAL: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    n_IMPUESTO: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    n_TOTAL: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    c_TIPOMOV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '((0))',
      primaryKey: true
    },
    n_cant_teorica: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    n_cant_diferencia: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    N_PRECIO: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    N_PRECIO_ORIGINAL: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    f_fecha: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: '01/01/1980'
    },
    c_codlocalidad: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    n_factorcambio: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((1))'
    },
    id: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    C_DESCRIPCION: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    C_COMPUESTO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    codconcepto: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))'
    },
    n_descuentogeneral: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    n_descuentoespecifico: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    c_documento_origen: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    c_tipodoc_origen: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    N_CANTIDADFAC: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    ns_descuento: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    cs_comprobanteContable: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    cs_codlocalidad: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    ns_CantidadEmpaque: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((1))'
    },
    IMPUESTO: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    }
  }, {
    tableName: 'TR_INVENTARIO'
  });
};
