import { config } from '../config/config.service';
import { Sequelize } from 'sequelize-typescript';
import { ExtendedModel } from 'src/common/interfaces/extendedModel';
import { logger } from 'src/common/services/logger.service';

export const DATABASEVAD10 = 'DataBaseVAD10';
export const DATABASEVAD20 = 'DataBaseVAD20';

export const databaseProviders = [
    {
         /*Connection to the database VAD10*/
        provide:  DATABASEVAD10,
        useFactory: async () => {
            const sequelize = new Sequelize({
                username: config.get('DB_USERNAME_VAD10'),
                password: config.get('DB_PASSWORD_VAD10'),
                dialect: 'mssql',
                host: config.get('DB_HOST_VAD10'),
                logging: false,
                // tslint:disable-next-line:ban
                port: parseInt(config.get('DB_PORT_VAD10'), 10),
                database: config.get('DB_NAME_VAD10'),
                benchmark: true,
                modelPaths: [__dirname + '/models/VAD10/**/*.entity.{ts,js}'],
                modelMatch: (filename, member) => {
                    return filename.substring(0, filename.indexOf('.entity')).toLocaleLowerCase() === member.toLowerCase();
                },
            });
            await sequelize.authenticate();
            return sequelize;
        },
    },
     {
      /*Connection to the database VAD20*/
        provide: DATABASEVAD20,
        useFactory: async () => {
            const sequelize = new Sequelize({
                username: config.get('DB_USERNAME_VAD20'),
                password: config.get('DB_PASSWORD_VAD20'),
                dialect: 'mssql',
                host: config.get('DB_HOST_VAD20'),
                logging: false,
                // tslint:disable-next-line:ban
                port: parseInt(config.get('DB_PORT_VAD20'), 10),
                database: config.get('DB_NAME_VAD20'),
                benchmark: true,
                modelPaths: [__dirname + '/models/VAD20/**/*.entity.{ts,js}'],
                modelMatch: (filename, member) => {
                    return filename.substring(0, filename.indexOf('.entity')).toLocaleLowerCase() === member.toLowerCase();
                },
            });
            await sequelize.authenticate();
            return sequelize;
        },

     }
];