/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('MA_TRANSPORTE', {
    c_codtransporte: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    c_descripcion: {
      type: DataTypes.STRING,
      allowNull: false
    },
    C_PLACA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    C_COLOR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    C_MARCA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    C_MODELO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    C_RESPONSABLE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    C_CODLOCALIDAD: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    UPDATE_DATE: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: '(((5)/(11))/(70))'
    },
    ADD_DATE: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: '(((5)/(11))/(10))'
    },
    n_Peso: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    n_Volumen: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    }
  }, {
    tableName: 'MA_TRANSPORTE'
  });
};
