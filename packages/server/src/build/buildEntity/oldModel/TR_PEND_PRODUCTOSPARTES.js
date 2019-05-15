/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TR_PEND_PRODUCTOSPARTES', {
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
      allowNull: false
    },
    ID: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    bu_Variable: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((1))'
    },
    TIPO_CAMBIO: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((0))'
    }
  }, {
    tableName: 'TR_PEND_PRODUCTOSPARTES'
  });
};
