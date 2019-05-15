/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('MA_SYSTABLAS', {
    TABLA: {
      type: DataTypes.STRING,
      allowNull: false
    },
    CAMPO: {
      type: DataTypes.STRING,
      allowNull: false
    },
    TIPO: {
      type: DataTypes.STRING,
      allowNull: false
    },
    LONGITUD: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    VALOR: {
      type: DataTypes.STRING,
      allowNull: false
    },
    NULO: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    }
  }, {
    tableName: 'MA_SYSTABLAS'
  });
};
