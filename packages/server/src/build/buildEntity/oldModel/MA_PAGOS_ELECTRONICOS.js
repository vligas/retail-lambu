/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('MA_PAGOS_ELECTRONICOS', {
    ID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    codigo: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    codigoBanco: {
      type: DataTypes.STRING,
      allowNull: false
    },
    banco: {
      type: DataTypes.STRING,
      allowNull: false
    },
    cuenta: {
      type: DataTypes.STRING,
      allowNull: false
    },
    montoPresupuestado: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    fechaLiberacion: {
      type: DataTypes.DATE,
      allowNull: false
    },
    saldoEnLibros: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    diferido: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    debitosEstimados: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    totalPago: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    estado: {
      type: DataTypes.STRING,
      allowNull: false
    },
    fechaEmision: {
      type: DataTypes.DATE,
      allowNull: false
    },
    usuario: {
      type: DataTypes.STRING,
      allowNull: false
    },
    fechaModificacion: {
      type: DataTypes.DATE,
      allowNull: true
    },
    fechaArchivo: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    tableName: 'MA_PAGOS_ELECTRONICOS'
  });
};
