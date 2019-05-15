/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TR_PEND_SUBGRUPOS', {
    c_CODIGO: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    c_DESCRIPCIO: {
      type: DataTypes.STRING,
      allowNull: false
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
    id: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    TIPO_CAMBIO: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((0))'
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
    }
  }, {
    tableName: 'TR_PEND_SUBGRUPOS'
  });
};
