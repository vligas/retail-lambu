/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('MA_CXP_PROG', {
    C_Documento: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    C_Relacion: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    C_Codigo: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    C_localidad: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    C_usuario: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    c_concepto: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    c_detalle: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    c_observacion: {
      type: DataTypes.TEXT,
      allowNull: false,
      defaultValue: ''
    },
    f_fechae: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: '(getdate())'
    },
    f_fechav: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: '(getdate())'
    },
    n_impuesto: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    n_bimpuesto: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    n_total: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    n_PagadoImp: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    n_Pagado: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    n_retencion: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    n_subtotal: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    N_pimpuesto: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
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
    F_CANCELACION: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: '(((5)/(11))/(70))'
    },
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    ProgPago: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((0))'
    },
    Estado: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((0))'
    }
  }, {
    tableName: 'MA_CXP_PROG'
  });
};
