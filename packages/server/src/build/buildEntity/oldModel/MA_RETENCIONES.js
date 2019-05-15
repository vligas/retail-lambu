/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('MA_RETENCIONES', {
    CS_RETENCION: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '',
      primaryKey: true
    },
    CS_DESCRIPCION: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    NU_CONCEPTO: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      primaryKey: true
    },
    NU_ITEM_APLICAR: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((0))'
    },
    NU_PORCENTAJE_APLICAR: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    NU_EVENTO: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((0))'
    },
    NU_APLICAR_PROVEEDORES: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: '0'
    },
    NU_ACEPTA_PARCIALES: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: '0'
    },
    NU_NIVEL: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((0))'
    },
    cs_correlativo: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    NS_MONTOMIN: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    NS_PORCBASE: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((100))'
    },
    NS_SUSTRAENDO: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    }
  }, {
    tableName: 'MA_RETENCIONES'
  });
};
