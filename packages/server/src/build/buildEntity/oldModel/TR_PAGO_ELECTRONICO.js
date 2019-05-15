/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TR_PAGO_ELECTRONICO', {
    ID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    codigo: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    linea: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    ordenDePago: {
      type: DataTypes.STRING,
      allowNull: false
    },
    fechaLiberacion: {
      type: DataTypes.DATE,
      allowNull: false
    },
    TipoPago: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Estado: {
      type: DataTypes.STRING,
      allowNull: false
    },
    fechaModificacion: {
      type: DataTypes.DATE,
      allowNull: true
    },
    usuario: {
      type: DataTypes.STRING,
      allowNull: false
    },
    numeroCuenta: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    Archivo: {
      type: DataTypes.STRING,
      allowNull: true
    },
    Observacion: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    }
  }, {
    tableName: 'TR_PAGO_ELECTRONICO'
  });
};
