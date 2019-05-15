/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('MA_PEDIDOS_RUTA_PICKING', {
    CodLote: {
      type: DataTypes.STRING,
      allowNull: false
    },
    CodPedido: {
      type: DataTypes.STRING,
      allowNull: false
    },
    CodProducto: {
      type: DataTypes.STRING,
      allowNull: false
    },
    CodRecolector: {
      type: DataTypes.STRING,
      allowNull: false
    },
    CodSupervisorPicking: {
      type: DataTypes.STRING,
      allowNull: false
    },
    CodEmpacador: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    CodSupervisorPacking: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    CantSolicitada: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CantRecolectada: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CantEmpacada: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    Picking: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: '0'
    },
    Packing: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: '0'
    },
    FechaAsignacion: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: '(getdate())'
    },
    PackingMobile_CantEmpaques: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))'
    }
  }, {
    tableName: 'MA_PEDIDOS_RUTA_PICKING'
  });
};
