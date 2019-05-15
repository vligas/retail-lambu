/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TR_REQUISICION_DEPOSITO', {
    CS_DOCUMENTO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '((1))',
      primaryKey: true
    },
    CS_ESTADO: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    NS_LINEA: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    CS_CODARTICULO: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    CS_CODIGO_PROVEEDOR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    CS_CODEDI: {
      type: DataTypes.STRING,
      allowNull: false
    },
    CS_DESCRIPCION: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    NS_CANTIDAD: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    NS_COSTO: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    NS_CANT_RECIBIDA: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    NS_DECIMALES: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((0))'
    },
    CS_CODMONEDA: {
      type: DataTypes.STRING,
      allowNull: false
    },
    NS_FACTOR_CAMBIO: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    NS_PROD_EXT: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: ' '
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
    tableName: 'TR_REQUISICION_DEPOSITO'
  });
};
