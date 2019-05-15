/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('MA_AUDITORIAS', {
    ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    Cod_Prod: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    Nom_Prod: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Tipo: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    Descripcion: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Evento: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Fecha: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: '(getdate())'
    },
    CodUsuario: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Usuario: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Ventana: {
      type: DataTypes.STRING,
      allowNull: false
    },
    TipoObjAuditado: {
      type: DataTypes.STRING,
      allowNull: false
    },
    CodigoAuditado: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    tableName: 'MA_AUDITORIAS'
  });
};
