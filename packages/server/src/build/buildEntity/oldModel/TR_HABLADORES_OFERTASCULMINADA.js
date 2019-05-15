/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TR_HABLADORES_OFERTASCULMINADA', {
    cs_codproducto: {
      type: DataTypes.STRING,
      allowNull: false
    },
    ds_fecha_caida: {
      type: DataTypes.DATE,
      allowNull: false
    },
    id: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    }
  }, {
    tableName: 'TR_HABLADORES_OFERTASCULMINADA'
  });
};
