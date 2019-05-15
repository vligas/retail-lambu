/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('MA_CONCILIACIONAUTO_CAMBIOARCHIVO', {
    codigoBanco: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    codigoCuenta: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    nombreCampo: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    tipoCampo: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    origen: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    destino: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    }
  }, {
    tableName: 'MA_CONCILIACIONAUTO_CAMBIOARCHIVO'
  });
};
