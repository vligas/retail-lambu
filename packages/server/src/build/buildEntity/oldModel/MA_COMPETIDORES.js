/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('MA_COMPETIDORES', {
    C_codigo: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    Rif: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Descripcion: {
      type: DataTypes.STRING,
      allowNull: false
    },
    RazonSocial: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Localidad: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Observacion: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Status: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Alias: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    tableName: 'MA_COMPETIDORES'
  });
};
