import * as Umzug from 'umzug';
import { logger } from 'src/common/services/logger.service';
import { Sequelize } from 'sequelize-typescript';

function logEvent(eventName) {
    return (name, migration) => {
        logger.info(`[${eventName}] - ${name}`);
    };
}


export function createUmzug(db: Sequelize) {
    const umzug = new Umzug({
        storage: 'sequelize',
        storageOptions: {
            sequelize: db
        },
        migrations: {
            params: [
                db,
                db.constructor,
            ],
            path: './src/build/migrations',
            pattern: /\.ts$/
        },
    });

    umzug.on('migrating', logEvent('migrating'));
    umzug.on('migrated', logEvent('migrated'));
    umzug.on('reverting', logEvent('reverting'));
    umzug.on('reverted', logEvent('reverted'));

    return umzug;
}