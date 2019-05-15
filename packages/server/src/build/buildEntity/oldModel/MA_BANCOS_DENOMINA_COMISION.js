/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('MA_BANCOS_DENOMINA_COMISION', {
    cs_banco: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '',
      primaryKey: true
    },
    cs_denomina: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '',
      primaryKey: true
    },
    ns_porcentaje: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: '((0))'
    },
    ns_concepto: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))',
      primaryKey: true
    },
    ns_PorcOtroBanco: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: '((0))'
    }
  }, {
    tableName: 'MA_BANCOS_DENOMINA_COMISION'
  });
};
