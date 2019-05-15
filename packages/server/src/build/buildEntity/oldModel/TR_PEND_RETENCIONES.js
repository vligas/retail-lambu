/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TR_PEND_RETENCIONES', {
    CS_RETENCION: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '',
      primaryKey: true
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
    NU_NIVEL: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((0))'
    },
    NU_TIPO_CAMBIO: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    ID: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    }
  }, {
    tableName: 'TR_PEND_RETENCIONES'
  });
};
