/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TR_PEND_MA_CLIENTES_CONVENIOS', {
    c_codcliente: {
      type: DataTypes.STRING,
      allowNull: false
    },
    tipo: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    clave: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    n_porcentaje: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    ident: {
      type: DataTypes.STRING,
      allowNull: false
    },
    descripcion: {
      type: DataTypes.STRING,
      allowNull: false
    },
    restringido: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: '0'
    },
    id: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    tipo_cambio: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((0))'
    }
  }, {
    tableName: 'TR_PEND_MA_CLIENTES_CONVENIOS'
  });
};
