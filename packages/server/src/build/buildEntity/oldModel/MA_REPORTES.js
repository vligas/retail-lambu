/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('MA_REPORTES', {
    CodPlantilla: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    Descripcion: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    TipoNomina: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    Ubicacion: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    Archivo: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    Reescribir: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: '0'
    },
    Fecha: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: '0'
    },
    Servidor: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    BaseDatos: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    }
  }, {
    tableName: 'MA_REPORTES'
  });
};
