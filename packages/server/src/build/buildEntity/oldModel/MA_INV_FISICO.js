/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('MA_INV_FISICO', {
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
    c_STATUS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    c_CODLOCALIDAD: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    c_codMONEDA: {
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
    c_CODCOMPRADOR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    c_DEP_ORIG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    c_MOTIVO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    NO_ELAB: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((0))'
    },
    CU_CODDEPARTAMENTO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    CU_CODGRUPO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    CU_CODSUBGRUPO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    CU_CODPROVEEDOR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    ID: {
      type: DataTypes.DOUBLE,
      allowNull: false
    }
  }, {
    tableName: 'MA_INV_FISICO'
  });
};
