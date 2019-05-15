/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CONFIGURAR_SAL', {
    c_codigo: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' ',
      primaryKey: true
    },
    N_SALTOS: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))'
    },
    ID: {
      type: DataTypes.DOUBLE,
      allowNull: false
    }
  }, {
    tableName: 'CONFIGURAR_SAL'
  });
};
