/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('MA_SINCRONIZACION', {
    F_FECHA_MA_VENTAS: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: '(((1)/(1))/(1980))'
    },
    C_DOC_MA_VENTAS_VEN: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))'
    },
    C_DOC_MA_VENTAS_POS_VEN: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))'
    },
    C_DOC_MA_VENTAS_DEV: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))'
    },
    C_DOC_MA_VENTAS_POS_DEV: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))'
    },
    F_FECHA_MA_INVENTARIO: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: '((0))'
    },
    C_DOC_MA_INVENTARIO_TRA: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))'
    },
    C_DOC_MA_INVENTARIO_TRA_ANU: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))'
    },
    C_DOC_MA_INVENTARIO_TRS: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))'
    },
    C_DOC_MA_INVENTARIO_TRS_ANU: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))'
    },
    C_DOC_MA_INVENTARIO_AJU: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))'
    },
    C_DOC_MA_INVENTARIO_AJU_ANU: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))'
    },
    C_DOC_MA_INVENTARIO_INV: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))'
    },
    C_DOC_MA_INVENTARIO_INV_ANU: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))'
    },
    C_DOC_MA_INVENTARIO_REC: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))'
    },
    C_DOC_MA_INVENTARIO_REC_ANU: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))'
    },
    C_DOC_MA_INVENTARIO_PRD: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))'
    },
    C_DOC_MA_INVENTARIO_PRD_ANU: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))'
    },
    F_FECHA_MA_COMPRAS: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: '(((1)/(1))/(1980))'
    },
    C_DOC_MA_COMPRAS_COM: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))'
    },
    C_DOC_MA_COMPRAS_DCM: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))'
    },
    F_FECHA_ODC: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: '(((1)/(1))/(1980))'
    },
    C_DOC_MA_ODC_ODC: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))'
    },
    H_BUSCAR_DATA: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: '(((1)/(1))/(1980))'
    },
    B_REINTENTAR: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: '1'
    },
    C_CODSUCURSAL: {
      type: DataTypes.STRING,
      allowNull: false
    },
    id: {
      type: DataTypes.DOUBLE,
      allowNull: false
    }
  }, {
    tableName: 'MA_SINCRONIZACION'
  });
};
