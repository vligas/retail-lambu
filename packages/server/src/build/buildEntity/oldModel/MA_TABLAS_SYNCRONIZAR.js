/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('MA_TABLAS_SYNCRONIZAR', {
    cu_descripcion: {
      type: DataTypes.STRING,
      allowNull: false
    },
    cu_mensaje: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    cu_mensajeEliminar: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    cu_tabla_maestra: {
      type: DataTypes.STRING,
      allowNull: false
    },
    cu_campob_maestra: {
      type: DataTypes.STRING,
      allowNull: false
    },
    cu_tabla_TR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    cu_campob_TR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    cu_tabla_tr_pend: {
      type: DataTypes.STRING,
      allowNull: false
    },
    cu_campob_tr_pend: {
      type: DataTypes.STRING,
      allowNull: false
    },
    nu_proceso: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    cu_camposExepcion: {
      type: DataTypes.STRING,
      allowNull: false
    },
    cu_camposExepcionTr: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    cu_codtablassyncronizar: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    cu_criteriorrestriction: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    bs_maneja_inventario: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: '0'
    },
    cu_concepto: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    }
  }, {
    tableName: 'MA_TABLAS_SYNCRONIZAR'
  });
};
