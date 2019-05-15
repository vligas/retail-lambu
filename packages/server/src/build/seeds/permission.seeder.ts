import { Inject } from '@nestjs/common';
import { SeedInterface } from 'src/common/interfaces/seedInterface.interface';
import { Permission } from 'src/database/models/VAD10/permission/permission.entity';

// tslint:disable-next-line:no-default-export
export default class PermissionSeeder implements SeedInterface {
    constructor(@Inject(Permission) private permissionRepository: typeof Permission) { }

    async run() {
        await this.permissionRepository.bulkCreate([{
            name: 'can-update-products',
            description: 'El usuario puede actualizar productos desde el sistema retail.'
        }, {
            name: 'can-read-gap-report',
            description: 'El usuario puede visualizar el reporte de gap.'
        }, {
            name: 'can-configure',
            description: 'El usuario puede configurar el sistema desde la pantalla de configuracion.'
        }, {
            name: 'can-spy',
            description: 'El usuario puede realizar tareas de espionaje empresarial.'
        }]);
    }
}