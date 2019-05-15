/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  return sequelize.define('MA_PRODUCTOS', {
    c_Codigo: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    c_Descri: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    c_Departamento: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '001'
    },
    c_Grupo: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    c_Subgrupo: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    c_Marca: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    c_Modelo: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    c_Procede: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: '0'
    },
    n_CostoAct: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    n_CostoAnt: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    n_CostoPro: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    n_CostoRep: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    n_Precio1: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    n_Precio2: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    n_Precio3: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    c_Seriales: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '((0))'
    },
    c_Compuesto: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((0))'
    },
    c_Presenta: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    n_Peso: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    n_Volumen: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    n_CantiBul: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((1))'
    },
    n_PesoBul: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    n_VolBul: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    c_FileImagen: {
      type: "IMAGE",
      allowNull: true
    },
    n_Impuesto1: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((12))'
    },
    n_Impuesto2: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    n_Impuesto3: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    c_Cod_Arancel: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    c_Des_Arancel: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    n_Por_Arancel: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    n_Costo_Original: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    c_Observacio: {
      type: DataTypes.TEXT,
      allowNull: false,
      defaultValue: ''
    },
    n_Activo: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((1))'
    },
    n_TipoPeso: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((0))'
    },
    n_PrecioO: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    f_Inicial: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: '(((5)/(11))/(70))'
    },
    f_Final: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: '(((5)/(11))/(40))'
    },
    h_Inicial: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: '00:00:00'
    },
    h_Final: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: '00:00:00'
    },
    Add_Date: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: '(getdate())'
    },
    Update_Date: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: '(((5)/(11))/(70))'
    },
    c_CodFabricante: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    Hablador: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((1))'
    },
    c_CodMoneda: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '0000000001'
    },
    Cant_Decimales: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((0))'
    },
    Moneda_Ant: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((1))'
    },
    Moneda_Act: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((1))'
    },
    Moneda_Pro: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((1))'
    },
    c_Codigo_Base: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    c_Descri_Base: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    Text1: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    Text2: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    Text3: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    Text4: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    Text5: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    Text6: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    Text7: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    Text8: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    Date1: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: '(((17)/(4))/(75))'
    },
    Nume1: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    n_Cantidad_Tmp: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '((0))'
    },
    c_Cod_Plantilla: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
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
    },
    n_Prod_Ext: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    n_Pro_Ext: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    nu_Tipo_Producto: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((1))'
    },
    nu_InsumoInterno: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((0))'
    },
    nu_PrecioRegulado: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((0))'
    },
    nu_PocentajeMerma: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    nu_NivelClave: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((0))'
    },
    cu_Descripcion_Corta: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    bs_PermiteTeclado: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: '0'
    },
    bs_PermiteCantidad: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: '0'
    },
    nu_StockMin: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    nu_StockMax: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    ID: {
      type: DataTypes.DOUBLE,
      allowNull: false
    }
  }, {
      tableName: 'MA_PRODUCTOS'
    });
};
