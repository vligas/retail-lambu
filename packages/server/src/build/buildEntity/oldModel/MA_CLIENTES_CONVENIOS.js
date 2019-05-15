/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('MA_CLIENTES_CONVENIOS', {
    c_codcliente: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    tipo: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    clave: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    n_porcentaje: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    ident: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    descripcion: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    ID: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    RESTRINGIDO: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: '0'
    }
  }, {
    tableName: 'MA_CLIENTES_CONVENIOS'
  });
};
