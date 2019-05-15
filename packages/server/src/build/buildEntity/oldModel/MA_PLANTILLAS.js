/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('MA_PLANTILLAS', {
    id: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    c_cod_plantilla: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' ',
      primaryKey: true
    },
    descripcion: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    relacion: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tiporel: {
      type: DataTypes.STRING,
      allowNull: true
    },
    clave: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
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
    campo: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    prioridad: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((1))'
    },
    fechacreacion: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: '(((11)/(11))/(2000))'
    },
    tamanocolgrid: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))'
    },
    tipoproducto: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    campoclave: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    esgrupo: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: '0'
    },
    AutoIntervalo: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: '0'
    }
  }, {
    tableName: 'MA_PLANTILLAS'
  });
};
