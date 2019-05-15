/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TR_PEND_TRANSPORTE', {
    c_codtransporte: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    c_descripcion: {
      type: DataTypes.STRING,
      allowNull: false
    },
    c_placa: {
      type: DataTypes.STRING,
      allowNull: true
    },
    c_color: {
      type: DataTypes.STRING,
      allowNull: true
    },
    c_marca: {
      type: DataTypes.STRING,
      allowNull: true
    },
    c_modelo: {
      type: DataTypes.STRING,
      allowNull: true
    },
    c_responsable: {
      type: DataTypes.STRING,
      allowNull: true
    },
    c_codlocalidad: {
      type: DataTypes.STRING,
      allowNull: false
    },
    UPDATE_DATE: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: '(((5)/(11))/(70))'
    },
    ADD_DATE: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: '(((5)/(11))/(70))'
    },
    ESTATUS: {
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
    TIPO_CAMBIO: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((0))'
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
    tableName: 'TR_PEND_TRANSPORTE'
  });
};
