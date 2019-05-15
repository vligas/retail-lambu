/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TR_FORMATO_BANCOS', {
    cu_codigoFormato: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    nu_largo: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    cu_caracterRelleno: {
      type: DataTypes.STRING,
      allowNull: false
    },
    cu_alineacion: {
      type: DataTypes.STRING,
      allowNull: false
    },
    cu_tipo: {
      type: DataTypes.STRING,
      allowNull: false
    },
    cu_valor: {
      type: DataTypes.STRING,
      allowNull: false
    },
    nu_orden: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nu_linea: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    cu_posicion: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    cu_separadorDecimal: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'NO'
    },
    cu_formatoFecha: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    cu_tipoCampo: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    nu_cantidadDecimal: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((0))'
    }
  }, {
    tableName: 'TR_FORMATO_BANCOS'
  });
};
