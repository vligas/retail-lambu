/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('MA_BANCO_CONFIG', {
    n_MONTOMAX: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    n_DEBITOBAN: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    n_DIF_MBAN: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((1))'
    },
    n_DIF_PBAN: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((1))'
    },
    n_DIF_OPBAN: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((1))'
    }
  }, {
    tableName: 'MA_BANCO_CONFIG'
  });
};
