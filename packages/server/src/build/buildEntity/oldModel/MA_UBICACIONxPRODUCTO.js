/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('MA_UBICACIONxPRODUCTO', {
    cu_Deposito: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    cu_Producto: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    cu_Mascara: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    n_Linea: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((0))'
    },
    ID: {
      type: DataTypes.DOUBLE,
      allowNull: false
    }
  }, {
    tableName: 'MA_UBICACIONxPRODUCTO'
  });
};
