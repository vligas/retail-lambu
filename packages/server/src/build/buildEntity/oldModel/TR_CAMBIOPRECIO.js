/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TR_CAMBIOPRECIO', {
    C_DOCUMENTO: {
      type: DataTypes.STRING,
      allowNull: false
    },
    C_CODARTICULO: {
      type: DataTypes.STRING,
      allowNull: false
    },
    N_PRECIO1: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    N_PRECIO2: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    N_PRECIO3: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    N_COSTO: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    N_OLDPRECIO1: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    N_OLDPRECIO2: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    N_OLDPRECIO3: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    N_TIPOPESO: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((0))'
    },
    C_DEPARTAMENTO: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: ''
    },
    C_GRUPO: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: ''
    },
    C_SUBGRUPO: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: ''
    },
    N_PROD_EXT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    }
  }, {
    tableName: 'TR_CAMBIOPRECIO'
  });
};
