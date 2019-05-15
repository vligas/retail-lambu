/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TR_PEND_ODC', {
    C_DOCUMENTO: {
      type: DataTypes.STRING,
      allowNull: false
    },
    C_LOCALIDAD: {
      type: DataTypes.STRING,
      allowNull: false
    },
    C_STATUS: {
      type: DataTypes.STRING,
      allowNull: false
    },
    ID: {
      type: DataTypes.DOUBLE,
      allowNull: false
    }
  }, {
    tableName: 'TR_PEND_ODC'
  });
};
