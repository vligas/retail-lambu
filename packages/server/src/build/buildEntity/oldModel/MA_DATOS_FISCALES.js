/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('MA_DATOS_FISCALES', {
    C_NUMEROZ: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    C_CAJA: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    NU_TURNO: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    CS_CODCAJERO: {
      type: DataTypes.STRING,
      allowNull: false
    },
    CS_CAJERO: {
      type: DataTypes.STRING,
      allowNull: false
    },
    D_FECHA: {
      type: DataTypes.DATE,
      allowNull: false
    },
    C_DOCINICIALVEN: {
      type: DataTypes.STRING,
      allowNull: false
    },
    C_DOCFINALVEN: {
      type: DataTypes.STRING,
      allowNull: false
    },
    F_MONTOBASEVENA: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    F_MONTOBASEVENB: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    F_MONTOBASEVENC: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    F_IMPUESTOVENA: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    F_IMPUESTOVENB: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    F_IMPUESTOVENC: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    F_EXCENTOVEN: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    F_MONTOTOTALVEN: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    CODCONCEPTO: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))',
      primaryKey: true
    },
    C_CONCEPTO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '',
      primaryKey: true
    },
    F_IMPUESTOTOTALVEN: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CS_NUMERO_TRANSFERENCIA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    cs_comprobantecontable: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    C_LOCALIDAD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    }
  }, {
    tableName: 'MA_DATOS_FISCALES'
  });
};
