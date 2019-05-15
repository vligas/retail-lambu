/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('MA_REPORTES_DATOS', {
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    descripcion: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    tipo: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    tabla: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    }
  }, {
    tableName: 'MA_REPORTES_DATOS'
  });
};
