/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('MA_REGLASDENEGOCIO_OLD_BAK', {
    IDModulo: {
      type: DataTypes.STRING,
      allowNull: false
    },
    IDProceso: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Campo: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Descripcion: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Tipo: {
      type: DataTypes.STRING,
      allowNull: false
    },
    ValorDefault: {
      type: DataTypes.STRING,
      allowNull: false
    },
    ValoresPermitidos: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Valor: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Oculto: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    }
  }, {
    tableName: 'MA_REGLASDENEGOCIO_OLD_BAK'
  });
};
