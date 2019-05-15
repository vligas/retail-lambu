/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('MA_CONCEPTOS_XML', {
    bdd: {
      type: DataTypes.STRING,
      allowNull: false
    },
    cod_stellar: {
      type: DataTypes.STRING,
      allowNull: false
    },
    cod_seniat: {
      type: DataTypes.STRING,
      allowNull: false
    },
    servidor: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    tableName: 'MA_CONCEPTOS_XML'
  });
};
