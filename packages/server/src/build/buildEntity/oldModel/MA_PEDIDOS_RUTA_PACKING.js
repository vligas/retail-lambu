/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('MA_PEDIDOS_RUTA_PACKING', {
    CodLote: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    CodPedido: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    CantEmpaques: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    FechaEmpacado: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: '(getdate())'
    }
  }, {
    tableName: 'MA_PEDIDOS_RUTA_PACKING'
  });
};
