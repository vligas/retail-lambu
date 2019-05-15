import { IsString, IsNotEmpty, IsNumber, IsEmpty, IsOptional, IsBoolean, IsDate } from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { isBoolean, isNumber } from 'util';

export class QueryProductDto {
  @IsNotEmpty()
  @IsNumber()
  @Transform(value => parseInt(value, 10), { toClassOnly: true })
  limit: number;
}

export class ResponseSimpleProductDto {
  total: number;
  products: Array<{
    id: number
    // tslint:disable-next-line:variable-name
    c_Codigo: string;
    // tslint:disable-next-line:variable-name
    c_Descri: string;
    n_Precio1: number;
  }>;
}

export class ResponseProductDto {

  @IsOptional()
  maDepartament: object;

  @IsOptional()
  maGroup: object;

  @IsOptional()
  maSubGroup: object;

  // tslint:disable-next-line:variable-name
  c_Codigo: string;



  // tslint:disable-next-line:variable-name
  c_Descri: string;



  // tslint:disable-next-line:variable-name
  c_Departamento: string;



  // tslint:disable-next-line:variable-name
  c_Grupo: string;



  // tslint:disable-next-line:variable-name
  c_Subgrupo: string;



  // tslint:disable-next-line:variable-name
  c_Marca: string;



  // tslint:disable-next-line:variable-name
  c_Modelo: string;



  // tslint:disable-next-line:variable-name
  c_Procede: boolean;



  // tslint:disable-next-line:variable-name
  n_CostoAct: number;



  // tslint:disable-next-line:variable-name
  n_CostoAnt: number;



  // tslint:disable-next-line:variable-name
  n_CostoPro: number;



  // tslint:disable-next-line:variable-name
  n_CostoRep: number;



  // tslint:disable-next-line:variable-name
  n_Precio1: number;



  // tslint:disable-next-line:variable-name
  n_Precio2: number;



  // tslint:disable-next-line:variable-name
  n_Precio3: number;



  // tslint:disable-next-line:variable-name
  c_Seriales: string;



  // tslint:disable-next-line:variable-name
  c_Compuesto: number;



  // tslint:disable-next-line:variable-name
  c_Presenta: string;



  // tslint:disable-next-line:variable-name
  n_Peso: number;



  // tslint:disable-next-line:variable-name
  n_Volumen: number;



  // tslint:disable-next-line:variable-name
  n_CantiBul: number;



  // tslint:disable-next-line:variable-name
  n_PesoBul: number;



  // tslint:disable-next-line:variable-name
  n_VolBul: number;



  // tslint:disable-next-line:variable-name
  n_Impuesto1: number;



  // tslint:disable-next-line:variable-name
  n_Impuesto2: number;



  // tslint:disable-next-line:variable-name
  n_Impuesto3: number;



  // tslint:disable-next-line:variable-name
  c_Cod_Arancel: string;



  // tslint:disable-next-line:variable-name
  c_Des_Arancel: string;



  // tslint:disable-next-line:variable-name
  n_Por_Arancel: number;



  // tslint:disable-next-line:variable-name
  n_Costo_Original: number;



  // tslint:disable-next-line:variable-name
  c_Observacio: string;



  // tslint:disable-next-line:variable-name
  n_Activo: number;



  // tslint:disable-next-line:variable-name
  n_TipoPeso: number;



  // tslint:disable-next-line:variable-name
  n_PrecioO: number;



  // tslint:disable-next-line:variable-name
  f_Inicial: Date;



  // tslint:disable-next-line:variable-name
  f_Final: Date;



  // tslint:disable-next-line:variable-name
  h_Inicial: Date;



  // tslint:disable-next-line:variable-name
  h_Final: Date;



  // tslint:disable-next-line:variable-name
  Add_Date: Date;



  // tslint:disable-next-line:variable-name
  Update_Date: Date;



  // tslint:disable-next-line:variable-name
  c_CodFabricante: string;



  // tslint:disable-next-line:variable-name
  Hablador: number;



  // tslint:disable-next-line:variable-name
  c_CodMoneda: string;



  // tslint:disable-next-line:variable-name
  Cant_Decimales: number;



  // tslint:disable-next-line:variable-name
  Moneda_Ant: number;



  // tslint:disable-next-line:variable-name
  Moneda_Act: number;



  // tslint:disable-next-line:variable-name
  Moneda_Pro: number;



  // tslint:disable-next-line:variable-name
  c_Codigo_Base: string;



  // tslint:disable-next-line:variable-name
  c_Descri_Base: string;



  // tslint:disable-next-line:variable-name
  Text1: string;



  // tslint:disable-next-line:variable-name
  Text2: string;



  // tslint:disable-next-line:variable-name
  Text3: string;



  // tslint:disable-next-line:variable-name
  Text4: string;



  // tslint:disable-next-line:variable-name
  Text5: string;



  // tslint:disable-next-line:variable-name
  Text6: string;



  // tslint:disable-next-line:variable-name
  Text7: string;



  // tslint:disable-next-line:variable-name
  Text8: string;



  // tslint:disable-next-line:variable-name
  Date1: Date;



  // tslint:disable-next-line:variable-name
  Nume1: number;



  // tslint:disable-next-line:variable-name
  n_Cantidad_Tmp: string;



  // tslint:disable-next-line:variable-name
  c_Cod_Plantilla: string;



  // tslint:disable-next-line:variable-name
  c_UsuarioAdd: string;



  // tslint:disable-next-line:variable-name
  c_UsuarioUpd: string;



  // tslint:disable-next-line:variable-name
  n_Prod_Ext: string;



  // tslint:disable-next-line:variable-name
  n_Pro_Ext: string;



  // tslint:disable-next-line:variable-name
  nu_Tipo_Producto: number;



  // tslint:disable-next-line:variable-name
  nu_InsumoInterno: number;



  // tslint:disable-next-line:variable-name
  nu_PrecioRegulado: number;



  // tslint:disable-next-line:variable-name
  nu_PocentajeMerma: number;



  // tslint:disable-next-line:variable-name
  nu_NivelClave: number;



  // tslint:disable-next-line:variable-name
  cu_Descripcion_Corta: string;



  // tslint:disable-next-line:variable-name
  bs_PermiteTeclado: boolean;



  // tslint:disable-next-line:variable-name
  bs_PermiteCantidad: boolean;



  // tslint:disable-next-line:variable-name
  nu_StockMin: number;



  // tslint:disable-next-line:variable-name
  nu_StockMax: number;



  id: number;


  // tslint:disable-next-line:variable-name
  productId: string;


  // tslint:disable-next-line:variable-name
  id_codigo: string;
}
export class RequestUpdateProductDto {

  @IsString()
  @IsOptional()
  @ApiModelProperty()
  // tslint:disable-next-line:variable-name
  productId: string;

  @IsNumber()
  @IsOptional()
  @ApiModelProperty()
  // tslint:disable-next-line:variable-name
  categoryId: number;

  @IsString()
  @IsOptional()
  @ApiModelProperty()
  // tslint:disable-next-line:variable-name
  id: string;
}

export class ResponseProvidersByProductDto {
  code: string;
  description: string;
}
