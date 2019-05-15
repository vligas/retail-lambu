/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('MA_PRESENTACION', {
    c_PRESENTACION: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: ''
    }
  }, {
    tableName: 'MA_PRESENTACION'
  });
};
