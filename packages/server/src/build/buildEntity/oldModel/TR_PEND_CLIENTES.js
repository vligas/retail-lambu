/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TR_PEND_CLIENTES', {
    c_CODCLIENTE: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    c_DESCRIPCIO: {
      type: DataTypes.STRING,
      allowNull: false
    },
    c_GRUPO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    c_RIF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    C_NIT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    c_REPRESENTA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    c_CARGO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    c_DIRECCION: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    c_CIUDAD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    c_ESTADO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    c_PAIS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    c_EMAIL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    c_TELEFONO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    c_FAX: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    c_WEB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '((0))'
    },
    n_LIMITE: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    n_DIAS: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((0))'
    },
    n_PRECIO: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((0))'
    },
    n_DESCUENTO: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    c_OBSERVACIO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    c_impuesto: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    n_activo: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: '0'
    },
    update_date: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: '(((5)/(11))/(70))'
    },
    add_date: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: '(((5)/(11))/(70))'
    },
    f_cumpleanos: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: '(((5)/(11))/(70))'
    },
    ESTATUS: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((0))'
    },
    ID: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    Nu_tipodescuento: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((0))'
    },
    N_DiasIntMora: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((0))'
    },
    N_InteresesMora: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    c_fileimagen: {
      type: "IMAGE",
      allowNull: true
    },
    N_TIPO: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((0))'
    },
    C_CODCLIENTE_REL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    N_RETENCION: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))'
    },
    NU_PUNTOSACUMULADOS: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    RESTRINGIDO: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    TIPO_CAMBIO: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((0))'
    },
    CS_COMPRADOR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    CS_CODFRECUENTE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    BS_CONTRIBUYENTE: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: '0'
    },
    c_Zona: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    c_Ruta: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    c_Coordenadas: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    c_UsuarioAdd: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    c_UsuarioUpd: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    }
  }, {
    tableName: 'TR_PEND_CLIENTES'
  });
};
