/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ESTRUC_SIS', {
    Nom_org: {
      type: DataTypes.STRING,
      allowNull: true
    },
    Dir_org: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tlf_org: {
      type: DataTypes.STRING,
      allowNull: true
    },
    loc_org: {
      type: DataTypes.STRING,
      allowNull: true
    },
    Rif_org: {
      type: DataTypes.STRING,
      allowNull: true
    },
    Nit_org: {
      type: DataTypes.STRING,
      allowNull: true
    },
    Ser_sof: {
      type: DataTypes.STRING,
      allowNull: true
    },
    Key_Sof: {
      type: DataTypes.STRING,
      allowNull: true
    },
    CR_FISCAL: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    CU_SIGLAS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    Alias: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    Pais: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    Estado: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    Ciudad: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    }
  }, {
    tableName: 'ESTRUC_SIS'
  });
};
