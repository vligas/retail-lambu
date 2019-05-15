/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('MA_GRUPOS', {
    c_CODIGO: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    C_DESCRIPCIO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    C_GRUPO: {
      type: DataTypes.STRING,
      allowNull: true
    },
    c_OBSERVACIO: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    c_departamento: {
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
    tableName: 'MA_GRUPOS'
  });
};
