/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Hoja1$', {
    CODIGO: {
      type: DataTypes.STRING,
      allowNull: true
    },
    DESCRIPCION: {
      type: DataTypes.STRING,
      allowNull: true
    },
    MODELO: {
      type: DataTypes.STRING,
      allowNull: true
    },
    DEPARTAMENTO: {
      type: DataTypes.STRING,
      allowNull: true
    },
    GRUPO: {
      type: DataTypes.STRING,
      allowNull: true
    },
    TIPO: {
      type: DataTypes.STRING,
      allowNull: true
    },
    UBICACIÓN: {
      type: DataTypes.STRING,
      allowNull: true
    },
    STOCK : {
      type: DataTypes.STRING,
      allowNull: true
    },
    COSTO_ACT: {
      type: DataTypes.STRING,
      allowNull: true
    },
    PRECIO1: {
      type: DataTypes.STRING,
      allowNull: true
    },
    PRECIO2: {
      type: DataTypes.STRING,
      allowNull: true
    },
    PRECIO3: {
      type: DataTypes.STRING,
      allowNull: true
    },
    F13: {
      type: DataTypes.STRING,
      allowNull: true
    },
    F14: {
      type: DataTypes.STRING,
      allowNull: true
    },
    F15: {
      type: DataTypes.STRING,
      allowNull: true
    },
    F16: {
      type: DataTypes.STRING,
      allowNull: true
    },
    F17: {
      type: DataTypes.STRING,
      allowNull: true
    },
    F18: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'Hoja1$'
  });
};
