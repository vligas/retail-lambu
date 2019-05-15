/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TR_PEND_DEPARTAMENTOS', {
    C_CODIGO: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    C_DESCRIPCIO: {
      type: DataTypes.STRING,
      allowNull: false
    },
    C_GRUPO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    C_OBSERVACIO: {
      type: DataTypes.TEXT,
      allowNull: false,
      defaultValue: ''
    },
    ID: {
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
    tableName: 'TR_PEND_DEPARTAMENTOS'
  });
};
