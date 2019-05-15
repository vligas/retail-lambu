/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TR_PEND_VENDEDORES', {
    CU_VENDEDOR_COD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' ',
      primaryKey: true
    },
    CU_VENDEDOR_DES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    BU_ACTIVO: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: '0'
    },
    cs_RELACION: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    cs_LOCALIDAD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    cs_LOGIN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    cs_PASSWORD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    cs_INGRESO: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: '(getdate())'
    },
    cs_MODIFICADO: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: '(getdate())'
    },
    cs_GRUPO_COMISION: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '0000000001'
    },
    bu_cualquier_cuenta: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: '0'
    },
    cs_tipo: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'VEN'
    },
    cu_rif: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '((0))'
    },
    c_grupo: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: ''
    },
    C_Comisiones: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    id: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    tipo_cambio: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((0))'
    }
  }, {
    tableName: 'TR_PEND_VENDEDORES'
  });
};
