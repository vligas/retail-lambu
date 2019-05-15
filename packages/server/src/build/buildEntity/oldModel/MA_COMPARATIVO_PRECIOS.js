/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('MA_COMPARATIVO_PRECIOS', {
    c_codigo: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    d_Fecha: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    TipoPrecio: {
      type: DataTypes.STRING,
      allowNull: false
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Observacion: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Descripcion: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    tableName: 'MA_COMPARATIVO_PRECIOS'
  });
};
