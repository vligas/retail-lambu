/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('MA_ERRORCORRIDAS_AGENTE_ADM', {
    equipo: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    corrida: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    error: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    nerror: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))'
    },
    sucursal: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    tabla: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    codigo: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    concepto: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    fecha: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: '(getdate())'
    },
    tipo: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((0))'
    },
    rutina: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
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
    tableName: 'MA_ERRORCORRIDAS_AGENTE_ADM'
  });
};
