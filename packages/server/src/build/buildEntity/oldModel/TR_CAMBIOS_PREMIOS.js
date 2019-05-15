/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TR_CAMBIOS_PREMIOS', {
    cs_documento: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    cs_codigopremio: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    cs_descripremio: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    ns_valor: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    id: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    cs_tipo: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'CAM'
    },
    ns_cantidad: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((0))'
    },
    nu_tipopremio: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((0))'
    },
    CS_SUCURSAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    ns_valorcambio: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    }
  }, {
    tableName: 'TR_CAMBIOS_PREMIOS'
  });
};
