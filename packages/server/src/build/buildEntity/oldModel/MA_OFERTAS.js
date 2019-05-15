/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('MA_OFERTAS', {
    c_documento: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    f_desde: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: '(getdate())'
    },
    f_hasta: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: '(getdate())'
    },
    h_desde: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: '(getdate())'
    },
    h_hasta: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: '(getdate())'
    },
    c_horad: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    c_horah: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    c_status: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    fs_fecha_hora: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: '01/01/1980'
    },
    c_observacion: {
      type: DataTypes.TEXT,
      allowNull: false,
      defaultValue: ''
    },
    c_usuario: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    c_codlocalidad: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    }
  }, {
    tableName: 'MA_OFERTAS'
  });
};
