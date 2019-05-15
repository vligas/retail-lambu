/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('MA_PRODUCTOSPARTES', {
    cu_CodigoProductoPrincipal: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    cu_CodigoProductoParte: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    nu_Cantidad: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    ID: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    bu_Variable: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((1))'
    }
  }, {
    tableName: 'MA_PRODUCTOSPARTES'
  });
};
