/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ESTRUC_ORG', {
    Relacion: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tiporel: {
      type: DataTypes.STRING,
      allowNull: true
    },
    Clave: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    texto: {
      type: DataTypes.STRING,
      allowNull: false
    },
    imagen: {
      type: DataTypes.STRING,
      allowNull: false
    },
    tag: {
      type: DataTypes.STRING,
      allowNull: false
    },
    ID: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    tableName: 'ESTRUC_ORG'
  });
};
