/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('MA_RTF_ESC', {
    cs_codigo_Rtf: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '',
      primaryKey: true
    },
    cs_Clave_rtf: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    cs_descripcion_rtf: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    bs_directopuerto: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: '0'
    }
  }, {
    tableName: 'MA_RTF_ESC'
  });
};
