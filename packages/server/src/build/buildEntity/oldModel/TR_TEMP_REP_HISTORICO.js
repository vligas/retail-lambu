/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TR_TEMP_REP_HISTORICO', {
    c_codarticulo: {
      type: DataTypes.STRING,
      allowNull: false
    },
    n_cant_teorica: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    n_costo: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    n_total: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    f_fecha: {
      type: DataTypes.DATE,
      allowNull: false
    },
    C_documento: {
      type: DataTypes.STRING,
      allowNull: false
    },
    c_deposito: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    tableName: 'TR_TEMP_REP_HISTORICO'
  });
};
