/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TR_RECEPCION_DE_DOCUMENTO', {
    cu_documento: {
      type: DataTypes.STRING,
      allowNull: false
    },
    cs_codlocalidad: {
      type: DataTypes.STRING,
      allowNull: false
    },
    ds_fecha: {
      type: DataTypes.DATE,
      allowNull: false
    },
    cu_documentoRecibido: {
      type: DataTypes.STRING,
      allowNull: false
    },
    cu_documentoRecibido_concepto: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    tableName: 'TR_RECEPCION_DE_DOCUMENTO'
  });
};
