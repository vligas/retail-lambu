/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('MA_RECEPCIONESMOVIL', {
    codigoProveedor: {
      type: DataTypes.STRING,
      allowNull: false
    },
    codigoODC: {
      type: DataTypes.STRING,
      allowNull: false
    },
    codigoProducto: {
      type: DataTypes.STRING,
      allowNull: false
    },
    cantidadUnidades: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    cantidadEmpaques: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    facturaUnidades: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    facturaEmpaques: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    transportista: {
      type: DataTypes.STRING,
      allowNull: false
    },
    codigoLocalidad: {
      type: DataTypes.STRING,
      allowNull: false
    },
    codigoDeposito: {
      type: DataTypes.STRING,
      allowNull: false
    },
    documento: {
      type: DataTypes.STRING,
      allowNull: false
    },
    numeroRecepcion_PDA: {
      type: DataTypes.STRING,
      allowNull: false
    },
    UnidadesxEmpaque: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    numeroFactura: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    Observacion: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    }
  }, {
    tableName: 'MA_RECEPCIONESMOVIL'
  });
};
