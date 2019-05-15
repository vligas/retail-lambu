/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('MA_CONS_PRECIOS', {
    C_DOCUMENTO: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    C_CODPROVEEDOR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    C_DESCRIPCION: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    C_CODLOCALIDAD: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    D_FECHA: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: '(getdate())'
    },
    C_CONCEPTO: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    C_USUARIO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    C_OBSERVACION: {
      type: DataTypes.TEXT,
      allowNull: false,
      defaultValue: ''
    },
    C_STATUS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    C_RELACION: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    }
  }, {
    tableName: 'MA_CONS_PRECIOS'
  });
};
