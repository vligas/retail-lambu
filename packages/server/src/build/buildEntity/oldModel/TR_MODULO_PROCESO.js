/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TR_MODULO_PROCESO', {
    Tabla: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    Campo: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    Descripcion: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    id: {
      type: DataTypes.DOUBLE,
      allowNull: false
    }
  }, {
    tableName: 'TR_MODULO_PROCESO'
  });
};
