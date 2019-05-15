/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('MA_PEDIDOS_RUTA', {
    cs_Corrida: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    d_Fecha: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: '01/01/1900'
    },
    d_FechaCorrida: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: '(getdate())'
    },
    c_Usuario: {
      type: DataTypes.STRING,
      allowNull: false
    },
    c_Zona: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    c_Ruta: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    c_Transporte: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    b_Facturada: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: '0'
    },
    Picking: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: '0'
    },
    Packing: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: '0'
    },
    nTipoSeparacionDetalle: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))'
    }
  }, {
    tableName: 'MA_PEDIDOS_RUTA'
  });
};
