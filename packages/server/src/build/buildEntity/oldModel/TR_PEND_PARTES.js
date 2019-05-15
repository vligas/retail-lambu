/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TR_PEND_PARTES', {
    c_Codigo: {
      type: DataTypes.STRING,
      allowNull: false
    },
    c_Parte: {
      type: DataTypes.STRING,
      allowNull: false
    },
    n_Cantidad: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((1))'
    },
    TipoCambio: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((0))'
    },
    ID: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    }
  }, {
    tableName: 'TR_PEND_PARTES'
  });
};
