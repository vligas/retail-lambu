/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('MA_COMPRAS_RETENCIONES', {
    CS_DOCUMENTO: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    CS_DESCRIPCION: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    NS_CONCEPTO: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      primaryKey: true
    },
    NS_MONTOBASE: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    NS_PORCENTAJE: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    NS_MONTO: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    FS_FECHA_HORA: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: '(getdate())'
    },
    NU_ITEM_APLICAR: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((0))'
    },
    NU_ACEPTA_PARCIALES: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: '0'
    },
    NU_EVENTO: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((0))'
    },
    cs_correlativo: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '',
      primaryKey: true
    },
    CS_CONCEPTO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'COM',
      primaryKey: true
    },
    NS_SUSTRAENDO: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    }
  }, {
    tableName: 'MA_COMPRAS_RETENCIONES'
  });
};
