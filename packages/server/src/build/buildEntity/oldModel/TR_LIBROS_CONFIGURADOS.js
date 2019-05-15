/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TR_LIBROS_CONFIGURADOS', {
    CS_DOCUMENTO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    CS_CAMPOTABLA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    CS_CAMPORPT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    CS_CAMPOMOSTRAR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    NS_TIPOCAMPO: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((0))'
    },
    NS_ORDEN: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((0))'
    },
    BS_TOTALIZA: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: '0'
    },
    BS_AUTOAJUSTAR: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: '0'
    },
    NS_ANCHO: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))'
    },
    ID: {
      type: DataTypes.DOUBLE,
      allowNull: false
    }
  }, {
    tableName: 'TR_LIBROS_CONFIGURADOS'
  });
};
