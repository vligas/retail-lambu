/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('MA_BANCO_REG', {
    id: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    c_CODBANCO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    C_ncuenta: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '(N'
    },
    C_codBen: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    c_nombrebeneficiario: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    c_descripcion: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    C_documento: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    c_concepto: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    c_observacion: {
      type: DataTypes.TEXT,
      allowNull: false,
      defaultValue: ''
    },
    c_documentoInt: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    c_conciliacion: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    N_OPERACION: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    N_monto: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    n_cliente_prove: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    n_saldoact: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    f_fechaE: {
      type: DataTypes.DATE,
      allowNull: false
    },
    F_fechaL: {
      type: DataTypes.DATE,
      allowNull: false
    },
    F_fechaAplicacion: {
      type: DataTypes.DATE,
      allowNull: true
    },
    b_Anulado: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: '0'
    },
    b_refleja: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: '0'
    },
    b_Ultima_opera: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: '0'
    },
    B_APLICADO: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: '0'
    },
    b_detalla_dep: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: '0'
    },
    b_conciliado: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: '0'
    },
    c_localidad: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    c_TransCuentaHabiente: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    c_TransCuenta: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    c_Transcodbanco: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    codconcepto: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))'
    },
    CU_DOCUMENTO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    CU_ORIGEN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'ADM'
    },
    CU_ORIGEN_CORRELATIVO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    CU_SEIMPRIMIO: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((1))'
    },
    CU_TIPO_DOCUMENTO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '',
      primaryKey: true
    },
    N_IDB: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    bu_transferencia: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((0))'
    },
    C_USUARIO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    n_factor: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((1))'
    },
    cs_comprobanteContable: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    ds_fechaEntregado: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: '(((1)/(1))/(1900))'
    },
    cu_receptor_cedula: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    cu_receptor_Descripcion: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    CS_NUMERO_TRANSFERENCIA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    cs_documentoOriginaMov: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    CS_NUMTRANSF_DESTINO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    }
  }, {
    tableName: 'MA_BANCO_REG'
  });
};
