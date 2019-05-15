/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('MA_SOLICITUDCOMPRAS', {
    c_DOCUMENTO: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    d_FECHA: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: '(getdate())'
    },
    c_status: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    c_CODPROVEEDOR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    c_CODLOCALIDAD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '',
      primaryKey: true
    },
    c_codmoneda: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    n_FACTORCAMBIO: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    c_OBSERVACION: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    N_SUBTOTAL: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    N_IMPUESTO: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    N_TOTAL: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    C_USUARIO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    cs_codlocalidad: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    c_CODDEPOSITO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    ID: {
      type: DataTypes.DOUBLE,
      allowNull: false
    }
  }, {
    tableName: 'MA_SOLICITUDCOMPRAS'
  });
};
