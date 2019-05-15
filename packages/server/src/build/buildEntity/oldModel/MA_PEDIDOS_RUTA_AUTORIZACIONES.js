/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('MA_PEDIDOS_RUTA_AUTORIZACIONES', {
    cs_Corrida: {
      type: DataTypes.STRING,
      allowNull: false
    },
    c_Documento_Ped: {
      type: DataTypes.STRING,
      allowNull: false
    },
    c_Documento_Ven: {
      type: DataTypes.STRING,
      allowNull: false
    },
    c_Cliente: {
      type: DataTypes.STRING,
      allowNull: false
    },
    c_DescriCliente: {
      type: DataTypes.STRING,
      allowNull: false
    },
    c_Usuario_Auto: {
      type: DataTypes.STRING,
      allowNull: false
    },
    ID: {
      type: DataTypes.DOUBLE,
      allowNull: false
    }
  }, {
    tableName: 'MA_PEDIDOS_RUTA_AUTORIZACIONES'
  });
};
