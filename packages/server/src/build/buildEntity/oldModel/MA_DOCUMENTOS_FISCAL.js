/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('MA_DOCUMENTOS_FISCAL', {
    cu_DocumentoStellar: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '',
      primaryKey: true
    },
    cu_DocumentoFiscal: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '',
      primaryKey: true
    },
    cu_DocumentoTipo: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '',
      primaryKey: true
    },
    cu_Localidad: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    cu_SerialImpresora: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    cu_ZFiscal: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    }
  }, {
    tableName: 'MA_DOCUMENTOS_FISCAL'
  });
};
