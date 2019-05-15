/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('MA_HISTORICO_COSTO_PRECIO', {
    c_Historico: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    d_FechaCambio: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: '(getdate())'
    },
    c_ProcesoOrigen: {
      type: DataTypes.STRING,
      allowNull: false
    },
    c_Documento: {
      type: DataTypes.STRING,
      allowNull: false
    },
    c_Usuario: {
      type: DataTypes.STRING,
      allowNull: false
    },
    c_CodArticulo: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Precio1_Ant: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    Precio1_Nuevo: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    Precio2_Ant: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    Precio2_Nuevo: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    Precio3_Ant: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    Precio3_Nuevo: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    CostoAct_Ant: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    CostoAct_Nuevo: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    CostoRep_Ant: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    CostoRep_Nuevo: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    ID: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    tableName: 'MA_HISTORICO_COSTO_PRECIO'
  });
};
