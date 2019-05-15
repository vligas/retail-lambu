/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('MA_Bienes', {
    IDDeActivo: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))'
    },
    Codigo: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    Descripcion: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    Fecha: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: '(getdate())'
    },
    Monto: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    ValorSalvamento: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    VidaUtil: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    Depreciacion: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    Departamento: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'MA_Bienes'
  });
};
