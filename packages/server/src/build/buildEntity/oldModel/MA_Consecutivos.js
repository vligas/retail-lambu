/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('MA_Consecutivos', {
    Solicitud_Precio: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    espera_sdp: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    Orden_Compra: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    espera_odc: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    Compras: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    espera_com: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    cons_precios: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    cons_precios_esp: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    DEVCOMPRAS: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((1))'
    },
    DEVCOMPRAS_ESP: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((1))'
    },
    cod_proveedor: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    Recepcion: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    rec_espera: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    rec_anular: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    Transferencia: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    espera_transfer: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    TRANSFERENCIA_ANU: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    Traslados: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    espera_traslado: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    TRASLADOS_ANU: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    Ajustes: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    ESPERA_AJU: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    ajuste_anu: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    Invfisico: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    INVENTARIO_ANU: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    espera_inv: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    inventario: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    Cod_Producto: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    Cod_deposito: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    produccion_formula: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    produccion_orden: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    produccion_orden_esp: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    Presupuesto: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    promventas: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    espera_pre: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    Pedido: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    espera_ped: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    nde: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    ESPERA_NDE: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    NDE_ANULADA: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    detalleinv: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    Factura: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    espera_fac: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    devolucion: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    ESPERA_DEV: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    cambio_precio: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    promocion: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    espera_cam_precio: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    ofertas: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    espera_ofe: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    oferta_anu: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    cod_cliente: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    POS: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    Cierre_par: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    Cierre_tot: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    Deposito: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    Cheque: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    Transmisiones: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    ORGANIZACION: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    cxp_giros: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    cxp_cuotas: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    cxp_notac: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    cxp_notad: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    cxp_pagos: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    cxp_a_p: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    cxc_giros: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    cxc_cuotas: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    cxc_notac: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    cxc_notad: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    cxc_pagos: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    cxc_a_p: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    banco_egreso: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    banco_deposito: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    banco_debito: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    banco_credito: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    banco_anulado: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    banco_operacion: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    banco_conciliacion: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    ejecutables: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    d_moneda: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    N_PROD_EXT: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))'
    },
    RELACION: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))'
    },
    N_PLANTILLAS: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))'
    },
    cxp_pagos_prog: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))'
    },
    ProgPago: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))'
    },
    c_consecu_cheque: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))'
    },
    BANCO_TRANSFERENCIA: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))'
    },
    LIQUIDACION_MASIVA: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))'
    },
    NU_COLOCACIONES: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((1))'
    },
    LIQUIDACION_DIV: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))'
    },
    cambiopremios: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))'
    }
  }, {
    tableName: 'MA_Consecutivos'
  });
};
