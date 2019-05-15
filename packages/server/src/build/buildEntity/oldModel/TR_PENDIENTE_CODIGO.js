/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TR_PENDIENTE_CODIGO', {
    c_Codigo: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    c_CodNasa: {
      type: DataTypes.STRING,
      allowNull: false
    },
    c_Descripcion: {
      type: DataTypes.STRING,
      allowNull: false
    },
    n_Cantidad: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((1))'
    },
    nu_Intercambio: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((0))'
    },
    TipoCambio: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((0))'
    },
    nu_TipoPrecio: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((0))'
    },
    ID: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    }
  }, {
    tableName: 'TR_PENDIENTE_CODIGO'
  });
};
