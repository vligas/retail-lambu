import { Inject } from '@nestjs/common';
import { SeedInterface } from 'src/common/interfaces/seedInterface.interface';
import { Permission } from 'src/database/models/VAD10/permission/permission.entity';

// tslint:disable-next-line:no-default-export
export default class PermissionSeeder implements SeedInterface {
    constructor(@Inject(Permission) private permissionRepository: typeof Permission) { }

    async run() {
        await this.permissionRepository.bulkCreate([
            // Permissions of roles
            {
                name: 'can-read-roles',
                description: 'El usuario puede ver los roles disponibles en el sistema.'
            }, {
                name: 'can-update-roles',
                description: 'El usuario puede actualizar roles.'
            },{
                name: 'can-delete-roles',
                description: 'El usuario puede borrar roles.'
            }, {
                name: 'can-create-roles',
                description: 'El usuario puede crear roles.'
            },
            // Permissions of users.
            {
                name: 'can-read-users',
                description: 'El usuario puede ver los usuarios disponibles en el sistema.'
            }, {
                name: 'can-update-users',
                description: 'El usuario puede actualizar usuarios.'
            },{
                name: 'can-delete-users',
                description: 'El usuario puede borrar usuarios.'
            }, {
                name: 'can-create-users',
                description: 'El usuario puede crear usuarios.'
            },
            // Permissions of configuration
            {
                name: 'can-read-configuration',
                description: 'El usuario puede ver los roles disponibles en el sistema.'
            }, {
                name: 'can-update-configuration',
                description: 'El usuario puede actualizar roles.'
            },
            // Permission of own branch office
            {
                name: 'can-read-branch-offices',
                description: 'El usuario puede listar las sucursales de la empresa.'
            },
            // Permission of categories
            {
                name: 'can-read-categories',
                description: 'El usuario puede ver las categorias disponibles en el sistema.'
            }, {
                name: 'can-update-categories',
                description: 'El usuario puede actualizar categorias.'
            },{
                name: 'can-delete-categories',
                description: 'El usuario puede borrar categorias.'
            }, {
                name: 'can-create-categories',
                description: 'El usuario puede crear categorias.'
            },
            // Permission of currencies
            {
                name: 'can-read-currencies',
                description: 'El usuario puede ver las monedas disponibles en el sistema.'
            }, {
                name: 'can-update-currencies',
                description: 'El usuario puede actualizar monedas.'
            },{
                name: 'can-delete-currencies',
                description: 'El usuario puede borrar monedas.'
            }, {
                name: 'can-create-currencies',
                description: 'El usuario puede crear monedas.'
            },
            // Permission of currency historic
            {
                name: 'can-read-currencies-h',
                description: 'El usuario puede ver los reportes de precio de las monedas disponibles en el sistema.'
            }, {
                name: 'can-update-currencies-h',
                description: 'El usuario puede actualizar reportes de precio de las monedas.'
            },{
                name: 'can-delete-currencies-h',
                description: 'El usuario puede borrar reportes de precio de las monedas.'
            }, {
                name: 'can-create-currencies-h',
                description: 'El usuario puede crear reportes de precio de las monedas.'
            },
            // Permission of tags
            {
                name: 'can-read-tags',
                description: 'El usuario puede ver las etiquetas disponibles en el sistema.'
            }, {
                name: 'can-update-tags',
                description: 'El usuario puede actualizar etiquetas.'
            },{
                name: 'can-delete-tags',
                description: 'El usuario puede borrar etiquetas.'
            }, {
                name: 'can-create-tags',
                description: 'El usuario puede crear etiquetas.'
            },
            // Permission of products
            {
                name: 'can-read-products',
                description: 'El usuario puede ver los productos disponibles en el sistema.'
            }, {
                name: 'can-update-products',
                description: 'El usuario puede actualizar productos.'
            },
            // Permission of reports
            {
                name: 'can-read-gap',
                description: 'El usuario puede visualizar el reporte GAP'
            }, {
                name: 'can-read-variaton',
                description: 'El usuario puede visualizar el reporte de variacion de precio'
            },{
                name: 'can-read-sales',
                description: 'El usuario puede visualizazr el reporte de ventas'
            },
            // Permission of competition branch offices
            {
                name: 'can-read-competition-branch-office',
                description: 'El usuario puede ver las empresas que forman parte de la competencia disponibles en el sistema.'
            }, {
                name: 'can-update-competition-branch-office',
                description: 'El usuario puede actualizar empresas que forman parte de la competencia.'
            },{
                name: 'can-delete-competition-branch-office',
                description: 'El usuario puede borrar empresas que forman parte de la competencia.'
            }, {
                name: 'can-create-competition-branch-office',
                description: 'El usuario puede crear empresas que forman parte de la competencia.'
            },
            // Permission of competitors
            {
                name: 'can-read-competitors',
                description: 'El usuario puede ver los competidores disponibles en el sistema.'
            }, {
                name: 'can-update-competitors',
                description: 'El usuario puede actualizar competidores.'
            },{
                name: 'can-delete-competitors',
                description: 'El usuario puede borrar competidores.'
            }, {
                name: 'can-create-competitors',
                description: 'El usuario puede crear competidores.'
            },
            // Permission of Competitor prices
            {
                name: 'can-read-competitor-prices',
                description: 'El usuario puede ver los precios de los competidores disponibles en el sistema.'
            }, {
                name: 'can-update-competitor-prices',
                description: 'El usuario puede actualizar precios de los competidores.'
            },{
                name: 'can-delete-competitor-prices',
                description: 'El usuario puede borrar precios de los competidores.'
            }, {
                name: 'can-create-competitor-prices',
                description: 'El usuario puede crear precios de los competidores.'
            },
            // Permission of routes
            {
                name: 'can-read-routes',
                description: 'El usuario puede ver los rutas que se pueden asignar a los usuarios disponibles en el sistema.'
            }, {
                name: 'can-update-routes',
                description: 'El usuario puede actualizar rutas que se pueden asignar a los usuarios.'
            },{
                name: 'can-delete-routes',
                description: 'El usuario puede borrar rutas que se pueden asignar a los usuarios.'
            }, {
                name: 'can-create-routes',
                description: 'El usuario puede crear rutas que se pueden asignar a los usuarios.'
            },
        ]);
    }
}