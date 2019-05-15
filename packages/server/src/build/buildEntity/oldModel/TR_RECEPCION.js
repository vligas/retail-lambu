/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TR_RECEPCION', {
    c_LINEA: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    c_CONCEPTO: {
      type: DataTypes.STRING,
      allowNull: false
    },
    c_DOCUMENTO: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    c_DEPOSITO: {
      type: DataTypes.STRING,
      allowNull: false
    },
    c_CODARTICULO: {
      type: DataTypes.STRING,
      allowNull: false
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
    c_TIPOMOV: {
      type: DataTypes.STRING,
      allowNull: false
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
    N_IMPUESTO: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    N_TOTAL: {
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
    STATUS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '((0))'
    },
    DEC: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((0))'
    },
    N_ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((0))'
    },
    ID: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    N_PROD_EXT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
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
    ns_CantidaddelDocumentoOrigen: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    n_UnidadesFactura: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    n_EmpaquesFactura: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    }
  }, {
    tableName: 'TR_RECEPCION'
  });
};
