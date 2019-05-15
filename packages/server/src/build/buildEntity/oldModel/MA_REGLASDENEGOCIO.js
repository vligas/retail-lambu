/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('MA_REGLASDENEGOCIO', {
    IDModulo: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    IDProceso: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    Campo: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    Descripcion: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    Tipo: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    ValorDefault: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    ValoresPermitidos: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    Valor: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '((0))'
    },
    Oculto: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: '0'
    }
  }, {
    tableName: 'MA_REGLASDENEGOCIO'
  });
};
