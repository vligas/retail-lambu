import CategorySeeder from './category.seeder';
import CurrencySeeder from './currency.seeder';
import CurrencyHistorySeeder from './currency_history.seeder';
import ExtProductSeeder from './ext_product.seeder';
import DollarPriceSeeder from './dollar_price.seeder';
import TagSeeder from './tag.seeder';
import TagProductSeeder from './tag_product.seeder';
import ConfigSeeder from './config.seeder';
import PermissionSeeder from './permission.seeder';
import RoleSeeder from './role.seeder';
import ExtUserSeeder from './ext_user.seeder';
import CompetitorSeeder from './competitor.seeder';
import BranchofficeSeeder from './branchOffice.seeder';

export const order = [
    CategorySeeder,
    CurrencySeeder,
    CurrencyHistorySeeder,
    ExtProductSeeder,
    ExtUserSeeder,
    DollarPriceSeeder,
    TagSeeder,
    // TagProductSeeder,
    PermissionSeeder,
    RoleSeeder,
    ConfigSeeder,
    CompetitorSeeder,
    BranchofficeSeeder,
];