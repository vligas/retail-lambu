/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TR_DESPACHO', {
    c_detalle: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    c_codorden: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    c_codigo: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    c_descripcion: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    n_cant: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    n_cant_recibida: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    n_cant_despachada: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    n_costo: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    }
  }, {
    tableName: 'TR_DESPACHO'
  });
};
