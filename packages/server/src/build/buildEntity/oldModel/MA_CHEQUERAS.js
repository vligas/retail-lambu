/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('MA_CHEQUERAS', {
    IDChequera: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    c_BANCO: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    c_CUENTA: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    NumDesde: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))'
    },
    NumHasta: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))'
    },
    Cantidad: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))'
    },
    Estado: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    }
  }, {
    tableName: 'MA_CHEQUERAS'
  });
};
