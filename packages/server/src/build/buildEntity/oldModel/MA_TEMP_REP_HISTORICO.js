/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('MA_TEMP_REP_HISTORICO', {
    c_codarticulo: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    Saldo: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    valorHistorico: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    c_descripcion: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    c_deposito: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    c_departamento: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    c_grupo: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    c_subgrupo: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    }
  }, {
    tableName: 'MA_TEMP_REP_HISTORICO'
  });
};
