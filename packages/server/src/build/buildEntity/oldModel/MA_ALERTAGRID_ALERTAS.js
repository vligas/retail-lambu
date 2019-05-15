/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('MA_ALERTAGRID_ALERTAS', {
    c_Alerta: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    c_Descripcion_Evento: {
      type: DataTypes.STRING,
      allowNull: false
    },
    n_ColorLineaGrid: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    c_D_E_ResourceID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((0))'
    }
  }, {
    tableName: 'MA_ALERTAGRID_ALERTAS'
  });
};
