/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TR_PEND_BANCOS', {
    C_CODIGO: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    C_DESCRIPCIO: {
      type: DataTypes.STRING,
      allowNull: false
    },
    C_GRUPO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    C_OBSERVACIO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    TIPO_CAMBIO: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((0))'
    },
    N_IDB: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    ID: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    bs_verificacionoperaciones_especiales: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: '0'
    },
    cs_mensaje: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    ns_codigooperacion: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    cs_rtfcheque: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    cs_codigobanco_che: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    }
  }, {
    tableName: 'TR_PEND_BANCOS'
  });
};
