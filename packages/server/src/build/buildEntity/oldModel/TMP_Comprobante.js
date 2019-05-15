/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TMP_Comprobante', {
    IDDeCuenta: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    Codigo: {
      type: DataTypes.STRING,
      allowNull: true
    },
    Tipo: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Monto: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    Referencia: {
      type: DataTypes.STRING,
      allowNull: true
    },
    Descripcion: {
      type: DataTypes.STRING,
      allowNull: true
    },
    Fecha: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: '(getdate())'
    },
    Usuario: {
      type: DataTypes.STRING,
      allowNull: true
    },
    Linea: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    id: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    IDDeCentroCosto: {
      type: DataTypes.DOUBLE,
      allowNull: true
    }
  }, {
    tableName: 'TMP_Comprobante'
  });
};
