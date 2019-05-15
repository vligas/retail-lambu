/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ESTRUC_REPORT', {
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
    ruta: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    seimprime: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    orden: {
      type: DataTypes.STRING,
      allowNull: true
    },
    ordenar: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((0))'
    },
    replaceone: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((0))'
    },
    ENCABEZADO: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((0))'
    },
    distribuyeenhoja: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((0))'
    }
  }, {
    tableName: 'ESTRUC_REPORT'
  });
};
