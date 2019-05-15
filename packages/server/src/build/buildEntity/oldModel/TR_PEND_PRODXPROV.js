/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TR_PEND_PRODXPROV', {
    c_codigo: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    c_codprovee: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    c_numero_compra: {
      type: DataTypes.STRING,
      allowNull: true
    },
    d_fecha: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: '01/01/1980'
    },
    n_costo: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    UPDATE_DATE: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: '01/01/1980'
    },
    ADD_DATE: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: '01/01/1980'
    },
    ESTATUS: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((0))'
    },
    B_PREFERENCIAL: {
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
    N_PROD_EXT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    }
  }, {
    tableName: 'TR_PEND_PRODXPROV'
  });
};
