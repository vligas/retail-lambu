/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TR_Automatico', {
    IDDeAutomatico: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    IDDeCuenta: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    Codigo: {
      type: DataTypes.STRING,
      allowNull: true
    },
    Descripcion: {
      type: DataTypes.STRING,
      allowNull: true
    },
    Tipo: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    Formula: {
      type: DataTypes.STRING,
      allowNull: true
    },
    CentroCosto: {
      type: DataTypes.STRING,
      allowNull: true
    },
    DescripcionMov: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'TR_Automatico'
  });
};
