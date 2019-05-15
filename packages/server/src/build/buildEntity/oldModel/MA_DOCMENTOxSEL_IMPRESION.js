/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('MA_DOCMENTOxSEL_IMPRESION', {
    c_documento: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    n_Sel_impresion: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((0))'
    }
  }, {
    tableName: 'MA_DOCMENTOxSEL_IMPRESION'
  });
};
