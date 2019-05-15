/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TR_ODC', {
    c_DOCUMENTO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '((1))'
    },
    c_LINEA: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((0))'
    },
    c_CODARTICULO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    n_CANTIDAD: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    n_COSTO: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    n_subtotal: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    n_impuesto: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    n_total: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    n_CANT_RECIBIDA: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    n_porcentajeimp: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    n_porcentajeimp1: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    n_porcentajeimp2: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    c_codprincipal: {
      type: DataTypes.STRING,
      allowNull: true
    },
    n_costooriginal: {
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
    C_CAMXREP: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: '0'
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
    },
    C_MONEDA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    N_DECIMALES: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((0))'
    },
    N_PROD_EXT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    c_descripcion: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    n_descuentoespecifico: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    n_descuentogeneral: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    ns_cantidadempaque: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    cs_codlocalidad: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    n_id: {
      type: DataTypes.DOUBLE,
      allowNull: false
    }
  }, {
    tableName: 'TR_ODC'
  });
};
