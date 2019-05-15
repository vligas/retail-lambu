/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TR_CONS_PRECIOS', {
    N_LINEA: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    C_DOCUMENTO: {
      type: DataTypes.STRING,
      allowNull: false
    },
    C_CODARTICULO: {
      type: DataTypes.STRING,
      allowNull: false
    },
    C_DESCRIPCION: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    c_modelo: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    N_COSTOACT: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    N_DESC1: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    N_DESC2: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    N_DESC3: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    N_COSTOFIN: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    C_DEPARTAMENTO: {
      type: DataTypes.STRING,
      allowNull: true
    },
    C_GRUPO: {
      type: DataTypes.STRING,
      allowNull: true
    },
    C_SUBGRUPO: {
      type: DataTypes.STRING,
      allowNull: true
    },
    N_PROD_EXT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    C_CAMXREP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '((0))'
    },
    N_PRECIO_REP1: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    N_PRECIO_REP2: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    N_PRECIO_REP3: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    N_COSTOREP: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    }
  }, {
    tableName: 'TR_CONS_PRECIOS'
  });
};
