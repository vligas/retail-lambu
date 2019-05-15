/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('MA_VENTAS', {
    cs_ORGANIZACION: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    c_DOCUMENTO: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    c_CONCEPTO: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    d_FECHA: {
      type: DataTypes.DATE,
      allowNull: false,
      primaryKey: true
    },
    c_DESCRIPCION: {
      type: DataTypes.STRING,
      allowNull: false
    },
    c_direccion: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    c_rif: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    c_nit: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    c_telefono: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    c_status: {
      type: DataTypes.STRING,
      allowNull: false
    },
    c_CODCLIENTE: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    c_CODLOCALIDAD: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    c_CODMONEDA: {
      type: DataTypes.STRING,
      allowNull: false
    },
    n_FACTORCAMBIO: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
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
      allowNull: true,
      defaultValue: ''
    },
    c_CODVENDEDOR: {
      type: DataTypes.STRING,
      allowNull: false
    },
    d_fecha_recepcion: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: '(((5)/(11))/(70))'
    },
    NS_BASE_RETENCION: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    NS_RETENCION: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    N_SUBTOTAL: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    N_IMPUESTO: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    NU_MONTO_SERVICIO: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    N_TOTAL: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    NU_MONTO_CANCELADO: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    C_CODDEPOSITO: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    n_baseimp: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    id: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    c_orden_compra: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    codconcepto: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))'
    },
    cu_vendedor_cod: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    cu_codafiliado: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    N_VUELTO: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    NU_MONTO_VUELTO: {
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
    bu_impresa: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: '0'
    },
    CS_NUMTRANSF_DESTINO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    PackingBoolean: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: '1'
    },
    dFechaRegistro: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: '(getdate())'
    }
  }, {
    tableName: 'MA_VENTAS'
  });
};
