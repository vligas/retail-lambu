/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TR_COSTOS_INT', {
    c_des_costo: {
      type: DataTypes.STRING,
      allowNull: true
    },
    c_des_moneda: {
      type: DataTypes.STRING,
      allowNull: true
    },
    n_fac_moneda: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    n_monto: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    c_cod_costo: {
      type: DataTypes.STRING,
      allowNull: true
    },
    c_cod_moneda: {
      type: DataTypes.STRING,
      allowNull: true
    },
    c_gru_costo: {
      type: DataTypes.STRING,
      allowNull: true
    },
    c_codigo: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    }
  }, {
    tableName: 'TR_COSTOS_INT'
  });
};
