/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('MA_CIERRECAJA', {
    CodUsuario: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Fecha: {
      type: DataTypes.DATE,
      allowNull: false
    },
    HoraInicio: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: '(getdate())'
    },
    HoraFin: {
      type: DataTypes.DATE,
      allowNull: true
    },
    Monto: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    MontoFondo: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    Cerrada: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: '0'
    },
    ID: {
      type: DataTypes.DOUBLE,
      allowNull: false
    }
  }, {
    tableName: 'MA_CIERRECAJA'
  });
};
