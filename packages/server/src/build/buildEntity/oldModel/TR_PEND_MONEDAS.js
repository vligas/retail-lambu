/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TR_PEND_MONEDAS', {
    C_CODMONEDA: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    C_DESCRIPCION: {
      type: DataTypes.STRING,
      allowNull: false
    },
    N_FACTOR: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    B_PREFERENCIA: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: '0'
    },
    C_OBSERVACIO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    B_ACTIVA: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: '1'
    },
    C_SIMBOLO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    N_DECIMALES: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((2))'
    },
    TIPO_CAMBIO: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((0))'
    },
    ID: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    }
  }, {
    tableName: 'TR_PEND_MONEDAS'
  });
};
