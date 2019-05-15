/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('MA_TRAZA_FICHAS', {
    CS_ID: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    CS_FICHA: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    CS_CODIGO_USUARIO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    CS_TIPO_OPERACION: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    CS_FECHA_OPERACION: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: '(getdate())'
    },
    CS_CODIGO: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    CS_TIPO_OBJETO: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    }
  }, {
    tableName: 'MA_TRAZA_FICHAS'
  });
};
