/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('MA_DENOMINA_RES_INGRESOS', {
    cs_denominacion: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '',
      primaryKey: true
    },
    cs_tipo: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    cs_descri: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    id: {
      type: DataTypes.DOUBLE,
      allowNull: false
    }
  }, {
    tableName: 'MA_DENOMINA_RES_INGRESOS'
  });
};
