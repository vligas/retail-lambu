/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('MA_ESTRUCT_REPORT', {
    Relacion: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    Clave: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    texto: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    imagen: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    tag: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    ruta: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    id: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    NiveldeOrden: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((1))'
    },
    ModoImpresion: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((0))'
    },
    puerto: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    }
  }, {
    tableName: 'MA_ESTRUCT_REPORT'
  });
};
