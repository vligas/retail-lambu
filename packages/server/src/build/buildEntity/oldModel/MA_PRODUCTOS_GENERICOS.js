/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('MA_PRODUCTOS_GENERICOS', {
    cCodigo: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '',
      primaryKey: true
    },
    cDescripcion: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    cNota: {
      type: DataTypes.TEXT,
      allowNull: false,
      defaultValue: ''
    }
  }, {
    tableName: 'MA_PRODUCTOS_GENERICOS'
  });
};
