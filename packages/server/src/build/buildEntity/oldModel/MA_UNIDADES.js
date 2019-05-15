/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('MA_UNIDADES', {
    cs_codigo: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '',
      primaryKey: true
    },
    cs_descripcion: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    cs_grupo: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    }
  }, {
    tableName: 'MA_UNIDADES'
  });
};
