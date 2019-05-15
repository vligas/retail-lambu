/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TR_PuntoVentas_Tmp', {
    Codigo: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Cant: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    Precio: {
      type: DataTypes.FLOAT,
      allowNull: false
    }
  }, {
    tableName: 'TR_PuntoVentas_Tmp'
  });
};
