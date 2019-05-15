/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('MA_PEDIDOS_CITAS', {
    Pedido: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Cliente: {
      type: DataTypes.STRING,
      allowNull: false
    },
    FechaIni: {
      type: DataTypes.DATE,
      allowNull: false
    },
    FechaFin: {
      type: DataTypes.DATE,
      allowNull: false
    },
    Vendedor: {
      type: DataTypes.STRING,
      allowNull: false
    },
    CodServicio: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Cantidad: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    Precio: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    PorcImpuesto: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    Costo: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    Estado: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((0))'
    },
    ID: {
      type: DataTypes.DOUBLE,
      allowNull: false
    }
  }, {
    tableName: 'MA_PEDIDOS_CITAS'
  });
};
