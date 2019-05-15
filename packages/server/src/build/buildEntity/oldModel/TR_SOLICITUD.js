/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TR_SOLICITUD', {
    c_DOCUMENTO: {
      type: DataTypes.STRING,
      allowNull: false
    },
    c_CODARTICULO: {
      type: DataTypes.STRING,
      allowNull: false
    },
    n_CANTIDAD: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    n_COSTO: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    n_subtotal: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    n_porcentajeimp: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    n_porcentajeimp1: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    n_porcentajeimp2: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    c_codprincipal: {
      type: DataTypes.STRING,
      allowNull: false
    },
    n_COSTOORIGINAL: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    N_PROD_EXT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    id: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    c_descripcion: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    TR_SOLICITUD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '0'
    },
    cs_codlocalidad: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    ns_CantidadEmpaque: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((1))'
    }
  }, {
    tableName: 'TR_SOLICITUD'
  });
};
