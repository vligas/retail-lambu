/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TR_ESTRUCT_REPORT', {
    cs_CODIGO_REPORTE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '',
      primaryKey: true,
      references: {
        model: 'MA_ESTRUCT_REPORT',
        key: 'Clave'
      }
    },
    cs_CAMPO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '',
      primaryKey: true
    },
    cs_DESCRIPCION: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    cs_NOMBRE_VARIABLE: {
      type: DataTypes.STRING,
      allowNull: false
    },
    cs_TIPOCAMPO: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((0))'
    },
    ID: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    cu_FORMATONUMERICO: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((0))'
    },
    cu_CANTIDADEDECIMALES: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((0))'
    },
    Cu_Activo: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((1))'
    }
  }, {
    tableName: 'TR_ESTRUCT_REPORT'
  });
};
