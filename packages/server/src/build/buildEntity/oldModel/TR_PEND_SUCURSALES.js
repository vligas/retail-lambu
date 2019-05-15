/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TR_PEND_SUCURSALES', {
    C_CODIGO: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    C_DESCRIPCION: {
      type: DataTypes.STRING,
      allowNull: false
    },
    C_DIRECCION: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    C_GERENTE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    C_SUBGERENTE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    C_TELEFONO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    C_ESTADO: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((0))'
    },
    C_SERVIDOR: {
      type: DataTypes.STRING,
      allowNull: false
    },
    B_TRASMITIR: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: '0'
    },
    B_ACTVAD10: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: '1'
    },
    TIPO_CAMBIO: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((0))'
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
    },
    ID: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    }
  }, {
    tableName: 'TR_PEND_SUCURSALES'
  });
};
