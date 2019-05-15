/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('MA_VENTAS_IMPUESTOS', {
    cs_documento: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    cs_TIPODOC: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    ns_BaseImpuesto: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    ns_MontoImpuesto: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    ns_PorcentajeImpuesto: {
      type: DataTypes.FLOAT,
      allowNull: false,
      primaryKey: true
    },
    cs_codProveedor: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    cs_codlocalidad: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    }
  }, {
    tableName: 'MA_VENTAS_IMPUESTOS'
  });
};
