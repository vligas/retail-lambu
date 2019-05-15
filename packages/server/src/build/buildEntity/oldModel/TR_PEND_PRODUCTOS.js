/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TR_PEND_PRODUCTOS', {
    C_CODIGO: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    C_DESCRI: {
      type: DataTypes.STRING,
      allowNull: false
    },
    c_departamento: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    c_grupo: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    c_subgrupo: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    c_marca: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    c_modelo: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    c_procede: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: '0'
    },
    n_costoact: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    n_costoant: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    n_costopro: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    n_costorep: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    n_precio1: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    n_precio2: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    n_precio3: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    c_seriales: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '((0))'
    },
    c_compuesto: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '((0))'
    },
    c_presenta: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    n_peso: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: ' '
    },
    n_volumen: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: ' '
    },
    n_cantibul: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: ' '
    },
    n_pesobul: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: ' '
    },
    n_volbul: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: ' '
    },
    c_fileimagen: {
      type: "IMAGE",
      allowNull: true
    },
    n_impuesto1: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    n_impuesto2: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    n_impuesto3: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    c_cod_arancel: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    c_des_arancel: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    n_por_arancel: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    n_costo_original: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    c_observacio: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    n_activo: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((1))'
    },
    n_tipopeso: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((0))'
    },
    n_precioO: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    f_inicial: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: '(((5)/(11))/(70))'
    },
    f_final: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: '(((5)/(11))/(70))'
    },
    h_inicial: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: '(((5)/(11))/(70))'
    },
    h_final: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: '(((5)/(11))/(70))'
    },
    add_date: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: '(((5)/(11))/(70))'
    },
    update_date: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: '(((5)/(11))/(70))'
    },
    c_codfabricante: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    HABLADOR: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((1))'
    },
    C_CODMONEDA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '0000000002'
    },
    CANT_DECIMALES: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((0))'
    },
    MONEDA_ANT: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((1))'
    },
    MONEDA_ACT: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((1))'
    },
    MONEDA_PRO: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((1))'
    },
    N_PROD_EXT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    c_usuarioAdd: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    c_usuarioupd: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    ID: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    C_CODIGO_BASE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    C_DESCRI_BASE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    TEXT1: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    TEXT2: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    TEXT3: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    TEXT4: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    TEXT5: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    TEXT6: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    TEXT7: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    TEXT8: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    DATE1: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: '(((17)/(4))/(75))'
    },
    NUME1: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    N_CANTIDAD_TMP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '((0))'
    },
    C_COD_PLANTILLA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    NU_TIPO_PRODUCTO: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((1))'
    },
    nu_insumointerno: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((0))'
    },
    nu_precioregulado: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((0))'
    },
    nu_pocentajemerma: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    nu_nivelClave: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((0))'
    },
    CU_DESCRIPCION_CORTA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    bs_permiteteclado: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: '0'
    },
    bs_permitecantidad: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: '0'
    },
    nu_stockmin: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    nu_stockmax: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    }
  }, {
    tableName: 'TR_PEND_PRODUCTOS'
  });
};
