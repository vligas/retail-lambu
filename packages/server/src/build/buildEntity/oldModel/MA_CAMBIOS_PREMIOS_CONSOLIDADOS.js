/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('MA_CAMBIOS_PREMIOS_CONSOLIDADOS', {
    cs_codigocliente: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    ds_fechacambio: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: '(getdate())'
    },
    cs_documento: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '',
      primaryKey: true
    },
    cs_usuario: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    cs_tipo: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'CAM',
      primaryKey: true
    },
    nu_puntos: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    cs_sucursal: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '',
      primaryKey: true
    },
    cs_rif: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    cs_numero_bajada: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    ds_fecha: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: '01/01/1900'
    }
  }, {
    tableName: 'MA_CAMBIOS_PREMIOS_CONSOLIDADOS'
  });
};
