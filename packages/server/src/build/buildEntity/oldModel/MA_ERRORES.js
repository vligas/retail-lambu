/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('MA_ERRORES', {
    NUMERO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    DESCRIPCION: {
      type: DataTypes.TEXT,
      allowNull: false,
      defaultValue: ''
    },
    FECHA: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: '(getdate())'
    },
    HORA: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: '(getdate())'
    },
    USUARIO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    MODULO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    FORMA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    OBJ_PRO_FUN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    ID: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    }
  }, {
    tableName: 'MA_ERRORES'
  });
};
