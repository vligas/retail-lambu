/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TR_PEND_DEPOSITO', {
    c_coddeposito: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    c_descripcion: {
      type: DataTypes.STRING,
      allowNull: false
    },
    c_codlocalidad: {
      type: DataTypes.STRING,
      allowNull: false
    },
    c_responsable: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    c_observacion: {
      type: DataTypes.TEXT,
      allowNull: false,
      defaultValue: ' '
    },
    UPDATE_DATE: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: '(((5)/(11))/(70))'
    },
    ADD_DATE: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: '(((5)/(11))/(70))'
    },
    ESTATUS: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((0))'
    },
    ID: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    TIPO_CAMBIO: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((0))'
    }
  }, {
    tableName: 'TR_PEND_DEPOSITO'
  });
};
