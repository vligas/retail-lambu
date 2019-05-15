/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TR_AUTORIZACIONES_RECEPCION', {
    Usuario: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Recepcion: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Producto: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    tableName: 'TR_AUTORIZACIONES_RECEPCION'
  });
};
