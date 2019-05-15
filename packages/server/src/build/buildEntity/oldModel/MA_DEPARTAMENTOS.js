/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('MA_DEPARTAMENTOS', {
    C_CODIGO: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    C_DESCRIPCIO: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    C_GRUPO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    C_OBSERVACIO: {
      type: DataTypes.TEXT,
      allowNull: false,
      defaultValue: ' '
    },
    NU_PORCUTILIDAD: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    B_LIBROLICORES: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: '0'
    },
    ID: {
      type: DataTypes.DOUBLE,
      allowNull: false
    }
  }, {
    tableName: 'MA_DEPARTAMENTOS'
  });
};
