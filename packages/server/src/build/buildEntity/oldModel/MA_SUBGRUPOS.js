/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('MA_SUBGRUPOS', {
    c_CODIGO: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    c_DESCRIPCIO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    c_GRUPO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    c_OBSERVACIO: {
      type: DataTypes.TEXT,
      allowNull: false,
      defaultValue: ''
    },
    c_in_grupo: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    c_in_departamento: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    NU_PORCUTILIDAD: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    ID: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    B_LIBROLICORES: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: '0'
    }
  }, {
    tableName: 'MA_SUBGRUPOS'
  });
};
