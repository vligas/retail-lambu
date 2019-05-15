/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('MA_PROCESOS', {
    IDProceso: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      primaryKey: true
    },
    Proceso: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    Tabla: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    Concepto: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    Documento: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '((1))'
    },
    AceptaClasificacion: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((0))'
    },
    IDProcesoEmisor: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))'
    }
  }, {
    tableName: 'MA_PROCESOS'
  });
};
