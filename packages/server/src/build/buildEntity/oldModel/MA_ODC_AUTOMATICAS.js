/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('MA_ODC_AUTOMATICAS', {
    cu_proveedor: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    cu_diasCorrer: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'Lun'
    },
    nu_orden: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    cu_forma: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    cu_deposito: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    nu_dias: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((0))'
    },
    nu_tipoCosto: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((3))'
    },
    nu_tipoPrecio: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((1))'
    },
    cu_localidad: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    }
  }, {
    tableName: 'MA_ODC_AUTOMATICAS'
  });
};
