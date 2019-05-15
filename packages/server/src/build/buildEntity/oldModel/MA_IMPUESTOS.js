/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('MA_IMPUESTOS', {
    c_CODIMPUESTO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '',
      primaryKey: true
    },
    c_DESCRIPCION: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    c_IMPCOMPRANAC: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: ''
    },
    c_IMPCOMPRAINT: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: ''
    },
    c_IMPVENTANAC: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: ''
    },
    c_IMPVENTAINT: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: ''
    },
    c_TIPOIMP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    }
  }, {
    tableName: 'MA_IMPUESTOS'
  });
};
