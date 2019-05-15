/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('MA_BANCOS', {
    c_CODIGO: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    c_DESCRIPCIO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    c_GRUPO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    c_OBSERVACIO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    N_IDB: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    bs_verificacionoperaciones_especiales: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: '0'
    },
    cs_mensaje: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    ns_codigooperacion: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    cs_rtfcheque: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    cs_codigobanco_che: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    id: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    cu_FormatoArchivo: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    cu_FormatoArchivoMismoBanco: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    cu_FormatoArchivoOtrosBancos: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    cu_tipoArchivoConciliacion: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    cu_separadorArchivoConciliacion: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    cu_campoTipo: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    cu_campoDocumento: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    cu_campoDetalle: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    cu_campoMonto: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    cu_campoFecha: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    }
  }, {
    tableName: 'MA_BANCOS'
  });
};
