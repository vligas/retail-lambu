/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('MA_INVENTARIO', {
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
    d_FECHA: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: '(getdate())'
    },
    c_DESCRIPCION: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    c_STATUS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    c_CODPROVEEDOR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    c_CODLOCALIDAD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '',
      primaryKey: true
    },
    c_codmoneda: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    n_FACTORCAMBIO: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((1))'
    },
    n_DESCUENTO: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    c_OBSERVACION: {
      type: DataTypes.TEXT,
      allowNull: false,
      defaultValue: ''
    },
    c_RELACION: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    c_CODCOMPRADOR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    c_DEP_ORIG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    c_DEP_DEST: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    c_MOTIVO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    c_codtransporte: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    c_ejecutor: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    c_factura: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    c_transportista: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    n_cantidad_compra: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    id: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    CODCONCEPTO: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))'
    },
    cs_comprobanteContable: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    ds_horainicio: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: '(getdate())'
    },
    ds_horafinal: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: '(getdate())'
    },
    CS_CODLOCALIDAD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    CS_NUMERO_TRANSFERENCIA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    CS_CODUNIDAD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    CS_NUMTRANSF_DESTINO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    dFechaRegistro: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: '(getdate())'
    }
  }, {
    tableName: 'MA_INVENTARIO'
  });
};
