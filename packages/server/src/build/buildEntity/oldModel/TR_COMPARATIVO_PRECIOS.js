/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TR_COMPARATIVO_PRECIOS', {
    c_codigo: {
      type: DataTypes.STRING,
      allowNull: false
    },
    codProducto: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Linea: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    PrecioProducto: {
      type: DataTypes.FLOAT,
      allowNull: false
    }
  }, {
    tableName: 'TR_COMPARATIVO_PRECIOS'
  });
};
