/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ESTRUC_REPORT_CONTROLESRTF', {
    CS_TIPODOC: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    CS_NUMEROCONTROL: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    CS_DESCRIPCION: {
      type: DataTypes.STRING,
      allowNull: false
    },
    CS_CADENACONTROL: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    tableName: 'ESTRUC_REPORT_CONTROLESRTF'
  });
};
