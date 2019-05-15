/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('MA_ENTREGAS', {
    Documento: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    Descripcion: {
      type: DataTypes.STRING,
      allowNull: false
    },
    RIF: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Fecha: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: '(getdate())'
    },
    Telefono: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    Imagen: {
      type: "VARBINARY",
      allowNull: true
    },
    PedidoRelacion: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    Factura: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    }
  }, {
    tableName: 'MA_ENTREGAS'
  });
};
