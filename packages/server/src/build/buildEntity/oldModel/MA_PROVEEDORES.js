/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('MA_PROVEEDORES', {
    c_codproveed: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    c_descripcio: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    c_grupo: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '(NCXP'
    },
    c_rif: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    c_representa: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    c_cargo: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    c_direccion: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    c_ciudad: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    c_estado: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    c_pais: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    c_email: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    c_telefono: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    c_celular: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    c_fax: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    c_web: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    n_limite: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    n_dias: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((15))'
    },
    n_porcentaje: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    c_observacio: {
      type: DataTypes.TEXT,
      allowNull: false,
      defaultValue: ' '
    },
    c_nit: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    n_activo: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((1))'
    },
    update_date: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: '((1))'
    },
    add_date: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: '(((5)/(11))/(70))'
    },
    c_razon: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '(((5)/(11))/(70))'
    },
    c_codreferencial: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    c_contacto_adm: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    c_contacto_ven: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    c_contacto_reg: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    c_contacto_vdd: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    c_email_adm: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    c_email_ven: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    c_email_reg: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    c_email_vdd: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    c_email_fiscal: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    c_email_depo: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    c_telefono_rep: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    c_telefono_adm: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    c_telefono_ven: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    c_telefono_reg: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    c_telefono_vdd: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    c_celular_adm: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    c_celular_ven: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    c_celular_reg: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    c_celular_vdd: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    c_direccion_dep: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    c_ciudad_dep: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    c_estado_dep: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    c_pais_dep: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    c_telefono_dep: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    c_fax_dep: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    c_email_dep: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    c_cod_banco: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    c_cuenta_banco: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    c_cuentahabiente: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    n_dia2: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((0))'
    },
    n_porcentaje2: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    n_dia3: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((0))'
    },
    n_porcentaje3: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    c_codlicores: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '((0))'
    },
    n_diasdespacho: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((0))'
    },
    B_PREFERENCIAL: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((0))'
    },
    N_RETENCION: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CS_COMPRADOR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    bu_cualquier_cuenta: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: '0'
    },
    cs_tipo: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    id: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    c_rim: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    n_diasreposicion: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((0))'
    },
    n_diasanalisis: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((0))'
    },
    n_descaveria: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((0))'
    },
    b_enviarOdcL: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: '0'
    },
    b_enviarOdcA: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: '0'
    },
    b_enviarOdcV: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: '0'
    },
    b_enviarOdcR: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: '0'
    },
    b_enviarOdcVen: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: '0'
    },
    n_porcentaje_seniat: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
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
    tableName: 'MA_PROVEEDORES'
  });
};
