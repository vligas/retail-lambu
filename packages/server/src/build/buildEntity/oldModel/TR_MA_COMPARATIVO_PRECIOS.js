/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TR_MA_COMPARATIVO_PRECIOS', {
    c_codigo: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Alias: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Precio: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    Columna: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    Linea: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    tableName: 'TR_MA_COMPARATIVO_PRECIOS'
  });
};
