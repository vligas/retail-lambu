/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('MA_VENDEDORES_GRUPOS_COMISION', {
    cs_GRUPO_COMISION: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    cs_DESCRIPCION_GRUPO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    cs_PORCENTAJE: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    cs_ITEM_AFECTADO: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((1))'
    },
    cs_CONSIDERAR_PARA_IMPUESTO: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: '0'
    }
  }, {
    tableName: 'MA_VENDEDORES_GRUPOS_COMISION'
  });
};
