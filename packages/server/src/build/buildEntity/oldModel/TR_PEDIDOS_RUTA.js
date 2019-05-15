/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TR_PEDIDOS_RUTA', {
    cs_Corrida: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    c_Documento: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '',
      primaryKey: true
    },
    c_Concepto: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    c_CodLocalidad: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '',
      primaryKey: true
    },
    d_Fecha: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: '01/01/1900'
    },
    c_Documento_Ven: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    n_Subtotal: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    n_Impuesto: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    n_Total: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    c_Documento_NDE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    }
  }, {
    tableName: 'TR_PEDIDOS_RUTA'
  });
};
