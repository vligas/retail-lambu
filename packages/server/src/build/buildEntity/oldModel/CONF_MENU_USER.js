/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CONF_MENU_USER', {
    clave_user: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    clave_menu: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    texto: {
      type: DataTypes.STRING,
      allowNull: true
    },
    activado: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    icono: {
      type: DataTypes.STRING,
      allowNull: true
    },
    forma: {
      type: DataTypes.STRING,
      allowNull: true
    },
    RELACION: {
      type: DataTypes.STRING,
      allowNull: true
    },
    id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    ResourceId: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '0'
    },
    OpcionDisponible: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: '1'
    }
  }, {
    tableName: 'CONF_MENU_USER'
  });
};
