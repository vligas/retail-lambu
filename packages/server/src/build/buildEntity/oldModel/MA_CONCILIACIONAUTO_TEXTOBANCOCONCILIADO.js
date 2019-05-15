/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('MA_CONCILIACIONAUTO_TEXTOBANCOCONCILIADO', {
    codigoBanco: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '',
      primaryKey: true
    },
    montoBanco: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))',
      primaryKey: true
    },
    fechaBanco: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: '(getdate())',
      primaryKey: true
    },
    codigoStellar: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    }
  }, {
    tableName: 'MA_CONCILIACIONAUTO_TEXTOBANCOCONCILIADO'
  });
};
