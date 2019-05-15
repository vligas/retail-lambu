/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('MA_PROGRAMACIONPAGO_MASIVA', {
    c_CodigoProg: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    d_FechaCreacion: {
      type: DataTypes.DATE,
      allowNull: false
    },
    c_Usuario: {
      type: DataTypes.STRING,
      allowNull: false
    },
    c_Status: {
      type: DataTypes.STRING,
      allowNull: false
    },
    c_LocalidadOrigen: {
      type: DataTypes.STRING,
      allowNull: false
    },
    c_Moneda: {
      type: DataTypes.STRING,
      allowNull: false
    },
    n_TotalCxP: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    n_TotalCxC: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    n_TotalGeneral: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    c_Observacion: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    tableName: 'MA_PROGRAMACIONPAGO_MASIVA'
  });
};
