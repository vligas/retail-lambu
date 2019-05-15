/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('MA_MODULO_PROCESO', {
    ID: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    Tabla: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    descripcion: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    }
  }, {
    tableName: 'MA_MODULO_PROCESO'
  });
};
