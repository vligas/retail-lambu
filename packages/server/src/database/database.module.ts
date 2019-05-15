import { Module } from '@nestjs/common';
import { databaseProviders } from './database.providers';
import { userProviders } from './models/VAD10/user/user.providers';
import { exOdcProviders } from './models/VAD10/exOdc/exOdc.provider';
import { dollarPriceProviders } from './models/VAD10/dollarPrice/dollarPrice.provider';
import { exProductProviders } from './models/VAD10/exProduct/product.provider';
import { trOdcProviders } from './models/VAD10/stellar/trOdc/trOdc.provider';
import { maOdcProviders } from './models/VAD10/stellar/maOdc/maOdc.provider';
import { categoryProviders } from './models/VAD10//category/category.provider';
import { maProveedoresProviders } from './models/VAD10/stellar/maProveedores/maProveedores.provider';
import { currencyProviders } from './models/VAD10/currency/currency.providers';
import { currencyHistoryProviders } from './models/VAD10/currencyHistory/currencyHistory.providers';
import { tagProviders } from './models/VAD10//tag/tag.provider';
import { tagProductProviders } from './models/VAD10/tagProduct/tagProduct.provider';
import { maDepartamentosProviders } from './models/VAD10//stellar/maDepartamentos/maDepartamentos.provider';
import { maGruposProviders } from './models/VAD10/stellar/maGrupos/maGrupos.provider';
import { maSubgruposProviders } from './models/VAD10//stellar/maSubgrupos/maSubgrupos.provider';
import { configProviders } from './models/VAD10/config/config.provider';
import { roleProviders } from './models/VAD10/role/role.provider';
import { permissionProviders } from './models/VAD10/permission/permission.provider';
import { rolePermissionProviders } from './models/VAD10/rolePermission/rolePermission.provider';
import { userRoleProviders } from './models/VAD10//userRole/userRole.provider';
import { userPermissionProviders } from './models/VAD10/userPermission/userPermission.provider';
import { trInventarioProviders } from './models/VAD10/stellar/trInventario/trInventario.provider';
import { maSucursalesProviders } from './models/VAD10/stellar/maSucursales/maSucursales.provider';
import { competitorProviders } from './models/VAD10/competitor/competitor.provider';
import { branchOfficeProviders } from './models/VAD10/branchOffice/branchOffice.provider';
import { competitorPriceProviders } from './models/VAD10/competitorPrice/competitorPrice.provider';
import { maEtiquetasProviders} from './models/VAD20/etiqueta/etiqueta.providers';
import { routeUserProviders } from './models/VAD10/routerUser/routeUser.provider';
// import { trOdcProviders } from './models/stellar/trOdc/trOdc.provider';


const entites = [
  ...databaseProviders,
  ...userProviders,
  ...dollarPriceProviders,
  ...exProductProviders,
  ...exOdcProviders,
  ...trOdcProviders,
  ...maOdcProviders,
  ...categoryProviders,
  ...maProveedoresProviders,
  ...currencyProviders,
  ...currencyHistoryProviders,
  ...tagProviders,
  ...maDepartamentosProviders,
  ...maGruposProviders,
  ...maSubgruposProviders,
  ...tagProductProviders,
  ...roleProviders,
  ...permissionProviders,
  ...rolePermissionProviders,
  ...userRoleProviders,
  ...userPermissionProviders,
  ...configProviders,
  ...trInventarioProviders,
  ...maSucursalesProviders,
  ...competitorProviders,
  ...branchOfficeProviders,
  ...competitorPriceProviders,
  ...maEtiquetasProviders,
  ...routeUserProviders
];

@Module({
  providers: entites,
  exports: entites
})
export class DatabaseModule { }