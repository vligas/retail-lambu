/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('MA_CONFIGURACION_MAIL', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    cu_codigo: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    cu_descripcion: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    cu_servidor: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    cu_puerto: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    bu_autenticacion: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: '0'
    },
    cu_login: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    cu_password: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    cu_correoEmisor: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    cu_nombreEmisor: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    cu_correoRespuesta: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    }
  }, {
    tableName: 'MA_CONFIGURACION_MAIL'
  });
};
