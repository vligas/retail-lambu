/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('MA_CXC', {
    C_Documento: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '',
      primaryKey: true
    },
    C_Relacion: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '((0))',
      primaryKey: true
    },
    C_Codigo: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    C_localidad: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '((1))'
    },
    C_usuario: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '((9999999999.))'
    },
    c_concepto: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '(NN_C',
      primaryKey: true
    },
    c_detalle: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '(NCXC NOTAS DE CREDITO'
    },
    c_observacion: {
      type: DataTypes.TEXT,
      allowNull: false,
      defaultValue: ' '
    },
    f_fechae: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: '(getdate())'
    },
    f_fechav: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: '(getdate())'
    },
    n_impuesto: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    n_bimpuesto: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    n_total: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    n_PagadoImp: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    n_Pagado: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    n_retencion: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    n_subtotal: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    N_pimpuesto: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    N_DESCUENTO: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    c_codmoneda: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '((1))'
    },
    n_factor: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((1))'
    },
    F_CANCELACION: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: '(((1)/(1))/(1900))'
    },
    b_tipoaporte: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    codconcepto: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((14))'
    },
    cs_comprobanteContable: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    cs_codlocalidad: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '((1))'
    },
    ID: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    cs_documento_ret: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    cs_comprobante_ret: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    ds_fecha_ret: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: '01/01/1900'
    },
    CS_CODUNIDAD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    cs_ncontrol: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    cs_documento_ndc: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    cs_ncontrol_ndc: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    ds_fechaemision_nota: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: '01/01/1900'
    },
    cs_RelacionAnticipo: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    CS_NUMTRANSF_DESTINO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    CS_NUMERO_TRANSFERENCIA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    }
  }, {
    tableName: 'MA_CXC'
  });
};
