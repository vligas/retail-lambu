/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('MA_BLACKSTONE_PREPAID_ORDERS', {
    StellarOrderID: {
      type: DataTypes.STRING,
      allowNull: false
    },
    TicketNumber: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    ServiceType: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Status: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((0))'
    },
    ID: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    tableName: 'MA_BLACKSTONE_PREPAID_ORDERS'
  });
};
