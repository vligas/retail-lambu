/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('MA_SUBIDA_ARCHIVO', {
    IDSUBIDA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    C_NOMBRE_ARCHIVO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    F_FECHA: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: '(((1)/(1))/(1900))'
    }
  }, {
    tableName: 'MA_SUBIDA_ARCHIVO'
  });
};
