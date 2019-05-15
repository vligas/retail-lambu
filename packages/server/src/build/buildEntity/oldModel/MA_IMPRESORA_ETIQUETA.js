/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('MA_IMPRESORA_ETIQUETA', {
    cu_descripcion: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    }
  }, {
    tableName: 'MA_IMPRESORA_ETIQUETA'
  });
};
