/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('MA_REGLASDENEGOCIO_OLDSCHEMA_BAK', {
    CAMPO: {
      type: DataTypes.STRING,
      allowNull: false
    },
    VALOR: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    tableName: 'MA_REGLASDENEGOCIO_OLDSCHEMA_BAK'
  });
};
