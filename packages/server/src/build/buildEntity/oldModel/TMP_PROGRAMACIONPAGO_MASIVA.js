/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TMP_PROGRAMACIONPAGO_MASIVA', {
    c_CodProg: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    c_Factura: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    c_TipoDocOrigen: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    n_Desc1: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    n_Desc2: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    n_Desc3: {
      type: DataTypes.FLOAT,
      allowNull: false
    }
  }, {
    tableName: 'TMP_PROGRAMACIONPAGO_MASIVA'
  });
};
