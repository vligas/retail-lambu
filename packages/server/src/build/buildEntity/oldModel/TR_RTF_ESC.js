/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TR_RTF_ESC', {
    cs_codigo_rtf: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    cs_variable_rtf: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    ns_tipocomando: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((0))'
    },
    cs_valorvariable_rtf: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    }
  }, {
    tableName: 'TR_RTF_ESC'
  });
};
