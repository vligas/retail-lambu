/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('MA_PROGRAMADOR_PAGOS', {
    CS_CODIGO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    DS_FECHA: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: '(getdate())'
    },
    DS_FECHAPAGO: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: '(getdate())'
    },
    CS_CODPROVEEDOR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    CS_PROVEEDOR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    CS_USUARIO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    CS_LOCALIDAD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    CS_LOCALIDADORIGEN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    CS_ESTATUS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    CS_MONEDA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    NS_TOTAL_CANCELAR: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    NS_TOTAL_CANCELARCxP: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    NS_TOTAL_CANCELARCxC: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    cs_observacion: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    ds_fecha_proceso: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: '(getdate())'
    },
    cs_usuario_proceso: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    c_EstatusAprobacion: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'APB'
    },
    c_ProgramacionMasiva: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    }
  }, {
    tableName: 'MA_PROGRAMADOR_PAGOS'
  });
};
