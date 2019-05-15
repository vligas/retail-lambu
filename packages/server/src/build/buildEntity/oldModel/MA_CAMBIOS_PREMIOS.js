/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('MA_CAMBIOS_PREMIOS', {
    cs_codigocliente: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '',
      primaryKey: true
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
    CS_SUCURSAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    }
  }, {
    tableName: 'MA_CAMBIOS_PREMIOS'
  });
};
