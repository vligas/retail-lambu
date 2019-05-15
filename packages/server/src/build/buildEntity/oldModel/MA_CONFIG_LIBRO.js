/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('MA_CONFIG_LIBRO', {
    CS_CAMPO: {
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
    NS_TIPOCAMPO: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((0))'
    },
    NS_POSICION: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((0))'
    },
    BS_TOTALIZA: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: '0'
    },
    BS_VENTAS: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((0))'
    },
    NS_ORDEN: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((0))'
    },
    NS_ANCHO: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((0))'
    }
  }, {
    tableName: 'MA_CONFIG_LIBRO'
  });
};
