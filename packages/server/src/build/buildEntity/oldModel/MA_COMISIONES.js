/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('MA_COMISIONES', {
    C_Codigo: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    C_Descripcion: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    tableName: 'MA_COMISIONES'
  });
};
