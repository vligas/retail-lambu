/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('MA_TRIBUTOS', {
    c_codigo: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    c_descripcio: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    c_termino: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    n_alicuota: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    c_clasificacion: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    c_ventas: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: '0'
    },
    c_compras: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: '0'
    },
    c_renta: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: '((0))'
    }
  }, {
    tableName: 'MA_TRIBUTOS'
  });
};
