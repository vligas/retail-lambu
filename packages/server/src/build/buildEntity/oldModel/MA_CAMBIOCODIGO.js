/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('MA_CAMBIOCODIGO', {
    c_Historico: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    f_Fecha: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: '(getdate())'
    },
    c_TipoReg: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    c_CodAfectado: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    c_Usuario: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    c_CodStellar: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    }
  }, {
    tableName: 'MA_CAMBIOCODIGO'
  });
};
