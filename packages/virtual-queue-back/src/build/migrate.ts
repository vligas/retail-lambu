import { bootstrap } from './main';
import { DATABASE } from 'src/database/database.providers';
import { createUmzug } from './umzug';
import { logger } from 'src/common/services/logger.service';
import { readFileSync } from 'fs';
import { copySync } from 'fs-extra';
import * as path from 'path';
import { Sequelize } from 'sequelize-typescript';
import * as umzug from 'umzug';

export async function migrateCommand() {
    let db: Sequelize;
    let migration: umzug.Umzug;
    const cmd = process.argv[2].trim();
    if (cmd !== 'new') {
        // tslint:disable-next-line:no-console
        console.log(cmd);
        db = await bootstrap('DataBaseVAD10');
        migration = createUmzug(db);
    }
    switch (cmd) {
        case 'up':
            await migration.up();
            break;
        case 'down':
            await migration.down({ to: 0 });
            break;
        case 'fresh':
            await migration.down({ to: 0 });
            await db.query('DROP TABLE SequelizeMeta');
            await migration.up();
            break;
        case 'new':
            const name = process.argv[3].trim();
            // tslint:disable-next-line:max-line-length
            // tslint:disable-next-line:align
            // tslint:disable-next-line:max-line-length
            const template = copySync(path.resolve(__dirname, './templates/migration.template.txt'),
                path.resolve(__dirname, `./migrations/${(new Date()).getTime()}_${name}.ts`));
            // tslint:disable-next-line:no-console
            console.log('entrando', cmd);
            break;
        default:
            logger.error(`comando "${cmd}" invalido... opciones validas: "up" y "down"`);
    }

    process.exit();
}

migrateCommand();
