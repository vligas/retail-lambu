/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CONFIGURAR_DOC', {
    CODIGO_GRUPO: {
      type: DataTypes.STRING,
      allowNull: true
    },
    CODIGO: {
      type: DataTypes.STRING,
      allowNull: true
    },
    DESCRIPCION: {
      type: DataTypes.STRING,
      allowNull: true
    },
    RUTA: {
      type: DataTypes.STRING,
      allowNull: true
    },
    SEIMPRIME: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    ID: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    tableName: 'CONFIGURAR_DOC'
  });
};
