/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TR_CIERRES', {
    c_DOCUMENTO: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    d_FECHA: {
      type: DataTypes.DATE,
      allowNull: false
    },
    c_CODLOCALIDAD: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    c_CODMONEDA: {
      type: DataTypes.STRING,
      allowNull: false
    },
    c_CODDENOMINA: {
      type: DataTypes.STRING,
      allowNull: false
    },
    c_CODBANCO: {
      type: DataTypes.STRING,
      allowNull: false
    },
    n_FACTOR: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    n_CANTIDAD: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    n_BOLIVARES: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    c_TDC: {
      type: DataTypes.STRING,
      allowNull: false
    },
    c_cerrado: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    tableName: 'TR_CIERRES'
  });
};
