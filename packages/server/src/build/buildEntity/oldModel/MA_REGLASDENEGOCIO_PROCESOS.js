/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('MA_REGLASDENEGOCIO_PROCESOS', {
    IDModulo: {
      type: DataTypes.STRING,
      allowNull: false
    },
    IDProceso: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    DescripcionResourceID: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    Descripcion: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    tableName: 'MA_REGLASDENEGOCIO_PROCESOS'
  });
};
