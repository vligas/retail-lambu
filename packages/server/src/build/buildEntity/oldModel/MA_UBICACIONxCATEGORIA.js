/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('MA_UBICACIONxCATEGORIA', {
    cu_Deposito: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    cu_Departamento: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    cu_Grupo: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    cu_SubGrupo: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    cu_Mascara: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    ID: {
      type: DataTypes.DOUBLE,
      allowNull: false
    }
  }, {
    tableName: 'MA_UBICACIONxCATEGORIA'
  });
};
