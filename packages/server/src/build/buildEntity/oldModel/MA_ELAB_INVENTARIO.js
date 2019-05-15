/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('MA_ELAB_INVENTARIO', {
    B_COMENZADO: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: '0'
    },
    F_INiCIO: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: '(getdate())'
    },
    B_FINALIZADO: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: '0'
    },
    F_FINAL: {
      type: DataTypes.DATE,
      allowNull: true
    },
    c_coddeposito: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    C_MOTIVO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    no_elab: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    c_codmoneda: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    n_factor: {
      type: DataTypes.FLOAT,
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
    cu_CODPROVEEDOR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    }
  }, {
    tableName: 'MA_ELAB_INVENTARIO'
  });
};
