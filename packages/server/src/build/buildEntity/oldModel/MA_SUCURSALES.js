/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('MA_SUCURSALES', {
    C_codigo: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    c_descripcion: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    c_direccion: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    c_gerente: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    c_subgerebte: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    c_telefono: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    c_estado: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((0))'
    },
    c_servidor: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    B_TRASMITIR: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: '0'
    },
    B_ACTVAD10: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: '0'
    },
    c_ciudad: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    c_nombre_cheque: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    cu_DireccionUltimaVersion: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    nu_ActualizarUltimaVersion: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((0))'
    },
    nu_MensajeUltimaVersion: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((0))'
    }
  }, {
    tableName: 'MA_SUCURSALES'
  });
};
