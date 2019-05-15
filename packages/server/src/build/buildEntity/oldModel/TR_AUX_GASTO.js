/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TR_AUX_GASTO', {
    c_detalle: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    c_factura: {
      type: DataTypes.STRING,
      allowNull: false
    },
    c_codprovee: {
      type: DataTypes.STRING,
      allowNull: false
    },
    c_grupo: {
      type: DataTypes.STRING,
      allowNull: false
    },
    c_descripcion: {
      type: DataTypes.STRING,
      allowNull: false
    },
    n_monto: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    c_item: {
      type: DataTypes.STRING,
      allowNull: false
    },
    C_CODIGO: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    tableName: 'TR_AUX_GASTO'
  });
};
