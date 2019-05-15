/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TR_CLIENTES_DATOS_AUX', {
    CS_CODIGO: {
      type: DataTypes.STRING,
      allowNull: false
    },
    CS_NOMBRE: {
      type: DataTypes.STRING,
      allowNull: false
    },
    NS_PARENTESCO: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((0))'
    },
    DS_FECHA_NAC: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: '01/01/1900'
    },
    NS_SEXO: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((0))'
    },
    ID: {
      type: DataTypes.DOUBLE,
      allowNull: false
    }
  }, {
    tableName: 'TR_CLIENTES_DATOS_AUX'
  });
};
