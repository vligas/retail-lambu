/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TR_Comprobantes', {
    IDDeMovimiento: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    Codigo: {
      type: DataTypes.STRING,
      allowNull: true
    },
    IDDeCuenta: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    Tipo: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Monto: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    Referencia: {
      type: DataTypes.STRING,
      allowNull: true
    },
    Descripcion: {
      type: DataTypes.STRING,
      allowNull: true
    },
    Fecha: {
      type: DataTypes.DATE,
      allowNull: false
    },
    IDDeComprobante: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    USUARIO: {
      type: DataTypes.STRING,
      allowNull: true
    },
    IDDeCentroCosto: {
      type: DataTypes.DOUBLE,
      allowNull: true
    }
  }, {
    tableName: 'TR_Comprobantes'
  });
};
