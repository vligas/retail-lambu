/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('MA_IMPRESORAS_ETIQUETAS', {
    cCodigo: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    cDescripcion: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    bIngreso: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: '1'
    },
    fFechaIngreso: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: '(getdate())'
    },
    cUsuario: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'SYSTEMA'
    }
  }, {
    tableName: 'MA_IMPRESORAS_ETIQUETAS'
  });
};
