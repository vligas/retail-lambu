/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('MA_USUARIOS', {
    codusuario: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' ',
      primaryKey: true
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    login_name: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    descripcion: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    clave: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    localidad: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    Nivel: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: '((0))'
    },
    Vendedor: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: '((0))'
    },
    add_date: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: '(((11)/(11))/(2000))'
    },
    update_date: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: '(((11)/(11))/(2000))'
    },
    tipo_usuario: {
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
    BU_CAMBIA_CLAVE: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((0))'
    },
    ID: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    BS_ACTIVO: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: '1'
    }
  }, {
    tableName: 'MA_USUARIOS'
  });
};
