/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TR_PEND_USUARIOS', {
    CODUSUARIO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    PASSWORD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    LOGIN_NAME: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    DESCRIPCION: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    CLAVE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    LOCALIDAD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    NIVEL: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((1))'
    },
    VENDEDOR: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))'
    },
    ADD_DATE: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: '(getdate())'
    },
    UPDATE_DATE: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: '(getdate())'
    },
    TIPO_USUARIO: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: '0'
    },
    MOD_PRECIO_VENTA: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: '0'
    },
    MOD_COSTO_COMPRA: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: '0'
    },
    TIPO_CAMBIO: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((0))'
    },
    ID: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    BU_CAMBIA_CLAVE: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((0))'
    },
    BS_ACTIVO: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: '1'
    }
  }, {
    tableName: 'TR_PEND_USUARIOS'
  });
};
