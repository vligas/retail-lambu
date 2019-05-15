/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('MA_ALERTAGRID_PROCESOxALERTA', {
    c_Proceso: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    c_CodAlerta: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    }
  }, {
    tableName: 'MA_ALERTAGRID_PROCESOxALERTA'
  });
};
