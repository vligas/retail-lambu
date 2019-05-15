/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('MA_ODC', {
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
    c_DESCRIPCION: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    c_status: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '',
      primaryKey: true
    },
    c_CODPROVEEDOR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    c_CODLOCALIDAD: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    C_CODMONEDA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    n_FACTORCAMBIO: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    n_DESCUENTO: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    c_OBSERVACION: {
      type: DataTypes.TEXT,
      allowNull: false,
      defaultValue: ''
    },
    b_backorder: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: '0'
    },
    c_RELACION: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    c_CODCOMPRADOR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    d_fecha_recepcion: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: '(getdate())'
    },
    N_SUBTOTAL: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    N_IMPUESTO: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    N_TOTAL: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    C_DESPACHAR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    DU_FECHAVENCIMIENTO: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: '(((1)/(1))/(1900))'
    },
    cs_codlocalidad: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '',
      primaryKey: true
    },
    id: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    cs_requisicion: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    }
  }, {
    tableName: 'MA_ODC'
  });
};
