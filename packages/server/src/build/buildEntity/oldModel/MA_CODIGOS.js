/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('MA_CODIGOS', {
    c_CodNasa: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    c_Codigo: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    c_Descripcion: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '(NCODIGO MAESTRO'
    },
    n_Cantidad: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((1))'
    },
    nu_Intercambio: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((1))'
    },
    nu_TipoPrecio: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((0))'
    },
    ID: {
      type: DataTypes.DOUBLE,
      allowNull: false
    }
  }, {
    tableName: 'MA_CODIGOS'
  });
};
