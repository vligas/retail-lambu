/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('MA_DATOS', {
    Nombre: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    Descripcion: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    Tipo: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    Tabla: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    }
  }, {
    tableName: 'MA_DATOS'
  });
};
