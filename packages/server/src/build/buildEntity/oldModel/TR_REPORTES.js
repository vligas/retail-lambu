/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TR_REPORTES', {
    CodPlantilla: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Nombre: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '',
      primaryKey: true
    },
    Descripcion: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    Tipo: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    Longitud: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((0))'
    },
    Decimales: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((0))'
    },
    Tabla: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '',
      primaryKey: true
    },
    Predeterminado: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    Separador: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    Aplicar_Relleno: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: '0'
    },
    Relleno: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    Aplicar_Formato: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: '0'
    },
    Formato: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    Alinear: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: '0'
    },
    Ordenar: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: '0'
    },
    ID: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    tableName: 'TR_REPORTES'
  });
};
