/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('MA_LIBROS_CONFIGURADOS', {
    cs_documento: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    cs_titulo: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    cs_piepagina: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    bs_mostrarresumen: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: '0'
    },
    ns_anchototal: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))'
    },
    cs_tipopagina: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    bs_activo: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: '0'
    },
    bs_ventas: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: '0'
    }
  }, {
    tableName: 'MA_LIBROS_CONFIGURADOS'
  });
};
