/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('MA_MODIFICACIONESRECMOVIL', {
    usuario: {
      type: DataTypes.STRING,
      allowNull: false
    },
    fecha: {
      type: DataTypes.DATE,
      allowNull: false
    },
    numeroODC: {
      type: DataTypes.STRING,
      allowNull: false
    },
    codigoProveedor: {
      type: DataTypes.STRING,
      allowNull: false
    },
    id: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    documento: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    tableName: 'MA_MODIFICACIONESRECMOVIL'
  });
};
