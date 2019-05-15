/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('MA_BALANZAS', {
    C_CODIGO: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    C_DESCRIPCION: {
      type: DataTypes.STRING,
      allowNull: false
    },
    C_PREFIJO: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    N_CONSECUTIVO: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((1))'
    },
    C_MARCA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    id: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    tableName: 'MA_BALANZAS'
  });
};
