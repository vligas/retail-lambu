/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TR_PLANTILLA_ESCALA', {
    CS_CODIGO: {
      type: DataTypes.STRING,
      allowNull: false
    },
    TALLA: {
      type: DataTypes.STRING,
      allowNull: false
    },
    CANTIDAD: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    ID: {
      type: DataTypes.DOUBLE,
      allowNull: false
    }
  }, {
    tableName: 'TR_PLANTILLA_ESCALA'
  });
};
