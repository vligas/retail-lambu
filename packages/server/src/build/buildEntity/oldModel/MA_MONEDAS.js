/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('MA_MONEDAS', {
    c_codmoneda: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    c_descripcion: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    n_factor: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    b_preferencia: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: '0'
    },
    c_observacio: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    b_activa: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: '1'
    },
    c_simbolo: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    n_decimales: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((2))'
    }
  }, {
    tableName: 'MA_MONEDAS'
  });
};
