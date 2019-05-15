/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('MA_PLANTILLA_ESCALA', {
    CS_CODIGO: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    CS_DESCRIPCION: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    tableName: 'MA_PLANTILLA_ESCALA'
  });
};
