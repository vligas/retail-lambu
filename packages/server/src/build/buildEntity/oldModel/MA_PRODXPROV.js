/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('MA_PRODXPROV', {
    c_codigo: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' ',
      primaryKey: true
    },
    c_codprovee: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' ',
      primaryKey: true
    },
    c_numero_compra: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    d_fecha: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: '(((5)/(11))/(1970))'
    },
    n_costo: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    add_date: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: '(((23)/(11))/(2000))'
    },
    update_date: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: '(((23)/(11))/(2000))'
    },
    N_PROD_EXT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    B_PREFERENCIAL: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((0))'
    },
    ESTATUS: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((0))'
    },
    ID: {
      type: DataTypes.DOUBLE,
      allowNull: false
    }
  }, {
    tableName: 'MA_PRODXPROV'
  });
};
