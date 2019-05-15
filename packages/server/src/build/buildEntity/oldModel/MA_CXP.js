/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('MA_CXP', {
    C_Documento: {
      type: DataTypes.STRING,
      allowNull: false,
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
      primaryKey: true
    },
    C_usuario: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    c_concepto: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    c_detalle: {
      type: DataTypes.STRING,
      allowNull: false
    },
    c_observacion: {
      type: DataTypes.TEXT,
      allowNull: false,
      defaultValue: ''
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
    c_codmoneda: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    n_factor: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((1))'
    },
    F_CANCELACION: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: '((0))'
    },
    codconcepto: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))'
    },
    N_PAGADORETENCION: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    cs_comprobanteContable: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    n_totalcxp: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    cs_codlocalidad: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
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
    id: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    cs_descripcion_prov: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    cs_direccion_prov: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    cs_rif_prov: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    cs_telefono_prov: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    CS_CODUNIDAD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    cu_documentoRecepcion: {
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
    CS_RELACION_NDC: {
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
    tableName: 'MA_CXP'
  });
};
