/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('MA_TABLAS_CONSOLIDAR_SUCURSALES', {
    cu_codsucursal: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    cu_codtablassyncronizar: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      primaryKey: true
    },
    cu_descripcion: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    cu_mensajeEliminar: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    cu_mensaje: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    cu_tabla_maestra: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    cu_campob_maestra: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
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
      allowNull: false,
      defaultValue: ''
    },
    cu_campob_tr_pend: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    nu_proceso: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: ''
    },
    cu_camposExepcion: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    cu_camposExepcionTr: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    cu_criteriorrestriction: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    cu_criteriorestriccionMa: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    cu_criteriorestriccionTr: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    cu_campo_correlativo: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    cu_correlativo: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))'
    },
    cu_concepto: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    cu_comentario_concepto: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    cu_formato: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '000000000'
    },
    bu_activar: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: '0'
    }
  }, {
    tableName: 'MA_TABLAS_CONSOLIDAR_SUCURSALES'
  });
};
