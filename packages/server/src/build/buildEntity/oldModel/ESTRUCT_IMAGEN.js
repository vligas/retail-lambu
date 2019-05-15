/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ESTRUCT_IMAGEN', {
    cs_key: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    is_imagen: {
      type: "IMAGE",
      allowNull: true
    },
    cs_tipo: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    ns_tamanoV: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((48))'
    },
    ns_tamanoH: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((48))'
    },
    ns_Estatus: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((1))'
    }
  }, {
    tableName: 'ESTRUCT_IMAGEN'
  });
};
