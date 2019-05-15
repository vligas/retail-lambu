/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('MA_CORRELATIVOS', {
    cu_Campo: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '((1))',
      primaryKey: true
    },
    cu_Descripcion: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    nu_Valor: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((1))'
    },
    cu_Formato: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '0000000000'
    }
  }, {
    tableName: 'MA_CORRELATIVOS'
  });
};
