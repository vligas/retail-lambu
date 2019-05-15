/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TR_DECLARACIONADM', {
    f_fecha: {
      type: DataTypes.DATE,
      allowNull: false
    },
    c_emisor: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    C_Documento: {
      type: DataTypes.STRING,
      allowNull: false
    },
    c_concepto: {
      type: DataTypes.STRING,
      allowNull: false
    },
    n_Monto: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    C_localidad: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    C_usuario: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    c_Tr_Documento_Rel: {
      type: DataTypes.STRING,
      allowNull: false
    },
    id: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    cs_codmoneda: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    CS_CODENOMINACION: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    cu_codbanco: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    bu_declarado: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((0))'
    },
    ns_factor: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((1))'
    },
    DS_FECHADEPOSITADO: {
      type: DataTypes.DATE,
      allowNull: true
    },
    cs_denominacion: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    cs_moneda: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    cs_emisorcuenta: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    }
  }, {
    tableName: 'TR_DECLARACIONADM'
  });
};
