/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('MA_RECEPCION_DE_DOCUMENTO', {
    cu_documento: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    cs_codlocalidad: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    cs_codusuario: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    ds_fecha: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: '(getdate())'
    },
    cu_observacion: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    cu_codproveedor: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    }
  }, {
    tableName: 'MA_RECEPCION_DE_DOCUMENTO'
  });
};
