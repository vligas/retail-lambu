/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('MA_PROVEEDORESxCLIENTE', {
    cu_codcliente: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    cu_codproveedor: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    cs_codusuario: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    ds_fechaingreso: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: '(getdate())'
    },
    ds_fechamodificacion: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: '(getdate())'
    },
    id: {
      type: DataTypes.DOUBLE,
      allowNull: false
    }
  }, {
    tableName: 'MA_PROVEEDORESxCLIENTE'
  });
};
