/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('MA_REQUISICION_DEPOSITO', {
    CS_DOCUMENTO: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    DS_FECHA: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: '(getdate())'
    },
    CS_ESTADO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    CS_CODLOCALIDAD: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    CS_OBSERVACION: {
      type: DataTypes.TEXT,
      allowNull: false,
      defaultValue: ''
    },
    CS_RELACION: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    CS_CODOPERADOR: {
      type: DataTypes.STRING,
      allowNull: false
    },
    DS_FECHA_TOPE: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: '(getdate())'
    },
    CS_DEPOSITO_SOLICITUD: {
      type: DataTypes.STRING,
      allowNull: false
    },
    CS_DEPOSITO_DESPACHAR: {
      type: DataTypes.STRING,
      allowNull: false
    },
    NU_ESTADO_INTERNO: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((0))'
    },
    NU_PRIORIDAD: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((10))'
    },
    CS_CODMONEDA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    NS_FACTOR_CAMBIO: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    }
  }, {
    tableName: 'MA_REQUISICION_DEPOSITO'
  });
};
