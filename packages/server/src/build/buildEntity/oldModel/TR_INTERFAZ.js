/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TR_INTERFAZ', {
    cs_codigo: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    cs_campo_tabla: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    cs_campo: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    nu_longitud: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((0))'
    },
    cu_caracter_relleno: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ''
    },
    cu_lado_relleno: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ''
    },
    cu_separador: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ''
    },
    cu_valor_predeterminado: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    cu_caracteres_no_permitidos: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    nu_posicion: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((0))'
    }
  }, {
    tableName: 'TR_INTERFAZ'
  });
};
