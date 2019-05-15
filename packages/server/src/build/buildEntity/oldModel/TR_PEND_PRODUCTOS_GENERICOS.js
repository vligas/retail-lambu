/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TR_PEND_PRODUCTOS_GENERICOS', {
    ID: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    cCodigo: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    cDescripcion: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    TIPO_CAMBIO: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((0))'
    },
    cNota: {
      type: DataTypes.TEXT,
      allowNull: false,
      defaultValue: ''
    }
  }, {
    tableName: 'TR_PEND_PRODUCTOS_GENERICOS'
  });
};
