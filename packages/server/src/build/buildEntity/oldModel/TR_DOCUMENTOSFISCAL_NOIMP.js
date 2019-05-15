/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TR_DOCUMENTOSFISCAL_NOIMP', {
    usuario: {
      type: DataTypes.STRING,
      allowNull: false
    },
    localidad: {
      type: DataTypes.STRING,
      allowNull: false
    },
    documento: {
      type: DataTypes.STRING,
      allowNull: false
    },
    concepto: {
      type: DataTypes.STRING,
      allowNull: false
    },
    fechahora: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: '(getdate())'
    },
    id: {
      type: DataTypes.DOUBLE,
      allowNull: false
    }
  }, {
    tableName: 'TR_DOCUMENTOSFISCAL_NOIMP'
  });
};
