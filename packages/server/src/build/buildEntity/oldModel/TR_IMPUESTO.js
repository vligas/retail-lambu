/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TR_IMPUESTO', {
    c_CODIMPUESTO: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    c_DOCUMENTO: {
      type: DataTypes.STRING,
      allowNull: true
    },
    n_VALOR: {
      type: DataTypes.FLOAT,
      allowNull: true
    }
  }, {
    tableName: 'TR_IMPUESTO'
  });
};
