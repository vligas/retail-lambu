/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ma_configuracion_cambios', {
    cs_documento: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '',
      primaryKey: true
    },
    cs_ruta: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    bs_rtf: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: '0'
    },
    nu_cambiomax: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    nu_cambiomin: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    nu_antiguedadmin: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    nu_acummin: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    nu_valorpuntocargo: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    nu_valorpuntodescargo: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: '((0))'
    },
    nu_tipopremio: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    nu_porcprodcambiar: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((0))'
    }
  }, {
    tableName: 'ma_configuracion_cambios'
  });
};
