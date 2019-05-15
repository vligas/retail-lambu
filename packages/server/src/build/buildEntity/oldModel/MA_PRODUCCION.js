/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('MA_PRODUCCION', {
    C_FORMULA: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    C_DESCRIPCION: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    C_STATUS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    C_CODUSUARIO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    UPDATE_DATE: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: '(getdate())'
    },
    ADD_DATE: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: '(getdate())'
    },
    c_codlocalidad: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    N_COSTODIR: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    C_CODMONEDA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '0000000001'
    },
    c_Instrucciones: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    n_TiempoPreparacion: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    }
  }, {
    tableName: 'MA_PRODUCCION'
  });
};
