/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('MA_CONCEPTOS', {
    IDCONCEPTO: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      primaryKey: true
    },
    DESCRIPCION: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    IDPROCESO: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    DE_SISTEMA: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((0))'
    },
    Documento: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '((1))'
    },
    Predeterminada: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((0))'
    },
    nu_nivelusuario: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((0))'
    },
    bu_activo: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: '1'
    },
    bu_consideraimpuesto: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: '0'
    },
    bu_Conceptodeservicio: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: '0'
    },
    bu_ConsideraLibro: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: '1'
    },
    bu_ConceptoRetencion: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: '0'
    },
    bu_RequiereUnidad: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: '0'
    },
    bu_ConsolidarFactura: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: '0'
    },
    c_Observacion: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '((0))'
    }
  }, {
    tableName: 'MA_CONCEPTOS'
  });
};
