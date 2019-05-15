/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('MA_DISPOSITIVOS', {
    C_CODIGO: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    N_PUERTO: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((0))'
    },
    N_BAUDIOS: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    C_PARIDAD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    N_DATO: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((0))'
    },
    N_PARADA: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((0))'
    },
    C_PARALELO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    C_TecnSele: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    C_OPOS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    }
  }, {
    tableName: 'MA_DISPOSITIVOS'
  });
};
