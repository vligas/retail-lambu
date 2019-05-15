/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('MA_PEDIDOS_RUTA_ZONA', {
    cs_Corrida: {
      type: DataTypes.STRING,
      allowNull: false
    },
    cs_Codigo: {
      type: DataTypes.STRING,
      allowNull: false
    },
    cs_Descripcion: {
      type: DataTypes.STRING,
      allowNull: false
    },
    ID: {
      type: DataTypes.DOUBLE,
      allowNull: false
    }
  }, {
    tableName: 'MA_PEDIDOS_RUTA_ZONA'
  });
};
