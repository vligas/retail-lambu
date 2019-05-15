/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('MA_Version', {
    Version: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    Actualizacion: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: '(getdate())'
    },
    id: {
      type: DataTypes.DOUBLE,
      allowNull: false
    }
  }, {
    tableName: 'MA_Version'
  });
};
