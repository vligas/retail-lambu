/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('MA_BANCOSCTA', {
    c_CUENTA: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    c_BANCO: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    c_SUCURSAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    c_DIRECCION: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    c_GERENTE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    c_TELEFONOS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    c_FAX: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    c_EMAIL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    c_CONTABLE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    n_saldo: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    n_saldoant: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    n_saldoconciliado: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    n_saldoconciliadoant: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    c_codmoneda: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    c_consecu_cheque: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '((1))'
    },
    c_ubicacion_rtf: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    ID: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    n_conciliado: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    nu_nivel: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((0))'
    },
    cu_tipoArchivoConciliacion: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    cu_separadorArchivoConciliacion: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    }
  }, {
    tableName: 'MA_BANCOSCTA'
  });
};
