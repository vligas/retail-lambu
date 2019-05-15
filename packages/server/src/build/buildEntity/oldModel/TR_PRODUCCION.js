/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TR_PRODUCCION', {
    C_FORMULA: {
      type: DataTypes.STRING,
      allowNull: false
    },
    N_CANTIDAD: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    N_MERMA: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    C_PRESENTA: {
      type: DataTypes.STRING,
      allowNull: false
    },
    C_CODPRODUCTO: {
      type: DataTypes.STRING,
      allowNull: false
    },
    N_COSTO: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    C_CODMONEDA: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: '0000000001'
    },
    B_PRODUCIR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '((0))'
    },
    nu_factorcosto: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((1))'
    },
    cs_codlocalidad: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    }
  }, {
    tableName: 'TR_PRODUCCION'
  });
};
