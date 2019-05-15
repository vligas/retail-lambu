/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TR_OFERTAS_PERMANENTES', {
    cs_codigooferta: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    cs_codigo: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    id: {
      type: DataTypes.DOUBLE,
      allowNull: false
    }
  }, {
    tableName: 'TR_OFERTAS_PERMANENTES'
  });
};
