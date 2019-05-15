/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TR_OFERTAS', {
    c_documento: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    c_codarticulo: {
      type: DataTypes.STRING,
      allowNull: false
    },
    n_precio1: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    n_precio2: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    n_precio3: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    n_oferta: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    n_costo: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    N_TIPOPESO: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((0))'
    },
    C_DEPARTAMENTO: {
      type: DataTypes.STRING,
      allowNull: true
    },
    C_GRUPO: {
      type: DataTypes.STRING,
      allowNull: true
    },
    C_SUBGRUPO: {
      type: DataTypes.STRING,
      allowNull: true
    },
    N_PROD_EXT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    ID: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    }
  }, {
    tableName: 'TR_OFERTAS'
  });
};
