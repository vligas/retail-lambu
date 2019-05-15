/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('MA_CONCILIACIONAUTO_TEMPORAL', {
    codigoTransaccion: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '',
      primaryKey: true
    },
    detalleTransaccion: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    numeroTransaccion: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    montoTransaccion: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    fechaTransaccion: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: '(getdate())'
    },
    tipoTransaccion: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    }
  }, {
    tableName: 'MA_CONCILIACIONAUTO_TEMPORAL'
  });
};
