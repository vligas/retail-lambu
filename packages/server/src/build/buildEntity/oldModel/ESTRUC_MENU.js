/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ESTRUC_MENU', {
    Relacion: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tiporel: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'tvwchild'
    },
    Clave: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' ',
      primaryKey: true
    },
    texto: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    imagen: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    tag: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    pos: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((0))'
    },
    id: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    ResourceId: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '((0))'
    },
    OpcionDisponible: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: '1'
    }
  }, {
    tableName: 'ESTRUC_MENU'
  });
};
