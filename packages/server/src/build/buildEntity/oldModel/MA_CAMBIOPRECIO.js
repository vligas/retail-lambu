/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('MA_CAMBIOPRECIO', {
    C_DOCUMENTO: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    F_FECHA: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: '(getdate())'
    },
    C_OBSERVACION: {
      type: DataTypes.TEXT,
      allowNull: false,
      defaultValue: ''
    },
    C_USUARIO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    C_CODLOCALIDAD: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    C_STATUS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    }
  }, {
    tableName: 'MA_CAMBIOPRECIO'
  });
};
