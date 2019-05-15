/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('MA_ALERTAGRID_PROCESOS', {
    c_Proceso: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    c_Descripcion: {
      type: DataTypes.STRING,
      allowNull: false
    },
    c_D_ResourceID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((0))'
    }
  }, {
    tableName: 'MA_ALERTAGRID_PROCESOS'
  });
};
