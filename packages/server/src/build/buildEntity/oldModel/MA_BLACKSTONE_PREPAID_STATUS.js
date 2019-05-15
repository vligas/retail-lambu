/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('MA_BLACKSTONE_PREPAID_STATUS', {
    StatusID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Description: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    tableName: 'MA_BLACKSTONE_PREPAID_STATUS'
  });
};
